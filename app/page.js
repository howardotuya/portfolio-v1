import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg2.jpg";
import menu from "@/public/hamburger-menu.svg";
import mockup1 from "@/public/mockup1.svg";
import mockup2 from "@/public/mockup2.svg";
import ProjectCard from "@/components/projectCard";
import ProjectContainer from "@/components/projectContainer";

export default function Home() {
  return (
    <>
      <Container innerStyle={"max-w-[1312px]"} style={"bg-[#F1EDE1]"}>
        <div className="pt-9 flex w-full justify-between items-center">
          <nav className="h-[62px] px-6 text-white rounded-[10px] hidden md:inline-flex bg-[#6F4F1E] gap-8 items-center *:tracking-[-1.28px] font-semibold">
            <Link href={""}>Project</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
          </nav>

          <h6 className="text-[24px] leading-[32px] tracking-[-1.92px] text-[#444] lowercase">
            Howard Otuya
          </h6>

          <Image className="block md:hidden" src={menu} alt="" />
        </div>

        <div className="mt-[117px] mt-[90px] mx-auto max-w-[890px] flex flex-col justify-center items-center">
          <h1 className="w-full text-[40px] md:text-[90px] leading-[56px] md:leading-[100px] tracking-[-2.8px] md:tracking-[-6.3px] lowercase headerBackground">
            TRANSFORMING YOUR WEBSITE DREAMS INTO A DIGITAL REALITY.
          </h1>

          <div className="mt-7 md:mt-[51px] mb-[100px] md:mb-[120px] w-full flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <h6 className="max-w-[340px] text-[#3E301C] md:text-[20px] leading-[28px] tracking-[-0.8px] md:tracking-[-1px] lowercase">
              Experience bespoke software solutions crafted with precision and
              care.
            </h6>
            <button className="mt-[10px] md:mt-0 h-14 bg-[#885606] px-8 rounded-[8px] tracking-[-1.28px] font-semibold text-white">
              Start a Project
            </button>
          </div>
        </div>

        <div className="w-full bg-[#C1A58D] h-[1px]"></div>

        <div className="mt-6 md:mb-14 mb-8 w-full h-[419px] md:h-[724px] overflow-hidden rounded-[10px]">
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

      <Container innerStyle={"pt-16 pb-[72px]"} style={"bg-white"}>
        <div>
          <h6 className="md:mx-auto max-w-[562px] md:max-w-[971px] md:text-[40px] leading-[162.5%] md:leading-[150%] tracking-[-0.8px] md:tracking-[-1.6px] font-medium text-[#3E301C]">
            With 5+ years of expertise in frontend development, I transform
            creative designs into flawless, user-friendly web experiences.{" "}
            <span className="md:hidden">
              <br />
            </span>
            <span className="headerBackground">Let’s collaborate</span> to bring
            your digital projects to life with precision and efficiency.
          </h6>
        </div>
      </Container>

      <ProjectContainer />
    </>
  );
}
