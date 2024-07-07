import React from "react";
import Container from "./container";
import ProjectCard from "./projectCard";
import mockup3 from "@/public/mockup3.svg";
import mockup4 from "@/public/mockup4.svg";
import mockup5 from "@/public/mockup5.svg";
import mockup6 from "@/public/mockup6.svg";
import mockup7 from "@/public/mockup7.svg";
import mockup8 from "@/public/mockup8.png";
import mockup9 from "@/public/mockup9.png";
import mockup10 from "@/public/mockup10.svg";

function ProjectContainer() {
  const items = [
    {
      title: "Idara",
      body: "Business registration and licensing in Africa made easy. We simplify regulatory complexities and help you scale your business effortlessly.",
      dependencies: [
        "Nextjs",
        "Redux",
        "Tailwindcss",
        "Stripe",
        "Tiptap",
        "Preline",
      ],
      style:
        "left-[-1486px] md:left-[-1568px] bottom-[-1150px] md:bottom-[-896px]",
      desktop: mockup3,
      mobile: mockup7,
    },
    {
      title: "Ainslee.ai",
      body: "Ainslee.ai is a specialized AI tool designed to streamline and enhance marketing and business development for users within the Live Your Message ecosystem, offering personalized and program-specific support.",
      dependencies: [
        "Nextjs",
        "Redux",
        "Tailwindcss",
        "Framer-motion",
        "Preline",
      ],
      style: "left-[-963px] bottom-[-426px]",
      desktop: mockup4,
      mobile: mockup8,
    },
    {
      title: "Renbi Women",
      body: "At Renbi Women Empowerment Initiative. We empower women from disadvantage communities in Nigeria by providing them training, mentorship and financial support",
      dependencies: [
        "Nextjs",
        "Tailwindcss",
        "Nodemailer",
        "Paystack",
        "Contentful API",
      ],
      style: "left-[-3381px] bottom-[-437px] md:bottom-[-77px]",
      desktop: mockup5,
      mobile: mockup9,
    },
    {
      title: "Alex Oyebade - Portfolio",
      body: "Endearing users to a product through simple and delightful designs. I love how design is able to endear a business to her customers and have them hooked even at first use. This is why and how I strive to design - for endearment and retention.",
      dependencies: ["Nextjs", "Tailwindcss"],
      style: "left-[-617px] bottom-[0px] md:left-[-289px] md:bottom-[-748px]",
      desktop: mockup6,
      mobile: mockup10,
    },
  ];

  return (
    <Container innerStyle={"max-w-[1312px]"} style={"bg-white"}>
      <div>
        {items.map((item, index) => (
          <>
            <ProjectCard
              key={index}
              title={item.title}
              body={item.body}
              dependencies={item.dependencies}
              style={item.style}
              desktop={item.desktop}
              mobile={item.mobile}
            />
            <div className="bg-[#C1A58D] h-[1px] w-full divider"></div>
          </>
        ))}
      </div>
    </Container>
  );
}

export default ProjectContainer;
