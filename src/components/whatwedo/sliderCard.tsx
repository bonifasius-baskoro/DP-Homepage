"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {cards} from "@/app/data/cardService"

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust this value as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", isLargeScreen ? "-40%" : "-80%"]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-yellow-p py-12 ">
        <h1 className="text-7xl pl-8">
            What We Do
        </h1>
      <div className="sticky top-0 md:top-4 flex h-[80vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[50vh] w-[60vw] md:w-[30vw] md:h-[70vh] overflow-hidden bg-transparent transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          style={{
            border: "2px solid #212121",
            background: "transparent",
            borderRadius: "0.75rem"
          }}
          className="absolute inset-0 z-0 py-4"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-start mt-12 bg-transparent px-5">
          <div className="h-[50%]">
            <h1 className="text-3xl md:text-5xl font-semibold text-wrap mr-4">
              {card.title}
            </h1>
          </div>
          <p className="mt-8">
            {card.paragraph}
          </p>
        </div>
      </div>
    );
  };

export default HorizontalScrollCarousel;


