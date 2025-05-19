import { categories } from "@/lib/categories";
import { notFound } from "next/navigation";
import Image from "next/image";
import TemplatePreviewGrid from "@/components/TemplatePreviewGrid";
import Head from "next/head"; // for SEO

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

  const relatedTemplates = category.templates.filter((t) => t.id !== template.id);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{template.seoTitle || template.name}</title>
        <meta name="description" content={template.metaDescription || template.description} />
        <meta property="og:title" content={template.seoTitle || template.name} />
        <meta property="og:description" content={template.metaDescription || template.description} />
        <meta property="og:image" content={template.image} />
        <meta name="keywords" content={template.tags?.join(", ")} />
      </Head>

      <main className="p-6 max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{template.name}</h1>

        <div className="relative w-full max-w-[1024px] mx-auto rounded-lg overflow-hidden mb-4 shadow-2xl">
          <Image
            src={template.image1 ?? "/fallback.jpg"}
            alt={template.imageAlt ?? template.name}
            width={1024}
            height={750}
            className="rounded-lg object-cover"
          />
        </div>

        <section className="text-gray-700 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-black">Description</h2>
            <p>{template.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black">Overview</h2>
            <p>{template.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black">Portfolio Gallery</h2>
            <p>{template.gallery}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black">Skills & Timeline</h2>
            <p>{template.skill}</p>
          </div>
        </section>

        {Array.isArray(template.features) && template.features.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              {template.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}


        <div className="mt-6 text-lg font-semibold text-gray-800">
          Price: <span>{template.price}</span>
        </div>

        {template.demoUrl && (
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}

        {relatedTemplates.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
              More Templates in {category.name}
            </h2>
            <TemplatePreviewGrid
              categorySlug={category.slug}
              templates={relatedTemplates}
              limit={5}
            />
          </div>
        )}
      </main>
    </>
  );
}
