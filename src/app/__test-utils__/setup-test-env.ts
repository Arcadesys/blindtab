import { config } from 'dotenv';
config({ path: '.env.test' });

import { mockPrisma } from './mocks/prisma';

global.Request = class Request {};
global.Response = class Response {};
global.Headers = class Headers {
  private headers: Record<string, string>;
  
  constructor(init?: Record<string, string>) {
    this.headers = init || {};
  }
  
  get(name: string): string | null {
    return this.headers[name] || null;
  }
  
  set(name: string, value: string): void {
    this.headers[name] = value;
  }
};

jest.mock('next/server', () => {
  type ResponseInit = {
    status?: number;
    headers?: Record<string, string>;
  };

  type RequestInit = {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
  };

  class NextResponse {
    status: number;
    body: any;
    headers: Headers;
    
    constructor(body: any, init?: ResponseInit) {
      this.body = body;
      this.status = init?.status || 200;
      this.headers = new Headers(init?.headers);
    }
    
    async json() {
      return this.body;
    }
    
    static json(body: any, init?: ResponseInit) {
      const response = new NextResponse(body, init);
      return response;
    }
    
    static redirect(url: string | URL) {
      const response = new NextResponse(null, {
        status: 302,
        headers: { Location: url.toString() }
      });
      return response;
    }
  }
  
  class NextRequest {
    url: string;
    method: string;
    headers: Headers;
    private _body: any;
    
    constructor(url: string, init: RequestInit = {}) {
      this.url = url;
      this.method = init.method || 'GET';
      this.headers = new Headers(init.headers);
      this._body = init.body;
    }
    
    async json() {
      if (typeof this._body === 'string') {
        return JSON.parse(this._body);
      }
      return this._body;
    }
  }
  
  return {
    NextResponse,
    NextRequest,
  };
});

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        user: {
          findUnique: jest.fn(),
          findMany: jest.fn(),
          create: jest.fn(),
          update: jest.fn(),
          delete: jest.fn(),
        },
        song: {
          findUnique: jest.fn(),
          findMany: jest.fn(),
          create: jest.fn(),
          update: jest.fn(),
          delete: jest.fn(),
        },
        tag: {
          findUnique: jest.fn(),
          findMany: jest.fn(),
          create: jest.fn(),
        },
        $disconnect: jest.fn(),
      };
    }),
  };
});

jest.mock('next/headers', () => {
  return {
    cookies: jest.fn(() => Promise.resolve({
      get: jest.fn((name) => {
        if (name === 'auth_token') {
          return { value: 'mock-token' };
        }
        return null;
      }),
    })),
  };
});

jest.mock('jsonwebtoken', () => {
  return {
    verify: jest.fn((token, secret) => {
      if (token === 'mock-token') {
        return { userId: 'mock-user-id' };
      }
      throw new Error('Invalid token');
    }),
    sign: jest.fn(() => 'mock-token'),
  };
});

jest.mock('bcrypt', () => {
  return {
    hash: jest.fn(() => Promise.resolve('hashed-password')),
    compare: jest.fn((password, hash) => {
      return Promise.resolve(password === 'correct-password');
    }),
  };
});
