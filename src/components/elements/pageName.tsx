import React from "react";

interface Props {
  title: string;
}

const PageName = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-3 w-max mx-auto">
      <div className="bg-primary h-2 w-2 rounded-full" />
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default PageName;
