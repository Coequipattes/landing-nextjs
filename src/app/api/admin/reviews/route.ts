import { NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";
import {
  getReviews,
  fetchGoogleReviews,
  toggleReviewVisibility,
} from "@/lib/google-reviews";

export async function GET(request: Request) {
  // Allow cron access via Bearer token OR admin session
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (authHeader === `Bearer ${cronSecret}` && cronSecret) {
    // Cron access — refresh reviews
    const reviews = await fetchGoogleReviews();
    return NextResponse.json({ refreshed: true, count: reviews.length });
  }

  // Admin session access — just list
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const reviews = await getReviews();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  // Force refresh from Google
  const reviews = await fetchGoogleReviews();
  return NextResponse.json({ refreshed: true, count: reviews.length });
}

export async function PUT(request: Request) {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { authorName, visible } = await request.json();
  await toggleReviewVisibility(authorName, visible);
  return NextResponse.json({ success: true });
}
