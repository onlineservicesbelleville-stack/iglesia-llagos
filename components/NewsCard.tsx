import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/data/news";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-cream-200 flex flex-col">
      {news.image && (
        <div className="relative h-48 w-full">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marian-900/60 to-transparent" />
          <span className="absolute top-3 left-3 bg-golden-500 text-marian-900 text-xs font-bold px-3 py-1 rounded-full">
            {news.category}
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {!news.image && (
          <span className="inline-block bg-golden-100 text-golden-700 text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
            {news.category}
          </span>
        )}
        <p className="text-xs text-gray-400 mb-2">{news.date}</p>
        <h3
          className="text-lg font-bold text-marian-600 mb-3 leading-snug"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {news.summary}
        </p>
        <Link
          href={`/noticias/${news.slug}`}
          className="inline-flex items-center gap-1 text-marian-500 hover:text-golden-600 text-sm font-semibold transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </article>
  );
}
