"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Download, Maximize2, X } from "lucide-react";

import ButtonType from "@/_components/ui/buttons/button-type";

interface MapCardProps {
  image: { src: string; alt: string };
  fullSrc: string;
  pdfHref: string;
  pdfName: string;
  pdfSize: string;
}

export default function MapCard({
  image,
  fullSrc,
  pdfHref,
  pdfName,
  pdfSize,
}: MapCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isOpen && !isLightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsLightboxOpen(false);
      }
    };
    document.body.style.overflow = isLightboxOpen ? "hidden" : "";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, isLightboxOpen]);

  const handleConfirm = () => {
    const link = document.createElement("a");
    link.href = pdfHref;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.open(pdfHref, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="relative aspect-[1200/720] w-full overflow-hidden rounded-[6px] tablet:flex-1">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1280px) 100vw, 720px"
        className="object-cover"
      />
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button
          type="button"
          aria-label={`Download ${pdfName}`}
          onClick={() => setIsOpen(true)}
          className="group flex size-10 items-center justify-center rounded-full bg-white/85 desktop:hover:cursor-pointer desktop:hover:bg-gold ease-in-out duration-300"
        >
          <Download
            size={18}
            color="#173060"
            className="ease-in-out duration-300 desktop:group-hover:scale-110"
          />
        </button>
        <button
          type="button"
          aria-label={`Enlarge ${image.alt}`}
          onClick={() => setIsLightboxOpen(true)}
          className="group flex size-10 items-center justify-center rounded-full bg-white/85 desktop:hover:cursor-pointer desktop:hover:bg-gold ease-in-out duration-300"
        >
          <Maximize2
            size={18}
            color="#173060"
            className="ease-in-out duration-300 desktop:group-hover:scale-110"
          />
        </button>
      </div>
      {isLightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              aria-label="Close map"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 desktop:hover:cursor-pointer desktop:hover:scale-105 ease-in-out duration-300"
            >
              <X color="#ffffff" size={32} />
            </button>
            <div className="relative h-full w-full">
              <Image
                src={fullSrc}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain px-4 py-16 desktop:px-20"
              />
            </div>
          </div>,
          document.body,
        )}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-7"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="flex w-full max-w-[480px] flex-col gap-7 rounded-[6px] bg-white p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <h3 className="break-words text-dark-blue">
                Download{" "}
                <span className="text-subheading text-dark-blue font-semibold">
                  {pdfName}
                </span>
                ?
              </h3>
              <p className="text-dark-blue">{pdfSize}</p>
            </div>
            <form
              action={handleConfirm}
              className="grid gap-5 tablet:grid-cols-2"
            >
              <ButtonType>Confirm</ButtonType>
              <ButtonType type="button" onClick={() => setIsOpen(false)}>
                Cancel
              </ButtonType>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
