"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sidebarLinks } from "@/constants";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex mb-12 cursor-pointer  items-center  gap-2"
        >
          <Image
            alt="Bankyard"
            src="/icons/logo.svg"
            width={34}
            height={34}
            className=" size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Bankyard</h1>
        </Link>
        {sidebarLinks.map((sidebarLink) => {
          const isActive =
            pathname === sidebarLink.route ||
            pathname.startsWith(`${sidebarLink.route}/`);
          return (
            <Link
              href={sidebarLink.route}
              key={sidebarLink.label}
              className={cn("sidebar-link ", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  alt={sidebarLink.label}
                  src={sidebarLink.imgURL}
                  fill
                  className={cn({ "brightness-[3] invert-0 ": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white ": isActive })}>
                {sidebarLink.label}
              </p>
            </Link>
          );
        })}
        USER BANks
      </nav>
      Add a footer
    </section>
  );
};

export default SideBar;
