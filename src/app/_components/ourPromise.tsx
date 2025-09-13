import Button from "@/components/elements/button";
import { Iconify } from "@/components/elements/icon";
import { motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 406;
const MARGIN = 50;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const OurPromiseCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="py-32" ref={ref}>
      <div className="relative overflow-hidden">
        <div className="space-y-20">
          <div className=" contain flex items-end justify-between">
            <h1 className="title_text">
              Our Promise <br /> Real Change. <br /> Measurable Results.
            </h1>

            <div className="flex items-center gap-4 mb-5">
              <Button
                title=""
                size="nn"
                variant={CAN_SHIFT_LEFT ? "primary" : "gray"}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
                startIcon={
                  <Iconify
                    icon="solar:arrow-left-linear"
                    className="text-3xl"
                  />
                }
                customStyle={"h-16 w-16"}
              />

              <Button
                title=""
                size="nn"
                variant={CAN_SHIFT_RIGHT ? "primary" : "gray"}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
                startIcon={
                  <Iconify
                    icon="solar:arrow-right-linear"
                    className="text-3xl"
                  />
                }
                customStyle={"h-16 w-16"}
              />
            </div>
          </div>

          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex pl-16 pr-4"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ title, description }: PostType) => {
  return (
    <div
      className="relative flex-none cursor-pointer space-y-6"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <p className="font-canelaTrail text-3xl font-light">{title}</p>
      <p className="text-base text-light">{description}</p>
    </div>
  );
};

export default OurPromiseCarousel;

type PostType = {
  id: number;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    title: "Innovation beyond imagination",
    description:
      "We are constantly embarking on a range of adventures to better understand our planet, the solar system and beyond. We will help you create innovative, evolutionary pathways that have a transformative impact.",
  },
  {
    id: 2,
    title: "Exceptional people",
    description:
      "We choose to work with exceptional people and organisations who share our True North values. United, we can change the world.",
  },
  {
    id: 3,
    title: "Diversity, inclusion and equality",
    description:
      "Diversity, inclusion and equality are the critical building blocks for innovation. From our people to our clients, we embrace the unique. It is our differences that make us stronger together.",
  },
  {
    id: 4,
    title: "Diversity, inclusion and equality",
    description:
      "Diversity, inclusion and equality are the critical building blocks for innovation. From our people to our clients, we embrace the unique. It is our differences that make us stronger together.",
  },
];
