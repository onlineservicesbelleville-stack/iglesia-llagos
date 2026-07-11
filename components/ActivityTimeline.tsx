import { Activity } from "@/data/programs";
import CategoryBadge from "@/components/CategoryBadge";

interface ActivityTimelineProps {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity, idx) => (
        <div
          key={`${activity.time}-${idx}`}
          className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
        >
          <span className="bg-marian-600 text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap mt-0.5 shrink-0">
            {activity.time}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="text-gray-800 font-semibold leading-snug">
                {activity.title}
              </p>
              <CategoryBadge category={activity.category} />
            </div>
            {activity.description && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            )}
            {activity.sponsor && (
              <p className="text-golden-700 text-sm mt-1.5 font-medium leading-relaxed">
                {activity.sponsor}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
