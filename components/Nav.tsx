import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="py-4 border-b-2 border-gray-900/6 flex justify-between items-center">
      <h1 className="text-2xl font-medium">Next 14 Infinite Scroll</h1>
      <Button variant="outline" asChild>
        <Link
          href="https://github.com/AnmolSaini16/next-14-infinite-scroll"
          target="_blank"
        >
          <Github className="w-4 h-4 mr-2" />
          Source code
        </Link>
      </Button>
    </nav>
  );
}
