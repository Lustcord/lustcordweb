import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const ageVerified = request.cookies.get('ageVerified');

  // Convert ageVerified to a string if it is defined
  const ageVerifiedValue = ageVerified ? ageVerified.value : undefined;

  if (ageVerifiedValue === 'false') {
    url.pathname = '/no-access';
    return NextResponse.redirect(url);
  }

  // If the cookie is not set, redirect to no-access if the path is not excluded
  if (ageVerifiedValue !== 'true' && url.pathname !== '/no-access') {
    url.pathname = '/no-access';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};