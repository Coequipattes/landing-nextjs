import { SignJWT, jwtVerify } from "jose";
import {
  getCookie,
  setCookie,
  deleteCookie,
} from "@tanstack/react-start/server";
import { serverEnv } from "./env.server";

const getSecret = () => new TextEncoder().encode(serverEnv.authSecret);
const COOKIE_NAME = "admin-session";

export async function createSession() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .setIssuedAt()
    .sign(getSecret());

  setCookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function verifySession(): Promise<boolean> {
  try {
    const token = getCookie(COOKIE_NAME);
    if (!token) return false;
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function destroySession() {
  deleteCookie(COOKIE_NAME);
}

export async function verifyPassword(password: string): Promise<boolean> {
  const storedHash = serverEnv.adminPasswordHash || undefined;
  if (!storedHash) return false;

  const { createHash } = await import("node:crypto");
  const { timingSafeEqual } = await import("node:crypto");
  const inputHash = createHash("sha256").update(password).digest("hex");
  const a = Buffer.from(inputHash);
  const b = Buffer.from(storedHash);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
