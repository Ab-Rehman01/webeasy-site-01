import { notFound } from "next/navigation";
import Image from "next/image";
import { categories } from "../../../lib/categories";
import { templates } from "../../../lib/templates";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const cat = categories.find((c) => c.slug === params.slug);
  return {
    title: cat ? `${cat.name} | Webeasy Templates` : "Template",
    description: cat
      ? `Browse our premium ${cat.name.toLowerCase()} templates.`
      : "Template details page",
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const filteredTemplates = templates.filter(
    (template) => template.category === params.slug
  );

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{category.name}</h1>

      <div className="relative w-full h-280 mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Templates:</h2>

      {filteredTemplates.length === 0 ? (
        <p className="text-gray-500 text-center">No templates found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="border rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                <a
                  href={template.demoUrl}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
