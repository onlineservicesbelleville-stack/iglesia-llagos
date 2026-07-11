import { ActivityCategory, categoryStyles } from "@/data/programs";

interface CategoryBadgeProps {
  category: ActivityCategory;
  className?: string;
}

export default function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  const style = categoryStyles[category];

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${style.bg} ${style.text} border ${style.border} text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${className}`}
    >
      <span aria-hidden="true">{style.icon}</span>
      {style.label}
    </span>
  );
}
