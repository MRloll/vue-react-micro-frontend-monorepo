import { useState } from "react";
import type { CourseFilter } from "@repo/types";
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

function CoursesPage() {
  const [activeTab, setActiveTab] = useState<CourseFilter>("all");

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
    <main className="rx:min-h-screen">
      <div className="rx:mx-auto rx:flex rx:w-full rx:flex-col rx:gap-5">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <CourseTabs />

          <TabsContent value={activeTab}>
            <section className="rx:flex rx:flex-col rx:gap-3.5">
              {visibleCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
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
    </main>
  );
}

export default CoursesPage;
