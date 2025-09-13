import { cn } from "@/helpers/helper";
import React from "react";
import { Iconify } from "./icon";

interface Props {
  className?: string;
  iconClass?: string;
  title?: string;
}

const BookButton = ({ className, iconClass, title = "Book a call" }: Props) => {
  return (
    <button
      className={cn(
        "group w-full cursor-pointer flex items-center justify-center gap-4 rounded-full transition-all duration-500 hover:gap-6 disabled:opacity-75 h-12 bg-primary px-1 text-white pl-6",
        className
      )}
    >
      <p>{title}</p>
      <div
        className={cn(
          "h-9 w-9 rounded-full bg-white/30 flex items-center justify-center",
          iconClass
        )}
      >
        <Iconify
          icon="solar:arrow-right-linear"
          className="text-xl text-white"
        />
      </div>
    </button>
  );
};

export default BookButton;
