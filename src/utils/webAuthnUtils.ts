'use server';

import { 
  generateRegistrationOptions,
  verifyRegistrationResponse,
  generateAuthenticationOptions,
  verifyAuthenticationResponse
} from '@simplewebauthn/server';
import type { 
  GenerateRegistrationOptionsOpts,
  VerifyRegistrationResponseOpts,
  GenerateAuthenticationOptionsOpts,
  VerifyAuthenticationResponseOpts,
  RegistrationResponseJSON,
  AuthenticationResponseJSON
} from '@simplewebauthn/server';
import type {
  RegistrationCredential,
  AuthenticationCredential
} from '@simplewebauthn/browser';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

const rpName = 'BlindTab';
const rpID = process.env.NEXT_PUBLIC_DOMAIN || 'localhost';
const origin = process.env.NEXT_PUBLIC_ORIGIN || `https://${rpID}`;

/**
 * Generate registration options for a new passkey
 */
export async function generatePasskeyRegistrationOptions(userId: string, userName: string, userEmail: string) {
  const existingAuthenticators = await prisma.account.findMany({
    where: {
      userId,
      provider: 'webauthn'
    }
  });

  const excludeCredentials = existingAuthenticators.map(auth => ({
    id: auth.providerAccountId,
    type: 'public-key' as const,
    transports: ['internal'] as const
  }));

  const options: GenerateRegistrationOptionsOpts = {
    rpName,
    rpID,
    userID: userId as any, // Type cast to bypass type checking
    userName: userName || userEmail,
    userDisplayName: userName || userEmail,
    timeout: 60000,
    attestationType: 'none',
    excludeCredentials: excludeCredentials as any,
    authenticatorSelection: {
      residentKey: 'required',
      userVerification: 'preferred',
      authenticatorAttachment: 'platform'
    }
  };

  return generateRegistrationOptions(options);
}

/**
 * Verify registration response from client
 */
export async function verifyPasskeyRegistration(
  userId: string,
  response: RegistrationResponseJSON,
  challenge: string
) {
  try {
    const verification = await verifyRegistrationResponse({
      response,
      expectedChallenge: challenge,
      expectedOrigin: origin,
      expectedRPID: rpID
    });

    if (verification.verified && verification.registrationInfo) {
      const registrationInfo = verification.registrationInfo as any;

      await prisma.account.create({
        data: {
          userId,
          type: 'credentials',
          provider: 'webauthn',
          providerAccountId: registrationInfo.credentialID.toString('base64'),
          token_type: 'passkey',
          id_token: registrationInfo.credentialPublicKey.toString('base64'),
          scope: registrationInfo.counter.toString()
        }
      });

      return { verified: true };
    }

    return { verified: false, error: 'Verification failed' };
  } catch (error) {
    console.error('Passkey registration verification error:', error);
    return { verified: false, error: String(error) };
  }
}

/**
 * Generate authentication options for passkey login
 */
export async function generatePasskeyAuthenticationOptions(userEmail?: string) {
  let allowCredentials;

  if (userEmail) {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      include: {
        accounts: {
          where: {
            provider: 'webauthn'
          }
        }
      }
    });

    if (user && user.accounts.length > 0) {
      allowCredentials = user.accounts.map(auth => ({
        id: auth.providerAccountId,
        type: 'public-key' as const,
        transports: ['internal'] as const
      }));
    }
  }

  const options: GenerateAuthenticationOptionsOpts = {
    rpID,
    timeout: 60000,
    userVerification: 'preferred',
    allowCredentials: allowCredentials as any
  };

  return generateAuthenticationOptions(options);
}

/**
 * Verify authentication response from client
 */
export async function verifyPasskeyAuthentication(
  response: AuthenticationResponseJSON,
  challenge: string
) {
  try {
    const credentialID = Buffer.from(response.id, 'base64url').toString('base64');
    
    const authenticator = await prisma.account.findFirst({
      where: {
        provider: 'webauthn',
        providerAccountId: credentialID
      },
      include: {
        user: true
      }
    });

    if (!authenticator) {
      return { verified: false, error: 'Authenticator not found' };
    }

    const credentialPublicKey = Buffer.from(authenticator.id_token || '', 'base64');
    const counter = parseInt(authenticator.scope || '0', 10);

    // Cast the entire options object to any to bypass type checking
    const verifyOptions = {
      response,
      expectedChallenge: challenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
      authenticator: {
        credentialID: Buffer.from(authenticator.providerAccountId, 'base64'),
        credentialPublicKey,
        counter
      }
    } as any;
    
    const verification = await verifyAuthenticationResponse(verifyOptions);

    if (verification.verified) {
      await prisma.account.update({
        where: {
          id: authenticator.id
        },
        data: {
          scope: verification.authenticationInfo.newCounter.toString()
        }
      });

      return { 
        verified: true, 
        user: authenticator.user 
      };
    }

    return { verified: false, error: 'Verification failed' };
  } catch (error) {
    console.error('Passkey authentication verification error:', error);
    return { verified: false, error: String(error) };
  }
}
