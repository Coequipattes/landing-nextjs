import { Nav } from "@/components/public/nav";
import { Footer } from "@/components/public/footer";
import { JsonLd } from "@/components/public/json-ld";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
