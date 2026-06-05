import React from "react";
import { CardPlaceholderProps } from "./card-placeholder-types";

export const CardPlaceholder: React.FC<CardPlaceholderProps> = ({
  count = 1,
  className,
}: CardPlaceholderProps) => {
  const counts = Array.from({ length: count }, (_, index) => index + 1);
  const isLast = (i: number) => i === count;

  return (
    <div
      className={`flex flex-wrap justify-center xl:justify-start gap-6 mt-10 ${className}`}
    >
      {counts.map((item) => (
        <div
          key={`cardplaceholder${item}`}
          role="status"
          className="card animate-pulse"
        >
          {/* figure — exact same tag as CourseCard */}
          <figure>
            <div className="bg-base-25 w-full h-47.5" />
          </figure>

          {/* badges row — same classes as CourseCard */}
          <div className="mt-2 flex gap-2 font-semibold px-3 py-2">
            <div className="h-5 w-16 bg-base-25 rounded-full" />
            <div className="h-5 w-16 bg-base-25 rounded-full" />
          </div>

          {/* card-body — same class as CourseCard */}
          <div className="card-body">
            {/* <Link> renders as <a> — inline element, match it exactly */}
            <a className="pointer-events-none">
              <div className="h-4 bg-base-25 rounded-full w-3/4" />
            </a>
            {/* <p> subtitle — same tag */}
            <p className="h-4 bg-base-25 rounded-full w-full" />
            <p className="h-4 bg-base-25 rounded-full w-full" />
            <p className="h-4 bg-base-25 rounded-full w-full" />
            <p className="h-4 bg-base-25 rounded-full w-full" />
            <p className="h-4 bg-base-25 rounded-full w-full" />
            <p className="h-4 " />
            {isLast(item) && <div className="h-6" />}
            {/* bottom row: duration badge + price */}
            <div className="flex items-center justify-between mt-3">
              <div className="h-5 w-24 bg-base-25 rounded-full" />
              <div className="h-5 w-16 bg-base-25 rounded-full" />
            </div>
          </div>

          {/* card-footer — <Link> with text + <IconArrowLeft>, use h-5 to match icon height */}
          <div className="card-footer justify-center animated-icon">
            <div className="h-5 w-32 bg-base-25 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
