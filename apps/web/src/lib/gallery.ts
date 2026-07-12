import { readFile, writeFile, unlink, mkdir } from "node:fs/promises";
import path from "node:path";

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
};

const DATA_PATH = path.join(process.cwd(), "src/data/gallery.json");
const UPLOAD_DIR = path.join(process.cwd(), "public/uploads/gallery");

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      console.warn(`gallery.json introuvable à ${DATA_PATH}, retour []`);
      return [];
    }
    throw err;
  }
}

export async function saveGalleryItems(items: GalleryItem[]) {
  await writeFile(DATA_PATH, JSON.stringify(items, null, 2));
}

export async function addGalleryImage(
  file: File,
  title: string,
  category: string,
): Promise<GalleryItem> {
  await mkdir(UPLOAD_DIR, { recursive: true });

  const ext = path.extname(file.name) || ".jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
  const filepath = path.join(UPLOAD_DIR, filename);

  const buffer = Buffer.from(await file.arrayBuffer());

  // Resize with sharp if available
  try {
    const sharp = (await import("sharp")).default;
    await sharp(buffer)
      .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(filepath.replace(ext, ".jpg"));
  } catch {
    // Fallback: save raw file
    await writeFile(filepath, buffer);
  }

  const src = `/uploads/gallery/${filename.replace(ext, ".jpg")}`;
  const item: GalleryItem = { src, title, category };

  const items = await getGalleryItems();
  items.push(item);
  await saveGalleryItems(items);

  return item;
}

export async function deleteGalleryImage(src: string) {
  const items = await getGalleryItems();
  const filtered = items.filter((i) => i.src !== src);
  await saveGalleryItems(filtered);

  // Delete file
  const filepath = path.join(process.cwd(), "public", src);
  try {
    await unlink(filepath);
  } catch {
    // File may not exist
  }
}

export async function updateGalleryImage(
  src: string,
  updates: Partial<Pick<GalleryItem, "title" | "category">>,
) {
  const items = await getGalleryItems();
  const item = items.find((i) => i.src === src);
  if (!item) throw new Error("Image not found");
  if (updates.title) item.title = updates.title;
  if (updates.category) item.category = updates.category;
  await saveGalleryItems(items);
}
