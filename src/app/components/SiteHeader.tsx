import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stroke/60 bg-surface/85 px-6 py-4 backdrop-blur-md md:px-14">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="#hero">
          <h1 className="text-xl font-bold text-primary md:text-2xl">
            {`< /> Naveen.dev`}
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-wide">
            <li>
              <Link
                href="#about"
                className="text-neutral transition-colors hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#featured-projects"
                className="text-neutral transition-colors hover:text-primary"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-neutral transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="rounded-full border border-stroke p-2 text-neutral transition-colors hover:border-primary hover:text-primary md:hidden">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
