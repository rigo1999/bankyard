"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNavBar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full  ">
      <Sheet>
        <SheetTrigger>
          <Image
            alt="hamburger menu"
            src="/icons/hamburger.svg"
            height={30}
            width={30}
            className="cursor-pointer "
          />
        </SheetTrigger>
        <SheetContent side="left" className=" bg-white border-none   " >
          <Link
            href="/"
            className="flex  cursor-pointer  items-center  gap-1 px-4"
          >
            <Image
              alt="Bankyard"
              src="/icons/logo.svg"
              width={34}
              height={34}
           
            />
            <h1 className=" text-26 font-ibm-plex-serif font-bold text-black-1
             ">Bankyard</h1>
          </Link>
          <div className=" mobilenav-sheet" >
            <SheetClose>
              <nav  className=" flex h-full flex-col gap-6  pt-16 text-white ">
                {sidebarLinks.map((sidebarLink) => {
                  const isActive =
                    pathname === sidebarLink.route ||
                    pathname.startsWith(`${sidebarLink.route}/`);
                  return (

                    <SheetClose asChild key={ sidebarLink.route} >
                      <Link
                      href={sidebarLink.route}
                      key={sidebarLink.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                        <Image
                        width={20}
                        height={20}
                          alt={sidebarLink.label}
                          src={sidebarLink.imgURL}
                         
                          className={cn({ "brightness-[3] invert-0 ": isActive })}
                        />
                      <p
                        className={cn("text-16 font-semibold text-black-2", { "!text-white ": isActive })}
                      >
                        {sidebarLink.label}
                      </p>
                    </Link>
                    </SheetClose>
                    
                  );
                })}
                OUR USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavBar;
