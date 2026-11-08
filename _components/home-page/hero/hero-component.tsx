import Image from "next/image";

import ButtonLink from "@/_components/ui/buttons/button-link";
import HeroBox from "./hero-box";

export default function HeroComponent() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="relative flex flex-col h-[605px] tablet:h-[700px] min-[1100px]:h-[605px] min-[1100px]:items-center min-[1100px]:justify-center min-[1100px]:gap-7 min-[1100px]:px-7">
        <Image
          src="/images/hero/Mountain-Rose__015.JPG"
          alt="Mountain Rose"
          fill
          priority
          sizes="(max-width: 600px) 900px, 1280px"
          className="object-cover"
        />
        <HeroBox cssClasses="relative" />
        <p className="relative hidden min-[1100px]:block max-w-[894px] text-gold text-[36px] font-bold text-center font-[family-name:var(--font-cormorant)]">
          A substantial, undeveloped farm in the Hemel-en-Aarde Valley with
          outstanding vineyard potential has come to the market for the first
          time in nearly half a century
        </p>
      </div>
      <div className="min-[1100px]:hidden flex flex-col gap-10 bg-dark-blue px-7 py-15 rounded-b-[6px]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-5 justify-center w-full min-[600px]:flex-row">
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
