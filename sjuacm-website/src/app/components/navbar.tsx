"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto z-50 rounded-3xl border border-gray-700 gap-x-8",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About</HoveredLink>
            <HoveredLink href="/interface-design">Meetings</HoveredLink>
            <HoveredLink href="/seo">E-Board</HoveredLink>
            <HoveredLink href="/branding">Resources</HoveredLink>
            <HoveredLink href="/branding">Blog</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Meetings"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="E-Board"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Resources"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
      </Menu>
    </div>
  );
}
