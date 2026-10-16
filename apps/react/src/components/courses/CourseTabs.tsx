import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CourseFilter } from "@repo/types";

const tabs: { id: CourseFilter; label: string }[] = [
  { id: "all", label: "All courses" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
  { id: "saved", label: "Saved" },
];

function CourseTabs() {
  return (
    <TabsList aria-label="Filter courses">
      {tabs.map((tab) => {
        return (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
}

export default CourseTabs;
