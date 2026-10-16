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
      <div className="rx:dark:bg-learnly-brand rx:flex rx:flex-col rx:items-center rx:justify-center rx:h-16">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
      <div className="rx:flex rx:flex-wrap rx:items-center rx:gap-2 rx:md:flex-row ">
        <Button variant="destructive">Button</Button>
        <Button
          className="rx:bg-learnly-brand"
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
