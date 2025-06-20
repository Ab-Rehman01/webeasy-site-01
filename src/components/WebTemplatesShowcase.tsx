
import Image from "next/image";

// components/WebTemplatesShowcase.tsx
const projects = [
  {
    title: "Modern Portfolio",

    image: "/screencapture-blucomtechnologiesss.jpg",
  },
  {
    title: "E-Commerce Store",

    image: "/screencapture-file-K.png",
  },
  {
    title: "Agency Landing Page",

    image: "/screencapture.jpg",
  },
];



export default function WebTemplatesShowcase() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">Our Web Showcase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl shadow-lg overflow-hidden border h-[450px]"
          >
            <div className="relative w-full h-[1400px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover transform translate-y-0 group-hover:-translate-y-[1000px] transition-transform duration-[3000ms] ease-in-out"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 text-lg font-semibold z-10">
              {project.title}
            </div>
          </div>


        ))}
      </div>
    </section>
  );
}


//   export default function WebTemplatesShowcase() {
//     return (
//       <section className="py-12 px-4 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">Our Web Templates</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg border">
//               <div className="h-[300px] overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-lg font-semibold p-4">
//                 {project.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

