import { CalendarClock, MessageSquareWarning, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { assignmentSummary } from "@/data/assignments";

const summaryCards = [
  {
    label: "Due this week",
    value: assignmentSummary.dueThisWeek,
    icon: CalendarClock,
    tone: "rx:bg-primary-50 rx:text-primary-500",
  },
  {
    label: "Submitted",
    value: assignmentSummary.submitted,
    icon: Send,
    tone: "rx:bg-(--assignment-info-surface) rx:text-(--assignment-info)",
  },
  {
    label: "Needs review",
    value: assignmentSummary.needsReview,
    icon: MessageSquareWarning,
    tone: "rx:bg-(--assignment-alert-surface) rx:text-(--assignment-alert)",
  },
];

export function AssignmentSummary() {
  return (
    <section
      aria-label="Assignment summary"
      className="rx:grid rx:grid-cols-1 rx:gap-4 rx:sm:grid-cols-3"
    >
      {summaryCards.map(({ label, value, icon: Icon, tone }) => (
        <Card
          key={label}
          className="rx:h-[100px] rx:flex-row rx:items-center rx:gap-3.5 rx:rounded-2xl rx:p-[18px] rx:shadow-none"
        >
          <div
            className={`rx:flex rx:size-[42px] rx:shrink-0 rx:items-center rx:justify-center rx:rounded-xl ${tone}`}
          >
            <Icon aria-hidden="true" className="rx:size-5" strokeWidth={2} />
          </div>
          <dl className="rx:flex rx:flex-col rx:gap-1">
            <dt className="rx:text-xs rx:leading-[14px] rx:text-learnly-muted">
              {label}
            </dt>
            <dd className="rx:text-2xl rx:leading-[29px] rx:font-bold rx:text-learnly-surface-foreground">
              {value}
            </dd>
          </dl>
        </Card>
      ))}
    </section>
  );
}
