import type { user } from "@repo/types";
const user: user = {
  email: "test",
  id: 1,
  name: "test",
  password: "122",
};

const NavBar = () => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default NavBar;
