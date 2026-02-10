import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export function Section({ children, className, id, padding = "md" }: SectionProps) {
  const paddings = {
    none: "py-0",
    sm: "py-12",
    md: "py-24",
    lg: "py-32",
    xl: "py-48",
  };

  return (
    <section id={id} className={cn(paddings[padding], className)}>
      {children}
    </section>
  );
}
