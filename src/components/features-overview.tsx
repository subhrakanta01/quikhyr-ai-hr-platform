"use client";

import * as React from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Sparkles,
  Rocket,
  Users,
  Video,
  IdCard,
  KanbanSquare,
  BarChart3,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type HeadingLevel = 2 | 3;

export interface FeatureItem {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeaturesOverviewProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  items?: FeatureItem[];
  density?: "comfortable" | "compact";
  grid?: "auto" | "two" | "three" | "four";
  showHeader?: boolean;
  headingLevel?: HeadingLevel;
  className?: string;
  style?: CSSProperties;
}

const DEFAULT_ITEMS: FeatureItem[] = [
  {
    key: "ai-jd",
    title: "AI job description generator",
    description: "Generate role‑perfect JDs with AI in seconds.",
    icon: Sparkles,
  },
  {
    key: "one-click-post",
    title: "One‑click job posting",
    description: "Publish to top boards and social channels instantly.",
    icon: Rocket,
  },
  {
    key: "auto-sourcing",
    title: "Automated candidate sourcing",
    description: "Auto‑discover qualified candidates across networks.",
    icon: Users,
  },
  {
    key: "video-interviews",
    title: "Video interview platform",
    description: "Built‑in scheduling, recording, and notes.",
    icon: Video,
  },
  {
    key: "id-verification",
    title: "ID verification",
    description: "Gov ID checks, liveness detection, and audit logs.",
    icon: IdCard,
  },
  {
    key: "ats",
    title: "ATS system",
    description: "Pipelines, tagging, and team collaboration.",
    icon: KanbanSquare,
  },
  {
    key: "analytics",
    title: "Analytics dashboards",
    description: "Real‑time hiring metrics and insights.",
    icon: BarChart3,
  },
  {
    key: "workflows",
    title: "Automated workflows",
    description: "No‑code triggers, actions, and rules.",
    icon: Workflow,
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const gridClasses: Record<NonNullable<FeaturesOverviewProps["grid"]>, string> = {
  auto: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
  two: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
  three: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6",
  four: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
};

export default function FeaturesOverview({
  title = "All the capabilities you need",
  description = "A complete, modern hiring platform—streamlined, powerful, and built for teams.",
  items = DEFAULT_ITEMS,
  density = "comfortable",
  grid = "auto",
  showHeader = true,
  headingLevel = 2,
  className,
  style,
  ...rest
}: FeaturesOverviewProps) {
  const HeadingTag = (`h${headingLevel}` as unknown) as keyof JSX.IntrinsicElements;

  const cardPadding =
    density === "compact" ? "p-4 sm:p-5" : "p-5 sm:p-6";
  const iconSize = density === "compact" ? 18 : 20;
  const titleSize = density === "compact" ? "text-base" : "text-[1.05rem]";
  const descSize = "text-sm";

  const sectionId = React.useId();
  const headingId = `${sectionId}-heading`;
  const descriptionId = `${sectionId}-description`;

  return (
    <section
      aria-labelledby={showHeader ? headingId : undefined}
      aria-describedby={showHeader ? descriptionId : undefined}
      className={cn("bg-background", className)}
      style={style}
      {...rest}
    >
      {showHeader && (
        <div className="mb-6 sm:mb-8">
          <HeadingTag
            id={headingId}
            className="font-heading text-2xl sm:text-3xl leading-tight tracking-tight"
          >
            {title}
          </HeadingTag>
          {description ? (
            <p
              id={descriptionId}
              className="mt-2 text-sm sm:text-base text-muted-foreground max-w-[65ch]"
            >
              {description}
            </p>
          ) : null}
        </div>
      )}

      <div className={gridClasses[grid]}>
        {items.map((item) => (
          <FeatureCard
            key={item.key}
            item={item}
            cardPadding={cardPadding}
            iconSize={iconSize}
            titleSize={titleSize}
            descSize={descSize}
          />
        ))}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  item: FeatureItem;
  cardPadding: string;
  iconSize: number;
  titleSize: string;
  descSize: string;
}

function FeatureCard({
  item,
  cardPadding,
  iconSize,
  titleSize,
  descSize,
}: FeatureCardProps) {
  const Icon = item.icon;
  const labelId = `${item.key}-label`;

  return (
    <article aria-labelledby={labelId}>
      <Card
        className={cn(
          "relative overflow-hidden border border-border bg-card rounded-[var(--radius)]",
          "transition-all duration-300 ease-out",
          "hover:border-primary/40 hover:shadow-md/5",
          "focus-within:border-primary/60"
        )}
      >
        {/* subtle top accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
        <CardContent className={cn("flex gap-4", cardPadding)}>
          <div
            className={cn(
              "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
              "bg-secondary/60 ring-1 ring-inset ring-border"
            )}
          >
            <Icon
              size={iconSize}
              className="text-primary"
              aria-hidden="true"
            />
            <span
              aria-hidden="true"
              className="absolute -inset-px rounded-lg bg-primary/0 blur-[0px] transition-opacity duration-300"
            />
          </div>

          <div className="min-w-0">
            <h3
              id={labelId}
              className={cn(
                "font-medium leading-6 text-foreground",
                "font-heading tracking-tight",
                titleSize
              )}
            >
              {item.title}
            </h3>
            <p className={cn("mt-1 text-muted-foreground", descSize)}>
              {item.description}
            </p>
          </div>
        </CardContent>

        {/* hover glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1 -right-1 h-20 w-20 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </Card>
    </article>
  );
}