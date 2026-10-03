import { ArrowUpIcon } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row ">
        <Button variant="destructive">Button</Button>
        <Button
          className="bg-walid-500"
          variant="ghost"
          size="icon"
          aria-label="Submit"
        >
          <ArrowUpIcon />
        </Button>
      </div>{" "}
    </div>
  );
}

export default App;
