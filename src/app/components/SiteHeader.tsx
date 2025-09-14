import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function SiteHeader() {
  return (
    <div className="bg-secondary-background py-5 flex shadow-lg shadow-stroke px-20">
      <h1 className="text-2xl font-bold min-w-1/3 m-auto">{`< /> Naveen.dev`}</h1>
      <nav className="flex flex-1 justify-center md:justify-end">
        <ul className="gap-8 hidden md:flex">
          <Link href="#about">
            <li className="text-neutral cursor-pointer hover:text-accent transition-all duration-200">
              About
            </li>
          </Link>
          <Link href="#featured-projects">
            <li className="text-neutral cursor-pointer hover:text-accent transition-all duration-200">
              Projects
            </li>
          </Link>
          <Link href="#contact">
            <li className="text-neutral cursor-pointer hover:text-accent transition-all duration-200">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
      <div className="min-w-1/3 flex justify-end md:hidden">
        <button className="py-2 cursor-pointer rounded-md hover:text-accent transition-all duration-200">
          <Menu />
        </button>
      </div>
    </div>
  );
}

export default SiteHeader;
