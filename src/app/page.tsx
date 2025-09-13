"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hook/useScrollAnimation";
import { useImageExpansion } from "@/hook/useImageExpansion";
import BookButton from "@/components/elements/bookButton";
import { Inngrateth, services } from "@/lib/data";
import GlassCard from "@/components/cards/glassCard";
import ServiceCard from "./_components/serviceCard";
import DoubleScrollingLogos from "./_components/partners";
import OurPromiseCarousel from "./_components/ourPromise";

export default function HomePage() {
  const { scale, opacity, translateY } = useScrollAnimation();
  const { width, elementRef } = useImageExpansion("80dvw", "98dvw", 0, 100);

  return (
    <>
      <section
        style={{
          backgroundImage: "url(/images/Home/hero-bg.svg)",
        }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <section
          className="pb-20 pt-32 px-4"
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
            transition: "none",
          }}
        >
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-canelaTrail text-3xl text-light font-light"
            >
              Leading the future of technology in Africa
            </motion.p>

            <motion.h1
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="title_text"
            >
              Innovate. Integrate. Impact.
            </motion.h1>
          </div>

          <BookButton className="w-max mx-auto mt-10" />
        </section>

        <motion.section>
          <motion.div
            ref={elementRef}
            style={{ width }}
            className="relative z-[50] size-fit mx-auto flex items-center justify-center"
          >
            <motion.img
              src="/images/Home/hero-img.jpg"
              alt="Some Icon"
              width={1280}
              height={780}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.section>
      </section>

      <section className="contain py-32">
        <h3 className="title_text w-full max-w-4xl">
          We are your trusted partner in shaping a future-ready Africa through
          innovative, scalable, and tailored technology solutions.
        </h3>
        <div className="flex justify-end">
          <Image
            src="/images/Home/image-1.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:w-1/2 mt-10 lg:-mt-20 h-auto lg:object-contain"
          />
        </div>
      </section>

      <section
        className="bg-no-repeat bg-cover bg-center h-[90dvh] w-full flex flex-col justify-end py-16"
        style={{
          backgroundImage: "url(/images/Home/image-2.jpg)",
        }}
      >
        <div className="contain flex flex-col gap-8 items-start justify-end">
          <h4 className="title_text text-white w-full max-w-2xl">
            The digital partner you truly need for the brand you’re building.
          </h4>
          <BookButton
            className="bg-white text-black font-medium w-max"
            iconClass="bg-light/70"
          />
        </div>
      </section>

      <section className="contain py-32 space-y-24">
        <h3 className="title_text w-full max-w-4xl">
          As leaders in innovative IT and digital solutions, we empower
          businesses to achieve unmatched efficiency, competitiveness, and
          growth.
        </h3>
        <div className="grid lg:grid-cols-3 gap-20">
          {Inngrateth.map((each, index) => (
            <GlassCard key={index} {...each} />
          ))}
        </div>
      </section>

      <section className="contain space-y-28">
        <div className="grid lg:grid-cols-7 gap-10 lg:gap-20 w-full">
          <h4 className="title_text lg:col-span-3">
            Digitize your workflows, scale with ease.
          </h4>
          <div className="lg:col-span-4">
            <div className="max-w-lg space-y-8">
              <p className="text-lg">
                Smarter solutions lead to smarter business growth. At Dominion
                Digitals, we help you elevate every part of your digital
                ecosystem from strategy to design, technology, and
                transformation. We build, optimize, and scale to turn big ideas
                into measurable impact.
              </p>
              <BookButton className="w-max" title="Explore our Services" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-7 gap-10 lg:gap-20 w-full">
          <Image
            src="/images/Home/image-6.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto lg:col-span-3"
          />

          <div className="lg:col-span-4 grid lg:grid-cols-6 gap-3">
            {services.map((each, index) => (
              <ServiceCard index={index} key={index} {...each} />
            ))}
          </div>
        </div>
      </section>

      <section className="contain py-32 space-y-16">
        <h1 className="title_text">
          <span className="text-light">Innovation Drives</span> <br />{" "}
          Everything We Do
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-28">
          <Image
            src="/images/Home/image-7.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="flex-1 w-full h-full"
          />
          <div className="flex-1 space-y-8">
            <p className="text-xl font-light leading-[36px]">
              The world is moving faster than ever and we’re here to keep you
              ahead of the curve. At Dominon Digital, we combine breakthrough
              technology with human ingenuity to solve real challenges. Every
              solution we deliver is built to make work smarter, connections
              stronger, and opportunities bigger for businesses, communities in
              Africa.
            </p>
            <BookButton title="About Us" className="font-medium w-max" />
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <h1 className="title_text text-center">
          A Strategic Partner to <br /> Africa’s Visionaries
        </h1>
        <DoubleScrollingLogos />
      </section>

      <OurPromiseCarousel />
    </>
  );
}
