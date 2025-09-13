import { Iconify } from "@/components/elements/icon";
import { cn } from "@/helpers/helper";
import { motion } from "motion/react";
import React, { useState } from "react";

interface Props {
  text: string;
  title: string;
  iconClass?: string;
  index: number;
}

const ServiceCard = ({ text, title, index, iconClass }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const colIndex = index % 2;
  const rowIndex = Math.floor(index / 2);
  const isInSameRow =
    hoveredIndex !== null &&
    Math.floor(hoveredIndex / 2) === rowIndex &&
    hoveredIndex !== index;

  return (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className={cn(
        `group relative overflow-hidden bg-grey p-5 flex flex-col justify-between gap-14 col-span-3`
      )}
    >
      <h6 className="font-canelaTrail text-3xl font-light">{title}</h6>
      <div className="flex items-center gap-5 justify-between">
        <p className="transform translate-y-24 group-hover:translate-y-0 duration-500 ease-in-out">
          {text}
        </p>
        <div
          className={cn(
            "flex-none h-9 w-9 rounded-full bg-primary flex items-center justify-center group-hover:text-primary text-white group-hover:bg-black",
            iconClass
          )}
        >
          <Iconify icon="solar:arrow-right-linear" className="text-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
