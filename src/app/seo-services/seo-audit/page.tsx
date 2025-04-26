// app/seo-services/seo-audit/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Audit | Identify & Fix SEO Issues',
  description: 'Get a complete SEO audit report to enhance your website’s Google ranking and visibility.',
};

export default function SEOAuditPage() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-500 mb-4">SEO Audit</h1>
      <p className="mb-4">
        Our SEO audit service analyzes every aspect of your website – from technical SEO to content strategy – to uncover opportunities for better visibility and higher rankings.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Technical SEO check</li>
        <li>Meta tags & keyword analysis</li>
        <li>Mobile and speed optimization</li>
        <li>Backlink profile overview</li>
        <li>Actionable recommendations</li>
      </ul>
    </section>
  );
}
