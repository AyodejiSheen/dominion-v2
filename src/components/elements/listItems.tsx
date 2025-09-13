import React from "react";
import { Iconify } from "./icon";
import { cn } from "@/helpers/helper";

interface Props {
  title: string;
  icon: string;
  text: string;
  titleClassName?: string;
  titleWrapper?: string;
  mainWrapper?: string;
}
const ListItems = ({
  title,
  icon,
  text,
  titleClassName,
  titleWrapper,
  mainWrapper,
}: Props) => {
  return (
    <div className={cn("flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-24 pb-10 border-b", mainWrapper)}>
      <div className={cn("flex items-center gap-3 max-w-40 w-full", titleWrapper)}>
        <Iconify icon={icon} className="text-xl flex-none" />
        <h4
          className={cn("font-canelaTrail text-2xl font-light", titleClassName)}
        >
          {title}
        </h4>
      </div>
      <p className="text-light-2 flex-1">{text}</p>
    </div>
  );
};

export default ListItems;
