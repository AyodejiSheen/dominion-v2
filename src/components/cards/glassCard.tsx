import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  text: string;
}
const GlassCard = ({ src, title, text }: Props) => {
  return (
    <div className="border-l px-4 space-y-8">
      <div className="bg-grey py-5 flex items-center justify-center min-h-44">
        <Image
          src={src}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-max h-auto object-contain"
        />
      </div>
      <div className="space-y-4">
        <h4 className="font-canelaTrail font-light text-3xl">{title}</h4>
        <p className="text-light font-light">{text}</p>
      </div>
    </div>
  );
};

export default GlassCard;
