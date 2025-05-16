// components/TemplateCategories.tsx
import Image from "next/image";

const categories = [
  {
    name: "Portfolio Templates",
    image: "/categories/portfolio.jpg",
  },
  {
    name: "E-Commerce Templates",
    image: "/categories/ecommerce.jpg",
  },
  {
    name: "Construction Business",
    image: "/categories/construction.jpg",
  },
  {
    name: "Landing Pages",
    image: "/categories/landing.jpg",
  },
  {
    name: "Business Sites",
    image: "/categories/business.jpg",
  },
  {
    name: "Blogs & Magazines",
    image: "/categories/blogs.jpg",
  },
];

export default function TemplateCategories() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group rounded-xl shadow-lg overflow-hidden border h-[300px]"
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
            <div className="p-4 text-cente bg-opacity-10 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center">{category.name}</h3>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
