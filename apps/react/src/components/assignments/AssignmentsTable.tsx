import type { Assignment, AssignmentStatus } from "@/data/assignments";

interface AssignmentsTableProps {
  assignments: Assignment[];
}

const statuses: Record<AssignmentStatus, { label: string; className: string }> =
  {
    "due-soon": { label: "Due soon", className: "rx:bg-primary-500" },
    "in-review": {
      label: "In review",
      className: "rx:bg-(--assignment-review)",
    },
    "not-started": { label: "Not started", className: "rx:bg-learnly-muted" },
    submitted: {
      label: "Submitted",
      className: "rx:bg-(--assignment-submitted)",
    },
  };

export function AssignmentsTable({ assignments }: AssignmentsTableProps) {
  return (
    <section
      aria-label="Assignments"
      className="rx:min-h-[360px] rx:min-w-0 rx:flex-1 rx:rounded-2xl rx:border rx:border-learnly-line rx:bg-learnly-surface rx:p-5"
    >
      <div
        role="region"
        aria-label="Assignment list, scroll horizontally to see all columns"
        tabIndex={0}
        className="rx:overflow-x-auto rx:rounded-sm rx:focus-visible:outline-2 rx:focus-visible:outline-offset-4 rx:focus-visible:outline-learnly-ring"
      >
        <table className="rx:w-full rx:min-w-[740px] rx:table-fixed rx:border-collapse rx:text-left">
          <caption className="rx:sr-only">
            Coursework and upcoming deadlines
          </caption>
          <colgroup>
            <col className="rx:w-[32.55%]" />
            <col className="rx:w-[19.89%]" />
            <col className="rx:w-[13.56%]" />
            <col />
          </colgroup>
          <thead>
            <tr className="rx:text-[11px] rx:leading-[13px] rx:text-learnly-muted">
              {["Assignment", "Course", "Due date", "Status"].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="rx:pr-4 rx:pb-3.5 rx:font-normal rx:uppercase"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="rx:border-t rx:border-learnly-line rx:text-[13px] rx:leading-4"
              >
                <th
                  scope="row"
                  className="rx:py-4 rx:pr-4 rx:font-normal rx:text-learnly-surface-foreground"
                >
                  {assignment.title}
                </th>
                <td className="rx:py-4 rx:pr-4 rx:text-learnly-muted">
                  {assignment.course}
                </td>
                <td className="rx:py-4 rx:pr-4 rx:text-learnly-muted">
                  <time dateTime={assignment.dueDate}>
                    {assignment.dueLabel}
                  </time>
                </td>
                <td className="rx:py-4">
                  <span
                    className={`rx:inline-flex rx:items-center rx:justify-center rx:rounded-full rx:px-3 rx:py-[7px] rx:text-xs rx:leading-[14px] rx:whitespace-nowrap rx:text-white ${statuses[assignment.status].className}`}
                  >
                    {statuses[assignment.status].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
