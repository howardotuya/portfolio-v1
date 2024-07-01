import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container innerStyle={"max-w-[1312px]"} style={"bg-[#F1EDE1]"}>
        <div className="py-9 flex w-full justify-between items-center">
          <nav className="h-[62px] px-6 text-white rounded-[10px] inline-flex bg-[#6F4F1E] gap-8 items-center *:tracking-[-1.28px] font-semibold">
            <Link href={""}>Project</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
          </nav>

          <h6 className="text-[24px] leading-[32px] tracking-[-1.92px] text-[#444]">
            Howard Otuya
          </h6>
        </div>

        <div className="mt-[90px] flex justify-center items-center">
          <h1 className="w-full max-w-[890px] text-[90px] leading-[100px] tracking-[-6.3px] lowercase headerBackground">
            TRANSFORMING YOUR WEBSITE DREAMS INTO A DIGITAL REALITY.
          </h1>

          <div>
            <h6></h6>
            <button></button>
          </div>
        </div>
      </Container>
    </>
  );
}
