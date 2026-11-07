"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import navData from "@/_data/nav-data.json";
import { Equal, X } from "lucide-react";

const COMPANY_NAME = "Choice Property Group";

interface MobileHeaderProps {
  cssClasses?: string;
}

export function HeaderMobile({ cssClasses }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={classNames(cssClasses)}>
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/choice-properties-logo.png"
            alt={COMPANY_NAME}
            width={108}
            height={40}
          />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="ease-in-out duration-300 -m-2 p-2"
          aria-label="Open menu"
        >
          <Equal size={32} color="#173060" />
        </button>
      </div>

      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-dark-blue/98 transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          },
        )}
      >
        <div className="flex w-full py-6 items-center px-7 justify-end">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 -m-2 translate-x-2"
          >
            <X size={32} color="#FFFFFF" />
          </button>
        </div>
        <nav className="px-5">
          <ul className="grid gap-4">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-paragraph text-white p-2 -m-2"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
