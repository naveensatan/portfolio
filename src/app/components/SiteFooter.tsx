import Link from "next/link";
import React from "react";

function SiteFooter() {
  return (
    <footer className="border-t border-stroke/70 bg-surface/80 px-6 py-8 backdrop-blur-md md:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-bold text-primary md:text-xl">
          {`< /> Naveen.dev`}
        </h2>
        <ul className="flex flex-wrap items-center gap-6 text-sm font-semibold tracking-wide">
          <li>
            <Link
              href="https://github.com/naveensatan"
              target="_blank"
              className="text-neutral hover:text-primary"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/naveensatanarachchi"
              target="_blank"
              className="text-neutral hover:text-primary"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/lankan_down_under/"
              target="_blank"
              className="text-neutral hover:text-primary"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default SiteFooter;
