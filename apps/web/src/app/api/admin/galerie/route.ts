import { NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";
import {
  getGalleryItems,
  addGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
} from "@/lib/gallery";

async function requireAuth() {
  if (!(await verifySession())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await requireAuth();
  if (denied) return denied;
  const items = await getGalleryItems();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const denied = await requireAuth();
  if (denied) return denied;

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;

  if (!file || !title || !category) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const item = await addGalleryImage(file, title, category);
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(request: Request) {
  const denied = await requireAuth();
  if (denied) return denied;

  const { src, title, category } = await request.json();
  if (!src) {
    return NextResponse.json({ error: "src requis" }, { status: 400 });
  }

  await updateGalleryImage(src, { title, category });
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const denied = await requireAuth();
  if (denied) return denied;

  const { src } = await request.json();
  if (!src) {
    return NextResponse.json({ error: "src requis" }, { status: 400 });
  }

  await deleteGalleryImage(src);
  return NextResponse.json({ success: true });
}
