
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { comparePasswords, generateJwtToken, setAuthCookie } from '@/utils/authUtils';


export async function POST(request: Request) {
  try {
    const prisma = new PrismaClient();
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await comparePasswords(password, user.password || ''))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const token = generateJwtToken(user.id);
    setAuthCookie(token);
    return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}