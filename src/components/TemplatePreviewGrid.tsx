import Link from "next/link";
import Image from "next/image";

interface Template {
  id: string;
  name: string;
  image: string;
}

interface Props {
  categorySlug: string;
  templates: Template[];
   limit?: number;
}

export default function TemplatePreviewGrid({ categorySlug, templates }: Props) {
  const previewTemplates = templates.slice(0, 5); // Only first 3

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4 text-black">
      {previewTemplates.map((template) => (
        <Link
          key={template.id}
          href={`/templates/${categorySlug}/${template.id}`}
          className="block border rounded-lg overflow-hidden hover:shadow-md"
        >
          <div className="relative h-48">
            <Image
              src={template.image}
              alt={template.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-2 text-center [background-color:#ffbe0c] text-white">
            <h3 className="text-sm font-medium">{template.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
