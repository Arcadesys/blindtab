import { DefaultSession } from "next-auth";

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  image?: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  error?: string;
}

export interface OAuthProvider {
  id: string;
  name: string;
  icon: string;
}

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}
