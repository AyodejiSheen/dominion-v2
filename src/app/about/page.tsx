import BookButton from "@/components/elements/bookButton";
import ListItems from "@/components/elements/listItems";
import PageName from "@/components/elements/pageName";
import SubFooter from "@/components/elements/subFooter";
import { leadership, ourMission, ourProcess } from "@/lib/data";
import Image from "next/image";
import React from "react";

const heroImgs = [
  "/images/About/image-1.jpg",
  "/images/About/image-2.jpg",
  "/images/About/image-3.jpg",
  "/images/About/image-4.jpg",
  "/images/About/image-5.jpg",
];

const AboutPage = () => {
  return (
    <>
      <section className="space-y-16 pt-32">
        <div className="px-4 mx-auto w-full max-w-3xl space-y-4 text-center">
          <PageName title="About Us" />
          <h1 className="title_text">
            Leading the future of <br className="brh" /> technology in Africa
          </h1>
          <p className="text-xl text-light-2">
            Empowering your vision with seamless IT partnership so you can focus
            on what matters. Let us lift the weight of tech and lead your
            transformation.
          </p>
        </div>

        <div className="grid grid-flow-col lg:gap-5">
          {heroImgs.map((each, index) => (
            <Image
              key={index}
              src={each}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="py-32 contain flex flex-col lg:flex-row gap-10 lg:gap-24">
        <h2 className="flex-1 title_text_2">
          Building the future, one <br /> solution at a time.
        </h2>

        <div className="flex-1 text-xl text-light-2 space-y-6 leading-8">
          <p>
            Dominion IT Networks & Digital Solutions is building the digital
            backbone for Africa’s current and next generation of businesses. We
            bring together IT infrastructure, digital strategy, cloud solutions,
            Artificial Intelligence and enterprise security with a layer of
            innovation that helps organizations move faster, scale smarter, and
            stay ahead of disruption.
          </p>
          <p>
            Forward-looking companies partner with Dominion to co-create
            Africa’s digital future empowering their teams with tools that
            unlock new growth, sharpen their competitive edge, and multiply
            efficiency.
          </p>
          <p>
            We’re not just delivering technology.
            <br /> We’re building the operating system for Africa’s digital
            economy.
          </p>
        </div>
      </section>

      <section className="bg-grey py-24">
        <section className="contain flex flex-col lg:flex-row gap-12 lg:gap-24">
          <h2 className="title_text_2">Our Mission</h2>
          <div className="flex-1 space-y-10">
            {ourMission.map((each, index) => (
              <ListItems key={index} {...each} />
            ))}
          </div>
        </section>
      </section>

      <section className="py-32 max-w-4xl mx-auto px-4 space-y-12 text-center">
        <h2 className="flex-1 title_text_2">Our Vision</h2>

        <p className="text-2xl lg:text-3xl text-light-2 space-y-6 leading-10">
          Our leadership envisions an Africa that stands tall as a global
          powerhouse in technology-driven innovation. We see a future where
          businesses across the continent leverage advanced solutions to compete
          on the world stage, drive economic prosperity, and improve lives.
        </p>
      </section>

      <section className="contain pb-32 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <h1 className="title_text_2">Our Leadership Team</h1>
          <p className="text-xl text-light-2">
            Our strength lies in our exceptional team of professionals who bring
            expertise, creativity, and a relentless commitment to excellence.
          </p>
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-8">
          {leadership.map((leader, index) => (
            <div key={index} className="space-y-12">
              <Image
                src={leader.img}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
              <div className="space-y-1.5">
                <h3 className="font-canelaTrail text-4xl font-light">
                  {leader.name}
                </h3>
                <p className="text-light-2 text-2xl font-medium">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-grey py-32">
        <section className="contain flex flex-col lg:flex-row gap-12 lg:gap-24">
          <h2 className="title_text_2">Our Process</h2>
          <div className="flex-1 space-y-10">
            {ourProcess.map((each, index) => (
              <ListItems
                key={index}
                {...each}
                titleWrapper="text-xl max-w-96 lg:max-w-56 xl:max-w-96 w-full"
                mainWrapper="gap-8"
              />
            ))}
          </div>
        </section>
      </section>

      <SubFooter
        img="/images/About/sh.png"
        text="Keep Your Business Running Smoothly"
      />
    </>
  );
};

export default AboutPage;
