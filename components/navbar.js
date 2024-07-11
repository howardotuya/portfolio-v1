"use client";
import React, { useEffect, useState } from "react";
import Container from "./container";
import Link from "next/link";
import { routes } from "@/more/routes";
import menu from "@/public/hamburger-menu.svg";
import Image from "next/image";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // Clean up the event listener
    };
  }, [scrollDirection]);

  return scrollDirection;
};

function Navbar() {
  const scrollDirection = useScrollDirection();
  const [navbarStyle, setNavbarStyle] = useState({ opacity: 1 });

  useEffect(() => {
    if (scrollDirection === "down") {
      setNavbarStyle({ opacity: 0 });
    } else if (scrollDirection === "up") {
      setNavbarStyle({ opacity: 1 });
    }
  }, [scrollDirection]);

  return (
    <div
      style={{ ...navbarStyle }}
      className="sticky top-0 bg-[#F1EDE1] z-[1000]"
    >
      <Container innerStyle={"max-w-[1312px]"} style={""}>
        <div className="pt-6 pb-6 flex w-full justify-between items-center">
          <nav className="h-[62px] px-6 text-white rounded-[10px] hidden md:inline-flex bg-[#6F4F1E] gap-8 items-center *:tracking-[-1.28px] font-semibold">
            <Link
              className="hover:text-[#F7E5C5] hover:underline underline-offset-2"
              href={routes.contact}
            >
              Contact
            </Link>
            <Link
              className="hover:text-[#F7E5C5] hover:underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              download={"Howard_Otuya_resume"}
              href={"/resume/resume.pdf"}
            >
              Resume
            </Link>
            <Link
              className="hover:text-[#F7E5C5] hover:underline underline-offset-2"
              href={routes.projects}
            >
              Projects
            </Link>
          </nav>

          <h6 className="text-[24px] font-medium leading-[32px] tracking-[-1.92px] text-[#444] lowercase">
            Howard Otuya
          </h6>

          <Image className="block md:hidden" src={menu} alt="" />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
