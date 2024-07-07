import Image from "next/image";
import React from "react";
import bg from "@/public/bg2.jpg";
import mockup1 from "@/public/mockup1.svg";
import mockup2 from "@/public/mockup2.svg";

function ProjectCard({ title, body, dependencies, desktop, mobile, style }) {
  return (
    <div className="first:pt-8 md:first:pt-16 pt-11 pb-11 md:py-16 grid md:grid-cols-2 gap-11 md:gap-16">
      <div className="flex flex-col justify-between h-full max-w-[602px]">
        <div className="">
          <h2 className="text-[28px] md:text-[32px] leading-[140%] md:leading-[148%] tracking-[-0.96px] md:tracking-[-1.28px] font-medium text-mono-900">
            {title}
          </h2>
          <p className="mt-3 md:mt-4 clip3 text-mono-200 md:text-[24px] leading-[162.5%] tracking-[-0.48px] md:tracking-[-0.72px]">
            {body}
          </p>
        </div>
        <ul className="hidden md:flex gap-1 flex-wrap">
          {dependencies.map((item) => (
            <li
              className="h-[30px] rounded-[8px] px-3 flex items-center justify-center border border-[#EBEBEC] font-cutive tracking-[-0.3px]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="w-full relative h-[419px] md:h-[560px] overflow-hidden rounded-[10px]">
          <div className="w-full h-full relative grid z-[10] overflow-hidden pt-10 pl-10 md:pt-14 md:pl-14">
            <div className="h-full w-full flex relative z-[1]">
              <Image
                className="hidden md:block object-[0_0] object-cover"
                src={desktop}
                alt=""
                fill
              />
              <Image
                className="block md:hidden object-[0_0] object-cover"
                src={mobile}
                alt=""
                fill
                quality={100}
              />
            </div>

            <div className="absolute top-0 h-full w-full">
              <div className="w-[4096px] relative h-full overflow-hidden">
                <Image
                  className={`absolute w-[4096px] h-[2731px] ${style}`}
                  src={bg}
                  alt=""
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className="md:hidden mt-4 flex gap-1 flex-wrap">
          {dependencies.map((item) => (
            <li
              className="h-[30px] text-[12px] rounded-[8px] px-3 flex items-center justify-center border border-[#EBEBEC] font-cutive tracking-[-0.3px]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
