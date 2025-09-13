import { cn } from "@/helpers/helper";
import React, { ButtonHTMLAttributes } from "react";
import { Show, ShowElse, ShowWhen } from "./show";
import { Iconify } from "./icon";

const variants = {
  primary: "bg-primary text-white",
  gray: "bg-light-3 text-light",
};

const sizes = {
  nn: "text-xs h-9",
  sm: "h-9 px-6 text-xs",
  nm: "h-11 sub_text px-6",
  md: "",
  lg: "",
  xl: "",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  customStyle?: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  type?: "button" | "submit";
  isLoading?: boolean;
}

const Button = ({
  title,
  customStyle,
  variant = "primary",
  size = "nm",
  type = "button",
  startIcon,
  endIcon,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      className={cn(
        "group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full transition-all duration-500 hover:gap-3 disabled:opacity-75 font-medium",
        variants[variant],
        sizes[size],
        isLoading && "cursor-not-allowed",
        customStyle
      )}
    >
      {!isLoading && startIcon && (
        <div className="group-hover:inline-flex">{startIcon}</div>
      )}
      <Show>
        <ShowWhen isTrue={isLoading}>
          <div className="flex items-center gap-2">
            <div>
              <Iconify icon="svg-spinners:bars-scale" className="text-2xl" />
            </div>
            <p className="text-xs">Loading...</p>
          </div>
        </ShowWhen>

        <ShowElse>{title}</ShowElse>
      </Show>

      {endIcon && <div className="group-hover:inline-flex">{endIcon}</div>}
    </button>
  );
};

export default Button;
