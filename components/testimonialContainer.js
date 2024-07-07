"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./container";
import arrowLeft from "@/public/arrow-left.svg";
import arrowRight from "@/public/arrow-right.svg";
import bg4 from "@/public/bg4.svg";
import Image from "next/image";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

function TestimonialContainer() {
  const swiperRef = useRef();
  const [beginning, setBeginning] = useState(true);
  const [end, setEnd] = useState(false);
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      breakpoints: {
        320: {
          spaceBetween: 16,
        },
        767: {
          spaceBetween: 40,
        },
      },
      slidesPerView: "auto",
      navigation: true,
    });

    swiperRef.current = swiper;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);
  const testimonials = [
    {
      text: "My experience with Howard was outstanding. He demonstrated great attention to detail and was professional throughout the entire process. I will always recommend Howard to anyone in need of top-notch website development.",
      name: "Ayomide Yemi",
      from: "Founder, Renbi women",
    },

    {
      text: "Howard is a pixel perfect developer. I will gladly recommend him to anyone.",
      name: "Ibukun Abejide",
      from: "Senior product designer, Prifina",
    },

    {
      text: "His dedication to the overall success of each project is truly exceptional. He pays incredible attention to detail, welcomes new ideas with enthusiasm, and always ensures that deliverables are completed well before the deadline. Howard is an absolute asset to any team!",
      name: "Damilare Protocol",
      from: "Backend Engineer, Rvysion",
    },
  ];

  return (
    <Container style={"mt-14 md:mt-16 mb-8 md:mb-[150px]"}>
      <div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] md:text-[56px] font-semibold leading-[120%] tracking-[-1.92px] md:tracking-[-4.48px] text-[#7E5C27]">
              Kind words from our clients
            </h2>
            <div className="hidden md:flex gap-[6px] md:gap-2 items-end justify-end">
              <button
                disabled={beginning}
                onClick={() => {
                  swiperRef.current?.slidePrev();
                  setBeginning(swiperRef.current?.isBeginning);
                  setEnd(swiperRef.current?.isEnd);
                }}
                class="disabled:opacity-60 swiper-button-prev w-[44px_!important] md:w-[52px_!important] shrink-0 h-[44px_!important] md:h-[52px_!important] relative"
              >
                <div className="flex items-center justify-center rounded-full bg-[#885606] w-full h-full">
                  <Image src={arrowLeft} alt="" />
                </div>
              </button>

              <button
                disabled={end}
                onClick={() => {
                  swiperRef.current?.slideNext();
                  setBeginning(swiperRef.current?.isBeginning);
                  setEnd(swiperRef.current?.isEnd);
                }}
                class="disabled:opacity-60 swiper-button-next w-[44px_!important] md:w-[52px_!important] shrink-0 h-[44px_!important] md:h-[52px_!important] relative"
              >
                <div className="flex items-center justify-center rounded-full bg-[#885606] w-full h-full">
                  <Image src={arrowRight} alt="" />
                </div>
              </button>
            </div>
          </div>

          <div class="mt-6 md:mt-8 swiper relative">
            <div class="swiper-wrapper relative">
              {testimonials.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="swiper-slide cursor-pointer max-w-[90%] md:max-w-[530px]"
                  >
                    <div className="swiper-child bg-white rounded-[12px] py-16 px-8 md:pt-[114px] md:pb-8 md:px-14 md:w-[530px] md:min-h-[556px]">
                      <p className="text-[20px] md:text-[24px] text-[#885606] font-medium leading-[148%] tracking-[-0.779px] md:tracking-[-.96px]">
                        {item.text}
                      </p>
                      <div className="mt-8">
                        <h6 className="text-[#151514] font-nyght text-[17px] md:text-[24px] leading-[162.5%] tracking-[-0.511px] md:tracking-[-0.72px]">
                          {item.name}
                        </h6>
                        <h6 className="mt-1 text-[12px] md:text-[16px] text-[#885606] tracking-[-0.487px] md:tracking-[-0.68px] font-medium leading-[148%]">
                          {item.from}
                        </h6>
                      </div>
                    </div>
                    <Image
                      className="object-cover object-center"
                      src={bg4}
                      alt=""
                      fill
                    />
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="mt-6 flex md:hidden gap-[6px] md:gap-2 items-end justify-end">
            <button
              disabled={beginning}
              onClick={() => {
                swiperRef.current?.slidePrev();
                setBeginning(swiperRef.current?.isBeginning);
                setEnd(swiperRef.current?.isEnd);
              }}
              class="disabled:opacity-60 swiper-button-prev w-[44px_!important] md:w-[52px_!important] shrink-0 h-[44px_!important] md:h-[52px_!important] relative"
            >
              <div className="flex items-center justify-center rounded-full bg-[#885606] w-full h-full">
                <Image src={arrowLeft} alt="" />
              </div>
            </button>

            <button
              disabled={end}
              onClick={() => {
                swiperRef.current?.slideNext();
                setBeginning(swiperRef.current?.isBeginning);
                setEnd(swiperRef.current?.isEnd);
              }}
              class="disabled:opacity-60 swiper-button-next w-[44px_!important] md:w-[52px_!important] shrink-0 h-[44px_!important] md:h-[52px_!important] relative"
            >
              <div className="flex items-center justify-center rounded-full bg-[#885606] w-full h-full">
                <Image src={arrowRight} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TestimonialContainer;