"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto rounded-3xl border border-gray-700 gap-x-8",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem item="About" setActive={setActive} />
        <MenuItem setActive={setActive} active={active} item="Meetings">
          <div className="text-sm text-neutral-500 grid grid-cols-2 gap-10 p-4">
            <HoveredLink href="/meetings">Spring 2024</HoveredLink>
            <HoveredLink href="/meetings">Fall 2023</HoveredLink>
            <HoveredLink href="/meetings">Spring 2023</HoveredLink>
            <HoveredLink href="/meetings">Fall 2022</HoveredLink>
            <HoveredLink href="/meetings">Spring 2022</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          href="/eboard"
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
