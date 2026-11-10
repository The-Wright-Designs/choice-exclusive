import classNames from "classnames";
import { Droplets, Ruler, Sprout } from "lucide-react";

const icons = {
  ruler: Ruler,
  droplets: Droplets,
  sprout: Sprout,
};

interface InfoLandCardsProps {
  cards: { icon: string; title: string }[];
  cssClasses?: string;
}

const InfoLandCards = ({ cards, cssClasses }: InfoLandCardsProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 gap-7 tablet:grid-cols-2 min-[1100px]:grid-cols-3",
        cssClasses,
      )}
    >
      {cards.map(({ icon, title }) => {
        const Icon = icons[icon as keyof typeof icons];
        return (
          <div
            key={title}
            className="flex items-center gap-4 bg-dark-gold px-5 py-4 tablet:py-7 rounded-[6px] desktop:gap-[10px] desktop:py-5 desktop:h-[72px]"
          >
            <div className="flex items-center justify-center shrink-0 size-[52px] bg-dark-blue/10 rounded-[8px] desktop:size-8">
              <Icon size={28} color="#173060" className="desktop:size-[18px]" />
            </div>
            <p className="text-dark-blue text-[20px] font-bold uppercase">
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoLandCards;
