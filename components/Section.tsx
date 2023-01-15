import { ReactNode } from "react";
import cn from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "right" | "left";
  children: ReactNode;
  className?: string;
};

export default function Section({
  heading,
  headingAlignment,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={`flex flex-col gap-1 md:flex-row md:gap-9 ${className}`}
    >
      <h2
        className={cn(
          "md:w-28 text-secondary shrink-0",
          headingAlignment === "right" && "md:text-right"
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
