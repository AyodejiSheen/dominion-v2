import localFont from "next/font/local";

export const canelaTrail = localFont({
  src: [
    {
      path: "../../public/fonts/Canela-Thin-Trial.otf",
      weight: "100", // Thin
      style: "normal",
    },
    {
      path: "../../public/fonts/Canela-Light-Trial.otf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "../../public/fonts/Canela-Regular-Trial.otf",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "../../public/fonts/Canela-Medium-Trial.otf",
      weight: "500", // Medium
      style: "normal",
    },
    {
      path: "../../public/fonts/Canela-Bold-Trial.otf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "../../public/fonts/Canela-Black-Trial.otf",
      weight: "900", // Black
      style: "normal",
    },
  ],
  variable: "--font-canela-trail",
  display: "swap",
});

