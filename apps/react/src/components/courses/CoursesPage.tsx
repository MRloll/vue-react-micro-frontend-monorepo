import { useState } from "react";
import type {
  CourseFilter,
  CoursesPageProps,
  LearningQueueItem,
} from "@repo/types";
import CourseCard from "./CourseCard";
import CourseTabs from "./CourseTabs";
import { courses } from "@/data/courses";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const courseFilters: CourseFilter[] = [
  "all",
  "in-progress",
  "completed",
  "saved",
];

function CoursesPage({
  queuedCourseIds,
  onToggleQueue,
}: CoursesPageProps = {}) {
  const [activeTab, setActiveTab] = useState<CourseFilter>("all");
  // Standalone React preview works without requiring the Vue host or Pinia.
  const [localQueueIds, setLocalQueueIds] = useState<string[]>([]);
  const queueIds = queuedCourseIds ?? localQueueIds;

  function toggleQueue(course: LearningQueueItem) {
    if (onToggleQueue) {
      onToggleQueue(course);
      return;
    }
    setLocalQueueIds((ids) =>
      ids.includes(course.id)
        ? ids.filter((id) => id !== course.id)
        : [...ids, course.id],
    );
  }

  const visibleCourses = courses.filter((course) => {
    if (activeTab === "all") return true;
    if (activeTab === "saved") return course.saved;
    return course.status === activeTab;
  });

  function handleTabChange(value: unknown) {
    if (
      typeof value === "string" &&
      courseFilters.includes(value as CourseFilter)
    ) {
      setActiveTab(value as CourseFilter);
    }
  }

  return (
    <div>
      <div className="rx:mx-auto rx:flex rx:w-full rx:flex-col rx:gap-5">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <CourseTabs />

          <TabsContent value={activeTab}>
            <section className="rx:flex rx:flex-col rx:gap-3.5">
              {visibleCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  queued={queueIds.includes(course.id)}
                  onToggleQueue={toggleQueue}
                />
              ))}
            </section>

            {visibleCourses.length === 0 && (
              <Card
                className="rx:mt-3.5 rx:rounded-2xl rx:border-dashed rx:py-10"
                role="status"
              >
                <CardContent className="rx:px-6 rx:text-center rx:text-sm rx:text-learnly-muted">
                  No courses in this tab yet.
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CoursesPage;
