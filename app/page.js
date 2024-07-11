import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg2.jpg";
import mockup1 from "@/public/mockup1.svg";
import mockup2 from "@/public/mockup2.svg";
import ProjectCard from "@/components/projectCard";
import ProjectContainer from "@/components/projectContainer";
import bg2 from "@/public/bg.svg";
import anchor from "@/public/anchor.svg";
import TestimonialContainer from "@/components/testimonialContainer";
import howardotuya from "@/public/howardotuya.svg";
import { routes } from "@/more/routes";
import Navbar from "@/components/navbar";

export default function Home() {
  const ways = [
    {
      title: "Pixel-Perfect Implemented Websites",
      message:
        "Transform designs into seamless, pixel-perfect websites that resonate with your audience and enhance your brand’s online presence.",
    },
    {
      title: "Web App Development and Maintenance",
      message:
        "Develop robust, scalable web applications from concept to ongoing support, ensuring smooth, efficient, and secure functionality.",
    },
    {
      title: "Super-Fast Delivery with Senior-Level Quality",
      message:
        "Experience rapid development with senior-level quality, delivering high-quality web applications quickly and efficiently.",
    },
  ];

  return (
    <>
      <div className="h-[1px] mt-3"></div>
      <Navbar />

      <Container innerStyle={"max-w-[1312px]"} style={"bg-[#F1EDE1]"}>
        <div className="mt-[93px] md:mt-[66px] mx-auto max-w-[963px] flex flex-col justify-center items-center">
          <h1 className="w-full font-medium text-[40px] md:text-[90px] leading-[56px] md:leading-[100px] tracking-[-2.8px] md:tracking-[-6.3px] lowercase headerBackground">
            transform your tech ideas & dreams into loveable digital platforms.
          </h1>

          <div className="mt-7 md:mt-[51px] mb-[100px] md:mb-[120px] w-full flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <h6 className="max-w-[340px] text-[#3E301C] md:text-[20px] leading-[28px] tracking-[-0.8px] md:tracking-[-1px] lowercase">
              experience bespoke software solutions crafted with precision and
              care
            </h6>
            <Link
              href={routes.startProject}
              className="hover:bg-[#6F4F1E] mt-[10px] md:mt-0 h-14 flex justify-center items-center bg-[#885606] px-8 rounded-[8px] tracking-[-1.28px] font-semibold text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="w-full bg-[#C1A58D] h-[1px]"></div>

        <div className="mt-11 md:mt-8 md:mb-14 mb-10 w-full h-[419px] md:h-[724px] overflow-hidden rounded-[10px]">
          <div className="w-full h-full relative grid z-[10] overflow-hidden pt-8 pl-8 md:pt-[96px] md:pl-[96px]">
            <div className="h-full w-full flex relative z-[1]">
              <Image
                className="hidden md:block object-[0_0] object-cover"
                src={mockup1}
                alt=""
                fill
              />
              <Image
                className="block md:hidden object-[0_0] object-cover"
                src={mockup2}
                alt=""
                fill
              />
            </div>

            <div className="absolute top-0 h-full w-full">
              <div className="w-[2048px] md:w-[4096px] relative h-full overflow-hidden">
                <Image
                  className="absolute w-[2048px] h-[1365.5px] md:w-[4096px] md:h-[2731px] left-[-646px] bottom-[-72px] md:left-[-1568px] md:bottom-[-896px]"
                  src={bg}
                  alt=""
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <span id="projects"></span>
      <Container innerStyle={""} style={"bg-white"}>
        <div className="pt-[72px] pb-[42px] md:pt-14 md:pb-[72px] text-center">
          <h6 className="md:mx-auto max-w-[562px] md:max-w-[971px] text-[20px] md:text-[40px] leading-[162.5%] md:leading-[150%] tracking-[-0.8px] md:tracking-[-1.6px] font-medium text-[#3E301C]">
            With 5+ years of expertise in frontend development, I transform
            creative designs into flawless, user-friendly web experiences.{" "}
            <span className="headerBackground">Let’s collaborate</span> to bring
            your digital projects to life with precision and efficiency.
          </h6>
        </div>

        <div className="block bg-[#C1A58D] h-[1px] w-full"></div>
      </Container>

      <ProjectContainer />

      <Container
        style={"bg-[#7E5C27] relative"}
        innerStyle={"max-w-[894px] py-8 md:py-[72px] text-center"}
      >
        <div className="relative z-[1] text-[20px] md:text-[44px] leading-[130%] text-[#FFDAA1] tracking-[-1.2px] md:tracking-[-2.64px]">
          Loved by clients, team members, and agencies. Contact me today.
        </div>
        <Image className="object-cover object-center" src={bg2} alt="" fill />
      </Container>

      <Container style={""} innerStyle={"max-w-[1312px]"}>
        <div className="flex flex-col md:justify-center md:items-center w-full pt-14 md:pt-16">
          <h2 className="text-[24px] md:text-[56px] font-semibold leading-[120%] tracking-[-1.92px] md:tracking-[-4.48px] text-[#7E5C27]">
            Ways I can help your brand
          </h2>

          <ul className="mt-8 md:mt-[78px] w-full flex flex-col md:flex-row justify-between items-center gap-6">
            {ways.map(({ message, title }, index) => (
              <>
                <li key={index}>
                  <Image src={anchor} alt="" />
                  <h6 className="mt-11 text-[#7E5C27] font-medium text-[24px] md:text-[32px] leading-[148%] tracking-[-0.96px] md:tracking-[-1.28px]">
                    {title}
                  </h6>
                  <p className="mt-4 max-w-[602px] md:text-[20px] leading-[150%] md:leading-[162.5%] tracking-[-0.48px] md:tracking-[-0.6px] text-mono-200">
                    {message}
                  </p>
                </li>

                <li
                  key={title}
                  className="h-[1px] w-full md:h-[546px] md:w-[1px] bg-[#C1A58D] last-of-type:hidden"
                ></li>
              </>
            ))}
          </ul>
        </div>
      </Container>

      <TestimonialContainer />

      <Container
        style={"bg-[#FFDAA170]"}
        innerStyle={"py-[72px] md:py-[102.5px]"}
      >
        <div className="flex flex-col justify-center items-center text-center gap-8 text-[#885606]">
          <h6 className="text-[12px] md:text-[14px] font-medium leading-[148%] tracking-[0.48px] md:tracking-[0.56px]">
            LIMITED AVAILABILITY IN Q4, 2024
          </h6>
          <h2 className="max-w-[263px] md:max-w-[893px] text-[44px] md:text-[100px] leading-[110%] tracking-[-3.52px] md:tracking-[-8px] font-kaisei font-bold">
            Let’s connect about your project
          </h2>
          <Link
            href={routes.startProject}
            className="hover:bg-[#6F4F1E] w-full max-w-[263px] md:max-w-[407px] h-14 font-semibold tracking-[-1.28px] rounded-[10px] bg-[#885606] text-white flex justify-center items-center"
          >
            Start a Project
          </Link>
        </div>
      </Container>

      {/* FOOTER */}
      <Container style={"bg-[#885606] py-8"} innerStyle={"max-w-[1247px]"}>
        <div className="flex flex-col justify-center items-center gap-14">
          <ul className="text-[#FFDAA1] tracking-[-0.64px] capitalize flex gap-12">
            <li>
              <Link href={""}>Works</Link>
            </li>
            <li>
              <Link href={""}>about</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
          </ul>
          <Image src={howardotuya} alt="Howard Otuya" />
          <h6 className="text-[#FAFAFA] tracking-[-0.64px]">
            Kabir Anifowoshe x Howard Otuya
          </h6>
        </div>
      </Container>
    </>
  );
}
