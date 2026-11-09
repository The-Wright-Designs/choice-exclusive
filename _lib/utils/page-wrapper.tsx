import classNames from "classnames";

interface PageWrapperProps {
  children: React.ReactNode;
  cssClasses?: string;
  id?: string;
}

const PageWrapper = ({ children, cssClasses, id }: PageWrapperProps) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div id={id} className={classNames("px-7 min-[1350px]:px-0", cssClasses)}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
