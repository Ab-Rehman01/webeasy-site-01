// src/components/Testimonials.tsx

const testimonials = [
    {
      name: 'Ahsan Raza',
      role: 'Shopify Store Owner',
      comment:
        'Webeasy-Tech ne mujhe ek complete, beautiful Shopify store deliver ki. Inka kaam fast aur professional tha!',
    },
    {
      name: 'Sarah Khan',
      role: 'Digital Marketer',
      comment:
        'Inki marketing services ne meri ads performance double kar di. Highly recommended!',
    },
    {
      name: 'Ali Zafar',
      role: 'Software Distributor',
      comment:
        'Software installation, licensing, aur support sab kuch seamless tha. Great support!',
    },
  ]
  
  export default function Testimonials() {
  return (
    <section className="w-full bg-gray-800 text-white py-2 px-4 my-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg italic mb-4">“{t.comment}”</p>
              <hr className="border-gray-600 mb-4" />
              <h4 className="font-semibold text-xl">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}