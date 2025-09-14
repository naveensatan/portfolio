import Link from "next/link";
import React from "react";

function SiteFooter() {
  return (
    <div className="bg-secondary-background py-5 flex justify-between shadow-lg shadow-stroke px-20 w-full">
      <h1 className="text-2xl font-bold">{`< /> Naveen.dev`}</h1>
      <ul className="gap-8 hidden md:flex">
        <Link href="https://github.com/naveensatan" target="_blank">
          <li className="text-neutral cursor-pointer hover:text-accent transition-all duration-200">
            Github
          </li>
        </Link>
        <Link
          href="https://www.facebook.com/naveensatanarachchi"
          target="_blank"
        >
          <li className="text-neutral cursor-pointer hover:text-accent transition-all duration-200">
            Facebook
          </li>
        </Link>
        <Link
          href="https://www.instagram.com/lankan_down_under/"
          target="_blank"
        >
          <li className="text-neutral cursor-pointer hover:text-accent transition-all duration-200">
            Instagram
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SiteFooter;
