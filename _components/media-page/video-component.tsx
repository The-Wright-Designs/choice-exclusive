import classNames from "classnames";
import PageWrapper from "@/_lib/utils/page-wrapper";

interface VideoComponentProps {
  cssClasses?: string;
}

const VIDEO_ID = "aDyVc_d2FQw";
const VIDEO_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?controls=0&disablekb=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&fs=0`;

const VideoComponent = ({ cssClasses }: VideoComponentProps) => {
  return (
    <PageWrapper>
      <div className={classNames("relative w-full aspect-video", cssClasses)}>
        <iframe
          src={VIDEO_SRC}
          title="Choice Exclusive video"
          allow="encrypted-media; picture-in-picture"
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </PageWrapper>
  );
};

export default VideoComponent;
