"use client";

import { useState } from "react";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  paragraphs: string[];
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  cssClasses?: string;
}

const Accordion = ({
  items,
  defaultOpenIndex = null,
  cssClasses,
}: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={classNames(
        "w-full flex flex-col bg-dark-blue rounded-[6px] px-7 py-10",
        cssClasses,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isLast = index === items.length - 1;
        return (
          <div
            key={index}
            className={classNames({ "border-b border-gold/50": !isLast })}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={classNames(
                "flex justify-between items-center w-full pt-5 gap-10 desktop:hover:cursor-pointer desktop:hover:opacity-90 ease-in-out duration-300",
                { "pb-5": !isLast },
              )}
            >
              <p className="text-[18px] font-bold text-gold text-left">
                {item.title}
              </p>
              <span
                className={classNames(
                  "transition-transform duration-300 shrink-0",
                  { "scale-y-[-1]": isOpen },
                )}
              >
                <ChevronDown color="#e5d6a9" size={20} />
              </span>
            </button>
            <div
              className={classNames(
                "grid transition-[grid-template-rows] duration-300",
                { "grid-rows-[1fr]": isOpen, "grid-rows-[0fr]": !isOpen },
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={classNames("flex flex-col gap-2", {
                    "pb-5": !isLast,
                    "pt-5": isLast,
                  })}
                >
                  {item.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-gold">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
