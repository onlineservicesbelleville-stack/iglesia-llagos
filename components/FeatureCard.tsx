import Link from "next/link";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  btnLabel?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  btnLabel = "Ver más",
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center text-center border border-cream-200 group">
      <div className="text-5xl mb-4">{icon}</div>
      <h3
        className="text-xl font-bold text-marian-600 mb-3"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 bg-marian-500 hover:bg-marian-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors group-hover:bg-golden-500 group-hover:text-marian-900"
      >
        {btnLabel} →
      </Link>
    </div>
  );
}
