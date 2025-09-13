import { motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react";

const DoubleScrollingLogos = () => {
  return (
    <section className="py-4 space-y-16">
      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: string }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-28 md:w-36 flex justify-center items-center hover:bg-slate-100 transition-colors"
    >
      <Image
        src={Icon}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-28 md:w-32 hover:bg-slate-200 transition-colors object-contain"
      />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={"/images/partners/african.png"} />
    <LogoItem Icon={"/images/partners/jara.png"} />
    <LogoItem Icon={"/images/partners/looklab.png"} />
    <LogoItem Icon={"/images/partners/mikoya.png"} />
    <LogoItem Icon={"/images/partners/westerfield.png"} />
    <LogoItem Icon={"/images/partners/african.png"} />
    <LogoItem Icon={"/images/partners/jara.png"} />
    <LogoItem Icon={"/images/partners/looklab.png"} />
    <LogoItem Icon={"/images/partners/mikoya.png"} />
    <LogoItem Icon={"/images/partners/westerfield.png"} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={"/images/partners/african.png"} />
    <LogoItem Icon={"/images/partners/jara.png"} />
    <LogoItem Icon={"/images/partners/looklab.png"} />
    <LogoItem Icon={"/images/partners/mikoya.png"} />
    <LogoItem Icon={"/images/partners/westerfield.png"} />
    <LogoItem Icon={"/images/partners/african.png"} />
    <LogoItem Icon={"/images/partners/jara.png"} />
    <LogoItem Icon={"/images/partners/looklab.png"} />
    <LogoItem Icon={"/images/partners/mikoya.png"} />
    <LogoItem Icon={"/images/partners/westerfield.png"} />
  </>
);

export default DoubleScrollingLogos;
