import BookButton from "@/components/elements/bookButton";
import { cn } from "@/helpers/helper";
import { allServices } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(/images/Services/hero.png)",
        }}
        className="bg-no-repeat bg-center bg-cover py-24"
      >
        <section className="contain flex flex-col md:flex-row items-center justify-between gap-24">
          <div className="flex-1 max-w-lg space-y-8">
            <h1 className="font-canelaTrail text-7xl lg:text-9xl font-light">Services</h1>
            <p className="text-2xl leading-10 text-light-2">
              We use technology and innovation to transform organisation.
              Anything technology, We can do it.
            </p>
            <BookButton className="w-max" />
          </div>

          <Image
            src="/images/Services/all/hero.svg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full flex-1"
          />
        </section>
      </section>

      <section className="contain py-32 space-y-20">
        {allServices.map((service, index) => (
          <div
            key={index}
            className={cn(
              "bg-grey flex gap-12 lg:gap-24 items-center justify-between p-5 lg:p-8",
              index % 2 ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row"
            )}
          >
            <Image
              src={service.img}
              alt={service.title}
              width={0}
              height={0}
              sizes="100vw"
              className="flex-none w-full lg:w-[45%]"
            />

            <div className="flex-1 space-y-8 pb-6 lg:pb-0">
              <div className="space-y-4">
                <h2 className="title_text_2">{service.title}</h2>
                <p className="lg:text-xl leading-8 lg:leading-10">{service.text}</p>
              </div>

              <Link href={"#"} className="block font-medium">
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="contain pb-32 space-y-24">
        <h1 className="title_text">
          We work with leading <br className="brh"/> organisations across <br /> all three
          sectors
        </h1>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="border-l space-y-6 pl-5 py-1">
            <h4 className="font-canelaTrail text-3xl font-light">
              Private Sector
            </h4>
            <p className="text-lg text-light">
              Enabling Africa’s private sector to outpace the competition
              building smarter, faster, and strengthening competitiveness across
              industries.
            </p>
          </div>
          <div className="border-l space-y-6 pl-5 py-1">
            <h4 className="font-canelaTrail text-3xl font-light">
              Public Sector
            </h4>
            <p className="text-lg text-light">
              Partnering with the public sector to deliver human-centred
              innovation in creating solutions that improve services and add
              real value to communities.
            </p>
          </div>
          <div className="border-l space-y-6 pl-5 py-1">
            <h4 className="font-canelaTrail text-3xl font-light">
              Third Sector
            </h4>
            <p className="text-lg text-light">
              Enabling the third sector to harness technology, reducing costs,
              advancing sustainability, and adapting quickly to meet Africa’s
              evolving needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
