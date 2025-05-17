// components/TemplateCategories.tsx
import Image from "next/image";
import Link from "next/link"; // ✅ import Link
import { categories } from "../lib/categories";



export default function TemplateCategories() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/templates/${category.slug}`}
            className="block rounded-xl shadow-lg overflow-hidden border h-[300px] group"
          >
            <div className="relative w-full h-[250px]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-4 text-center bg-opacity-10 bg-black">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
