import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-[5svh] max-w-3xl mx-auto px-5 mb-5 border-t">
      <div className="flex w-full h-full items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Supachai Sr. All rights reserved.
        </p>
        <Link
          href="https://github.com/pxsstx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
