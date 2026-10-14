import type { user } from "@repo/types";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";
const user: user = {
  email: "test",
  id: 1,
  name: "test",
  password: "122",
};

const NavBar = () => {
  return (
    <div>
      <div className="dark:bg-primary-500 flex flex-col items-center justify-center h-16">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row ">
        <Button variant="destructive">Button</Button>
        <Button
          className="bg-orange-500"
          variant="ghost"
          size="icon"
          aria-label="Submit"
        >
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
