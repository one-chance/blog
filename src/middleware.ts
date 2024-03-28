import { NextResponse, type NextRequest } from 'next/server';
import { getLogInUser } from './utils/supabase/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const isAuthedUser = await getLogInUser();

    if (!isAuthedUser) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname.startsWith('/login')) {
    const isAuthedUser = await getLogInUser();

    if (isAuthedUser) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}
