import { createStart, createMiddleware } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";
import { jwtVerify } from "jose";
import { serverEnv } from "./lib/env.server";

const getSecret = () => new TextEncoder().encode(serverEnv.authSecret);

// Équivalent de l'ancien `proxy.ts` (middleware Next) : protège /admin/*
// (sauf /admin/login) en vérifiant le JWT du cookie `admin-session`.
const adminAuthMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
      const cookie = request.headers.get("cookie") ?? "";
      const token = cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("admin-session="))
        ?.slice("admin-session=".length);

      if (!token) {
        throw redirect({ to: "/admin/login" });
      }

      try {
        await jwtVerify(decodeURIComponent(token), getSecret());
      } catch {
        throw redirect({ to: "/admin/login" });
      }
    }

    return next();
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [adminAuthMiddleware],
}));
