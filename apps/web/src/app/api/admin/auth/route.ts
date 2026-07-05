import { NextResponse } from "next/server";
import { createSession, destroySession, verifyPassword } from "@/lib/auth";
import { serverEnv } from "@/lib/env.server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email !== serverEnv.adminEmail) {
    return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
  }

  const valid = await verifyPassword(password);
  if (!valid) {
    return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ success: true });
}

export async function DELETE() {
  await destroySession();
  return NextResponse.json({ success: true });
}
