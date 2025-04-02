import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="h-[7svh] max-w-3xl mx-auto px-5 border-b">
      <div className="flex w-full h-full items-center justify-between">
        <h1 className="text-3xl">Gen Pass</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
