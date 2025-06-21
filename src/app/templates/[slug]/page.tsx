import { categories } from "@/lib/categories";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import TemplateCategories from "@/components/TemplateCategories";

interface Props {
  params: {
    slug: string;
  };
}
export const metadata = {
  title: 'Website Templates | Webeasy-Tech',
  description: 'Choose from premium website templates crafted for speed, design, and conversions — all by Webeasy-Tech.',
  keywords: 'website templates, free templates, portfolio, business designs',
  openGraph: {
    title: 'Website Templates | Webeasy-Tech',
    description: 'Browse high-quality, ready-to-use templates for business, portfolio, and eCommerce websites.',
    url: 'https://webeasy-tech.vercel.app/templates',
    type: 'website',
    images: ['/og-image.png'],
  },
};
export default function CategoryPage({ params }: Props) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) return notFound();

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">{category.name}</h1>

      {category.templates ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.templates.map((template) => (
            <Link
              key={template.id}
              href={`/templates/${params.slug}/${template.id}`}
            >
              <div className="relative group rounded-xl shadow-lg overflow-hidden border h-[400px]">
              <div className="relative w-full h-[2000px] overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="object-cover group-hover:translate-y-[-60%] transition-transform duration-[3000ms] ease-in-out"
                  />
                </div>
               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 text-lg font-semibold z-10">
                {template.name}
              </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No templates available in this category.
        </p>
      )}
      {categories.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-center text-black">
                    More Templates in {category.name}
                  </h2>
                  <TemplateCategories />
                
                    
                  
                </div>
              )}
    </main>
  );
}


// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { categories } from "../../../lib/categories";
// import { templates } from "../../../lib/templates";

// export async function generateStaticParams() {
//   return categories.map((c) => ({ slug: c.slug }));
// }

// export async function generateMetadata({ params }) {
//   const cat = categories.find((c) => c.slug === params.slug);
//   return {
//     title: cat ? `${cat.name} | Webeasy Templates` : "Template",
//     description: cat
//       ? `Browse our premium ${cat.name.toLowerCase()} templates.`
//       : "Template details page",
//   };
// }

// export default function CategoryPage({ params }: { params: { slug: string } }) {
//   const category = categories.find((c) => c.slug === params.slug);
//   if (!category) return notFound();

//   const filteredTemplates = templates.filter(
//     (template) => template.category === params.slug
//   );

//   return (
//     <section className="py-12 px-4 max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6 text-center">{category.name}</h1>

//       <div className="relative w-full h-280 mb-10 rounded-xl overflow-hidden shadow-lg">
//         <Image
//           src={category.image}
//           alt={category.name}
//           fill
//           sizes="100vw"
//           className="object-cover"
//         />
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Templates:</h2>

//       {filteredTemplates.length === 0 ? (
//         <p className="text-gray-500 text-center">No templates found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredTemplates.map((template) => (
//             <div key={template.id} className="border rounded-xl shadow-md overflow-hidden">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={template.image}
//                   alt={template.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">{template.name}</h3>
//                 <a
//                   href={template.demoUrl}
//                   target="_blank"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
