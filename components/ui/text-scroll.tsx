"use client";

import * as React from "react";
import { useRef, useEffect, useState } from "react";
import {
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

type TextScrollProps = {
  text: React.ReactNode;
  default_velocity?: number;
  className?: string;
};

export const TextScroll: React.FC<TextScrollProps> = ({
  text,
  default_velocity = 2,
  className = "",
}) => {
  const baseX = useMotionValue(0);
  const x = useSpring(baseX, { stiffness: 50, damping: 20 });
  const directionFactor = useRef<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, [text]);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * default_velocity * (delta / 1000) * 60;
    const nextX = baseX.get() + moveBy;

    if (Math.abs(nextX) >= containerWidth) {
      baseX.set(0); // Reset to beginning for smooth loop
    } else {
      baseX.set(nextX);
    }
  });

  const xTransformed = useTransform(x, (val) => `${val}px`);

  return (
    <div className="overflow-hidden w-full space-y-4">
      {/* Line 1 */}
      <motion.div
        className={`flex whitespace-nowrap  min-w-[200%]  ${className}`}
        style={{ x: xTransformed }}
        ref={containerRef}
      >
        <div className="flex gap-8">{text}</div>
        <div className="flex gap-8" aria-hidden="true">
          {text}
        </div>
      </motion.div>

      {/* Line 2 - opposite direction */}
      <motion.div
        className={`flex whitespace-nowrap  min-w-[200%]  ${className}`}
        style={{ x: useTransform(x, (val) => `${-val}px`) }}
      >
        <div className="flex gap-8">{text}</div>
        <div className="flex gap-8" aria-hidden="true">
          {text}
        </div>
      </motion.div>
    </div>
  );
};
