import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
  interval?: number;
}

const CurvedCarousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every few seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((src, i) => {
          const indexDiff = (i - current + images.length) % images.length;

          // 🎯 Outward convex curve
          let translateX = 0;
          let translateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let opacity = 0;
          let width = "45%";
          let zIndex = 1;

          if (indexDiff === 0) {
            // center image - most visible and closest
            translateX = 0;
            translateZ = 250;
            rotateY = 0;
            scale = 1.15;
            opacity = 1;
            width = "55%";
            zIndex = 10;
          } else if (indexDiff === 1) {
            // right image
            translateX = 380;
            translateZ = 120;
            rotateY = -30;
            scale = 0.9;
            opacity = 0.5;
            width = "40%";
            zIndex = 8;
          } else if (indexDiff === 2) {
            // far right
            translateX = 700;
            translateZ = -50;
            rotateY = -45;
            scale = 0.75;
            opacity = 0;
            width = "30%";
            zIndex = 6;
          } else if (indexDiff === images.length - 1) {
            // left image
            translateX = -380;
            translateZ = 120;
            rotateY = 30;
            scale = 0.9;
            opacity = 0.5;
            width = "40%";
            zIndex = 8;
          } else if (indexDiff === images.length - 2) {
            // far left
            translateX = -700;
            translateZ = -50;
            rotateY = 45;
            scale = 0.75;
            opacity = 0;
            width = "30%";
            zIndex = 6;
          } else {
            // hidden slides
            opacity = 0;
            translateZ = -200;
            width = "20%";
            zIndex = 1;
          }

          return (
            <motion.div
              key={i}
              className="absolute h-[70%] rounded-2xl overflow-hidden shadow-2xl"
              animate={{
                x: translateX,
                z: translateZ,
                rotateY,
                scale,
                opacity,
                width,
                zIndex,
              }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-purple-600 scale-125" : "bg-purple-300"
            }`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CurvedCarousel;
