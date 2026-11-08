import classNames from "classnames";
import { Compass, MapPin, Plane } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface InfoDetailCardsProps {
  airport: { title: string; name: string; stats: Stat[] };
  location: { title: string; description: string };
  coordinates: { title: string; stats: Stat[] };
  cssClasses?: string;
}

const InfoDetailCards = ({
  airport,
  location,
  coordinates,
  cssClasses,
}: InfoDetailCardsProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 gap-7 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3",
        cssClasses,
      )}
    >
      <div className="flex flex-col gap-3 bg-dark-blue px-5 py-7 rounded-[6px] desktop:py-5 desktop:h-[165px]">
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center justify-center shrink-0 size-[52px] bg-white/15 rounded-[8px] desktop:size-8">
            <Plane size={28} color="#ffffff" className="desktop:size-[18px]" />
          </div>
          <p className="text-white text-[20px] font-bold uppercase">
            {airport.title}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-white font-medium">{airport.name}</p>
          <div className="flex gap-4">
            {airport.stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col flex-1 gap-2">
                <p className="text-white font-medium">{value}</p>
                <p className="text-white/90">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-dark-blue px-5 py-7 rounded-[6px] desktop:py-5 desktop:h-[165px]">
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center justify-center shrink-0 size-[52px] bg-white/15 rounded-[8px] desktop:size-8">
            <MapPin size={28} color="#ffffff" className="desktop:size-[18px]" />
          </div>
          <p className="text-white text-[20px] font-bold uppercase">
            {location.title}
          </p>
        </div>
        <p className="text-white leading-normal">{location.description}</p>
      </div>
      <div className="flex flex-col gap-3 bg-dark-blue px-5 py-7 rounded-[6px] desktop:py-5 desktop:h-[165px]">
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center justify-center shrink-0 size-[52px] bg-white/10 rounded-[8px] desktop:size-8">
            <Compass
              size={28}
              color="#ffffff"
              className="desktop:size-[18px]"
            />
          </div>
          <p className="text-white text-[20px] font-bold uppercase">
            {coordinates.title}
          </p>
        </div>
        <div className="flex gap-4">
          {coordinates.stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col flex-1 gap-2">
              <p className="text-white/90">{label}</p>
              <p className="text-white font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoDetailCards;
