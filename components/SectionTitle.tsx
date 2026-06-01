interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-marian-600"
        }`}
        style={{ fontFamily: "Georgia, serif" }}
      >
        {title}
      </h2>
      <div className="gold-divider mb-4" />
      {subtitle && (
        <p
          className={`text-lg mt-4 max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-blue-100" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
