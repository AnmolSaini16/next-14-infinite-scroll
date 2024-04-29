import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="py-4 border-b-2 border-gray-900/6 flex justify-between items-center">
      <h1 className="text-2xl font-medium">Next 14 Infinite Scroll</h1>
      <Button variant="outline">Source Code</Button>
    </nav>
  );
}
