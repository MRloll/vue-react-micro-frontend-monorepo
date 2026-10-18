import { useState } from "react";
import { assignments } from "@/data/assignments";
import { AssignmentSummary } from "./AssignmentSummary";
import { AssignmentsTable } from "./AssignmentsTable";
import "@/index.css";

const courses = [
  ...new Set(assignments.map((assignment) => assignment.course)),
];

export function AssignmentsPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const visibleAssignments = assignments.filter(
    (assignment) => !selectedCourse || assignment.course === selectedCourse,
  );

  return (
    <div className="rx:flex rx:min-h-[calc(100dvh-140px)] rx:w-full rx:flex-1 rx:flex-col rx:gap-6 rx:font-sans">
      <header className="rx:flex rx:flex-col rx:gap-4 rx:sm:flex-row rx:sm:items-center rx:sm:justify-between">
        <div className="rx:min-w-0">
          <h1 className="rx:text-[28px] rx:leading-[34px] rx:font-bold rx:text-learnly-surface-foreground">
            Assignments
          </h1>
          <p className="rx:mt-1.5 rx:text-sm rx:leading-[17px] rx:text-learnly-muted">
            Stay on top of your coursework and upcoming deadlines.
          </p>
        </div>
        <select
          aria-label="Filter by course"
          value={selectedCourse}
          onChange={(event) => setSelectedCourse(event.target.value)}
          className="rx:max-w-full rx:cursor-pointer rx:appearance-none rx:self-start rx:rounded-full rx:border rx:border-transparent rx:bg-learnly-surface rx:px-3 rx:py-[7px] rx:text-xs rx:leading-[15px] rx:text-learnly-muted rx:focus-visible:outline-2 rx:focus-visible:outline-offset-2 rx:focus-visible:outline-learnly-ring rx:sm:self-auto"
        >
          <option value="">Filter by course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </header>

      <AssignmentSummary />
      <p className="rx:sr-only" role="status" aria-live="polite">
        Showing {visibleAssignments.length}{" "}
        {visibleAssignments.length === 1 ? "assignment" : "assignments"}
        {selectedCourse ? ` for ${selectedCourse}` : " across all courses"}.
      </p>
      <AssignmentsTable assignments={visibleAssignments} />
    </div>
  );
}

export default AssignmentsPage;
