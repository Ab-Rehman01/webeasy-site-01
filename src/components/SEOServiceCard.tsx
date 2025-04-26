// components/SEOServiceCard.tsx
import Link from 'next/link';

interface SEOServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function SEOServiceCard({ title, description, slug }: SEOServiceCardProps) {
  return (
    <Link href={`/seo-services/${slug}`}>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:bg-gray-700 cursor-pointer">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
