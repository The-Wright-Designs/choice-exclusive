import Image from "next/image";
import classNames from "classnames";

interface VineGraphicProps {
  cssClasses?: string;
}

const VineGraphic = ({ cssClasses }: VineGraphicProps) => {
  return (
    <Image
      src="/images/graphics/vine.png"
      alt=""
      aria-hidden
      width={788}
      height={4160}
      quality={50}
      sizes="996px"
      className={classNames(
        "pointer-events-none absolute -z-10 max-w-none",
        cssClasses,
      )}
    />
  );
};

export default VineGraphic;
