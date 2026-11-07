import Image from "next/image";

import ButtonLink from "@/_components/ui/buttons/button-link";
import HeroBox from "./hero-box";

export default function HeroComponent() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="relative flex flex-col h-[605px] desktop:items-center desktop:justify-center desktop:gap-7 desktop:px-7">
        <Image
          src="/images/hero/Mountain-Rose__015.JPG"
          alt="Mountain Rose"
          fill
          priority
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
        />
        <HeroBox cssClasses="relative" />
        <p className="relative hidden desktop:block max-w-[894px] text-gold text-[36px] font-bold text-center font-[family-name:var(--font-cormorant)]">
          A substantial, undeveloped farm in the Hemel-en-Aarde Valley with
          outstanding vineyard potential has come to the market for the first
          time in nearly half a century
        </p>
      </div>
      <div className="desktop:hidden flex flex-col gap-10 bg-dark-blue px-7 py-15 rounded-b-[6px]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-5 w-full">
            <ButtonLink href="/#video">Video</ButtonLink>
            <ButtonLink href="/#contact">Contact</ButtonLink>
          </div>
          <p className="text-gold text-[16px] font-medium">
            Viewing Strictly by Appointment
          </p>
        </div>
        <p className="text-gold text-[28px] font-bold text-center font-[family-name:var(--font-cormorant)]">
          A substantial, undeveloped farm in the Hemel-en-Aarde Valley with
          outstanding vineyard potential has come to the market for the first
          time in nearly half a century
        </p>
      </div>
    </div>
  );
}
