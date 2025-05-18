import { categories } from "@/lib/categories";
import { notFound } from "next/navigation";
import Image from "next/image";
import TemplatePreviewGrid from "@/components/TemplatePreviewGrid";

interface Props {
  params: {
    slug: string;
    templateId: string;
  };
}

export default function TemplateDetailPage({ params }: Props) {
  const category = categories.find((cat) => cat.slug === params.slug);
  const template = category?.templates?.find((temp) => temp.id === params.templateId);

  if (!category || !template) return notFound();

  // Filter out the current template (optional, to avoid showing it again)
  const relatedTemplates = category.templates.filter((t) => t.id !== template.id);

  return (
  <main className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{template.name}</h1>

      <div className="relative w-[1024px] h-full rounded-lg overflow-hidden mb-4 shadow-2xl">
  <Image
    src={template.image1 ?? "/fallback.jpg"}
    alt={template.name}
    width={1024}
    height={750}
    className="rounded-lg object-cover"
  />
</div>


      <p className="mb-4 text-green-700">
        {template.description || "This is a modern and responsive template perfect for businesses."}
      </p>

      <p className="text-lg font-semibold mb-4 text-gray-800">
        Price: <span className="text-gray-800">{template.price || "Contact for pricing"}</span>
      </p>

      {template.demoUrl && (
        <a
          href={template.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Live Demo
        </a>
      )}

      {/* 🟦 Related Templates Grid */}
      {relatedTemplates.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">More Templates in {category.name}</h2>
          <TemplatePreviewGrid
            categorySlug={category.slug}
            templates={relatedTemplates}
            limit={5} // Optional: show only 3
          />
        </div>
      )}
    </main>
  );
}
