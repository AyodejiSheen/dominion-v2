import React from "react";
import BookButton from "./bookButton";
import Link from "next/link";
import Image from "next/image";
import { paths } from "@/lib/route";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex items-center justify-center flex-col gap-12">
        <h4 className="title_text max-w-[493px] text-center">
          <span className="text-light">We’re innovators,</span> problem-solvers,
          future-shapers.
        </h4>
        <BookButton className="w-max" />
        <div className="flex items-center gap-8 text-light-2 px-4 flex-wrap justify-center">
          <Link href="#">Services</Link>
          <Link href={paths.ABOUT}>About</Link>
          <Link href="#">Products</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
      <Image
        src="/images/Home/footer.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto mt-10"
      />

      <div className="contain flex flex-wrap items-center justify-center md:justify-between gap-8 text-xs text-light-2 pb-10">
        <p>© 2025 dominiondigital. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <Link href="#">Instagram</Link>
          <Link href="#">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
