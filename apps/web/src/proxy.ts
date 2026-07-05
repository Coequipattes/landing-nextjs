import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { serverEnv } from "./lib/env.server";

const getSecret = () => new TextEncoder().encode(serverEnv.authSecret);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin routes (except login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin-session")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      await jwtVerify(token, getSecret());
    } catch {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
