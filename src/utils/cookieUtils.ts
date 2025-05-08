import { cookies } from 'next/headers';

/**
 * Utility to get a cookie value by name from the Next.js server context.
 * @param name The name of the cookie to retrieve.
 * @returns The cookie value, or undefined if not found.
 */
export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie?.value;
}

/**
 * Utility to check if the user is authenticated by checking for 'auth_token' cookie.
 * @returns True if authenticated, false otherwise.
 */
export async function isAuthenticated(): Promise<boolean> {
  const authToken = await getCookie('auth_token');
  return !!authToken;
}
