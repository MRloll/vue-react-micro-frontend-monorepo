import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/components/ui/progress";
import type { CourseCardData } from "../../data/courses";

type CourseCardProps = {
  course: CourseCardData;
};

function CourseCard({ course }: CourseCardProps) {
  const CourseIcon = course.icon;
  const actionLabel = course.status === "completed" ? "Review" : "Continue";

  return (
    <Card
      aria-label={course.title}
      className="rx:gap-4 rx:rounded-2xl rx:p-4 rx:sm:flex-row rx:sm:items-center rx:sm:gap-5 rx:sm:p-[18px]"
      role="article"
    >
      <div
        aria-hidden="true"
        className={`rx:flex rx:h-28 rx:w-full rx:shrink-0 rx:items-center rx:justify-center rx:rounded-xl rx:sm:h-[90px] rx:sm:w-[150px] ${course.thumbnailClass}`}
      >
        <CourseIcon
          className={`rx:size-7 ${course.iconClass}`}
          strokeWidth={1.8}
        />
      </div>

      <CardContent className="rx:min-w-0 rx:flex-1 rx:space-y-2 rx:px-0">
        <Badge
          className="rx:border-transparent rx:bg-transparent rx:px-0 rx:py-0 rx:uppercase rx:tracking-wide rx:text-learnly-brand"
          variant="outline"
        >
          {course.category}
        </Badge>
        <CardTitle className="rx:truncate rx:text-base rx:sm:text-[17px]">
          {course.title}
        </CardTitle>
        <CardDescription className="rx:text-xs">
          {course.lessons} lessons <span aria-hidden="true">·</span> Self paced
        </CardDescription>
        <Progress
          aria-label={`${course.title}: ${course.progress}% complete`}
          value={course.progress}
        >
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
      </CardContent>

      <CardFooter className="rx:flex rx:justify-between rx:gap-4 rx:p-0 rx:sm:min-w-24 rx:sm:flex-col rx:sm:items-end">
        <span className="rx:text-sm rx:font-semibold rx:text-learnly-surface-foreground">
          {course.progress}%
        </span>
        <Button
          className="rx:h-8 rx:rounded-full rx:bg-learnly-brand rx:px-3 rx:text-xs rx:text-learnly-brand-foreground rx:hover:bg-learnly-brand/90"
          type="button"
        >
          {actionLabel}
          <ArrowRight aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
