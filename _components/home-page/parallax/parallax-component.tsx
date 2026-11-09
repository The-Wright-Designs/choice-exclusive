"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const OVERSIZE_PERCENT = 160;
const START_OFFSET = 100;
const MAX_SHIFT_PERCENT = ((OVERSIZE_PERCENT - 100) / OVERSIZE_PERCENT) * 100;

export default function ParallaxComponent() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      const frame = frameRef.current;
      const image = imageRef.current;
      if (!frame || !image) return;

      const { top, height } = frame.getBoundingClientRect();
      const startLine = window.innerHeight - START_OFFSET;
      const progress = Math.min(
        Math.max((startLine - top) / (startLine + height), 0),
        1,
      );
      image.style.transform = `translateY(-${progress * MAX_SHIFT_PERCENT}%)`;
    };

    const onScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative mx-auto aspect-[1440/556] w-full max-w-[1280px] overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute left-0 top-0 w-full will-change-transform"
        style={{ height: `${OVERSIZE_PERCENT}%` }}
      >
        <Image
          src="/images/parallax/Mountain-Rose__011.jpg"
          alt="Aerial view of Mountain Rose overlooking the coast"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
