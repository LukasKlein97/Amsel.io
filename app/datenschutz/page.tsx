import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import fs from "fs";
import path from "path";

export default function DatenschutzPage() {
  const filePath = path.join(process.cwd(), "components", "html", "ds.html");
  let dsHtml = "";

  dsHtml = fs.readFileSync(filePath, "utf8");

  const cleanedHtml = dsHtml
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "")
    .replace(
      /<h2/g,
      '<h2 style="font-size: 1.5rem; font-weight: 600; color: white; margin-top: 2rem; margin-bottom: 1rem;"'
    )
    .replace(
      /<h3/g,
      '<h3 style="font-size: 1.25rem; font-weight: 600; color: white; margin-top: 1.5rem; margin-bottom: 0.75rem;"'
    )
    .replace(
      /<h4/g,
      '<h4 style="font-size: 1.125rem; font-weight: 600; color: white; margin-top: 1rem; margin-bottom: 0.5rem;"'
    )
    .replace(
      /<p/g,
      '<p style="font-size: 1.125rem; margin-bottom: 1rem; line-height: 1.6;"'
    )
    .replace(
      /<ul/g,
      '<ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem;"'
    )
    .replace(/<li/g, '<li style="margin-bottom: 0.5rem;"')
    .replace(/<a/g, '<a style="color: #60a5fa; text-decoration: underline;"');

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Datenschutzerklärung
            </h1>

            <div className="bg-slate-800 rounded-lg p-8 space-y-8 shadow-xl">
              <div
                className="text-gray-300 space-y-4"
                dangerouslySetInnerHTML={{ __html: cleanedHtml }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
