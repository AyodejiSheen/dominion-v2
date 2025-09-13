import Image from "next/image";
import React from "react";
import BookButton from "./bookButton";

interface Props {
  img: string;
  text: string;
}
const SubFooter = ({ img, text }: Props) => {
  return (
    <section className="bg-black py-10 mb-32">
      <section className="contain flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1">
          <Image
            src={img}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-white space-y-8">
          <h2 className="title_text_2">{text}</h2>
          <BookButton title="Contact Us for IT Support" className="w-max" />
        </div>
      </section>
    </section>
  );
};

export default SubFooter;
