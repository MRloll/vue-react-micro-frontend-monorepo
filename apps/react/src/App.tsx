import type { user } from "@repo/types";

function App() {
  const user: user = {
    email: "test",
    id: 1,
    name: "test",
    password: "122",
  };

  return (
    <div className="bg-green-400">
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}

export default App;
