import CoursesPage from "@/components/courses/CoursesPage";
import AssignmentsPage from "@/components/assignments/AssignmentsPage";

function App() {
  if (window.location.pathname === "/assignments") {
    return (
      <main>
        <AssignmentsPage />
      </main>
    );
  }

  return (
    <>
      <CoursesPage />
    </>
  );
}

export default App;
