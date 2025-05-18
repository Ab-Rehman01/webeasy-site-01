import { categories } from "@/lib/categories";
import { notFound } from "next/navigation";
import Image from "next/image";

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

  return (
    <main className="p-6 max-w-3xl mx-auto">
  <h1 className="text-3xl font-bold mb-4">{template.name}</h1>

  <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
    <Image
      src={template.image1}
      alt={template.name}
      fill
      className="object-cover"
    />
  </div>

  <p className="mb-4 text-green-700">
    {template.description || "This is a modern and responsive template perfect for businesses."}
  </p>

  <p className="text-lg font-semibold mb-4">
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
</main>

  );
}
