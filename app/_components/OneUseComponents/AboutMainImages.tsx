"use client";
import { useTransform } from "motion/react";
import { motion, MotionValue } from "framer-motion";

function AboutMainImages({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const imagesContainerWidth = useTransform(
    scrollYProgress,
    [0.05, 0.2],
    ["100dvw", "50dvw"]
  );
  const imagesContainerScale = useTransform(
    scrollYProgress,
    [0.1, 0.15],
    [1, 1.1]
  );

  const secondImageTranslate = useTransform(
    scrollYProgress,
    [0.5, 0.51],
    ["0dvh", "-120dvh"]
  );
  const thirdImageTranslate = useTransform(
    scrollYProgress,
    [0.8, 0.81],
    ["0dvh", "-220dvh"]
  );

  const firstParagraphOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.51],
    [1, 0.5]
  );
  const secondParagraphOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.51, 0.8, 0.81],
    [0.5, 1, 1, 0.5]
  );
  const thirdParagraphOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.61],
    [0.5, 1]
  );

  return (
    <div className="size-full hidden md:block  bg-black">
      <motion.div
        style={{ width: imagesContainerWidth, scale: imagesContainerScale }}
        className="  h-[100dvh] bg-no-repeat sticky top-0 overflow-hidden"
      >
        {/* images */}
        <img
          className="w-full h-[120dvh] object-cover  object-[0%]"
          src="/HomeImages/SectionFourMainImageOne.avif"
          alt="1st Image"
        />

        <motion.img
          style={{ translateY: secondImageTranslate }}
          className="w-full  duration-500 h-[100dvh] object-cover  object-[50%]"
          src="/HomeImages/SectionFourMainImageTwo.avif"
          alt="2nd Image"
        />

        <motion.img
          style={{ translateY: thirdImageTranslate }}
          className="w-full duration-500  h-[100dvh] object-cover  object-[50%]"
          src="/HomeImages/SectionFourMainImageThree.avif"
          alt="3rd Image"
        />

        {/* overLay */}
        <div className="bg-[#00000040] w-full h-[100dvh] absolute top-0">

          {/* CONTENT */}
          <div className="absolute top-1/2 right-1/2  -translate-y-1/2 bg-black mix-blend-difference text-white font-bold uppercase  w-fit ">
            <p className="text-sm  opacity-50 duration-500 ">About</p>
            <motion.p
              style={{ opacity: firstParagraphOpacity }}
              className="text-2xl duration-500 "
            >
              maniacs
            </motion.p>
            <motion.p
              style={{ opacity: secondParagraphOpacity }}
              className="text-2xl duration-500 "
            >
              Mission
            </motion.p>
            <motion.p
              style={{ opacity: thirdParagraphOpacity }}
              className="text-2xl duration-500 "
            >
              Machine
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMainImages;