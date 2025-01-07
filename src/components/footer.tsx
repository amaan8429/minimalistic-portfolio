"use client";

import { Twitter } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { name, twitterLink } from "@/data/aboutMe";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-6 space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <ModeToggle />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Made by{" "}
                <Link
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {name}
                </Link>
              </span>
              <Link
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent"
                aria-label="Twitter"
              >
                <Twitter className="w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground"></div>
        </div>
      </div>
    </footer>
  );
}
