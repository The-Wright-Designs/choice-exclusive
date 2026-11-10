"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  data: string[];
}

const GallerySlider = ({ cssClasses, data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxSwiper = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          800: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        a11y={{ enabled: false }}
        className={classNames(
          "w-full min-w-0 overflow-hidden! [&_.swiper-wrapper]:pb-10",
          cssClasses,
        )}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        focusableElements="input, select, textarea"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={slide}>
            <button
              type="button"
              aria-label={`Open gallery image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className="relative block aspect-[3/2] w-full desktop:hover:cursor-pointer"
            >
              <Image
                src={slide}
                alt={`Gallery - Image ${index + 1}`}
                className="object-cover"
                fill
                loading={index < 3 ? "eager" : "lazy"}
                sizes="(max-width: 800px) 100vw, (max-width: 1280px) 50vw, 420px"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/90"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-10 desktop:hover:cursor-pointer"
            >
              <X color="#ffffff" size={32} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                lightboxSwiper.current?.slidePrev();
              }}
              className="absolute left-2 top-1/2 z-10 hidden tablet:block -translate-y-1/2 desktop:left-20 min-[1440px]:left-40 min-[1640px]:left-60 desktop:hover:cursor-pointer"
            >
              <ChevronLeft color="#ffffff" size={40} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                lightboxSwiper.current?.slideNext();
              }}
              className="absolute right-2 top-1/2 z-10 hidden tablet:block -translate-y-1/2 desktop:right-20 min-[1440px]:right-40 min-[1640px]:right-60 desktop:hover:cursor-pointer"
            >
              <ChevronRight color="#ffffff" size={40} />
            </button>
            <Swiper
              initialSlide={activeIndex}
              modules={[Keyboard]}
              keyboard={{ enabled: true }}
              loop
              a11y={{ enabled: false }}
              onSwiper={(swiper) => {
                lightboxSwiper.current = swiper;
              }}
              className="h-full w-full overflow-hidden!"
            >
              {data.map((slide, index) => (
                <SwiperSlide key={slide}>
                  <div
                    className="relative h-full w-full"
                    onClick={(event) => {
                      if (event.target === event.currentTarget)
                        setActiveIndex(null);
                    }}
                  >
                    <Image
                      src={slide}
                      alt={`Gallery - Image ${index + 1}`}
                      className="object-contain px-12 py-16 desktop:px-20"
                      fill
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>,
          document.body,
        )}
    </>
  );
};

export default GallerySlider;
