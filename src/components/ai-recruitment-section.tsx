"use client"

import * as React from "react"
import type { CSSProperties } from "react"
import { FileText, Share2, Search, Brain, Bot, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

type Feature = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface AiRecruitmentSectionProps {
  title?: string
  description?: string
  features?: Feature[]
  className?: string
  style?: CSSProperties
}

function clsx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ")
}

const defaultFeatures: Feature[] = [
  {
    id: "jd-generation",
    title: "Job description generation",
    description:
      "Turn a few role inputs into polished, inclusive, SEO-friendly descriptions in seconds. AI adapts tone, highlights must-haves, and removes bias.",
    icon: FileText,
  },
  {
    id: "cross-posting",
    title: "Cross‑platform posting",
    description:
      "Publish once—AI reformats and schedules for LinkedIn, Indeed, and 25+ boards with channel‑specific optimizations to boost reach.",
    icon: Share2,
  },
  {
    id: "ai-sourcing",
    title: "AI sourcing",
    description:
      "Continuously scouts the open web and talent pools, ranking matches by skills, recency, and intent signals—no manual searching required.",
    icon: Search,
  },
  {
    id: "intelligent-recs",
    title: "Intelligent recommendations",
    description:
      "Prioritizes candidates most likely to convert using fit scores, seniority calibration, and lookalike models from your best hires.",
    icon: Brain,
  },
  {
    id: "automated-engagement",
    title: "Automated engagement",
    description:
      "Triggers personalized outreach and follow‑ups across email and chat. Replies are summarized and next steps are suggested automatically.",
    icon: Bot,
  },
]

export default function AiRecruitmentSection({
  title = "AI‑powered recruitment, built for speed and precision",
  description = "Automate the busywork and focus on hiring decisions. From writing inclusive job descriptions to sourcing, ranking, and engaging candidates—our AI handles it end‑to‑end with measurable, repeatable results.",
  features = defaultFeatures,
  className,
  style,
}: AiRecruitmentSectionProps) {
  const headingId = React.useId()

  return (
    <section
      role="region"
      aria-labelledby={headingId}
      className={clsx(
        "relative rounded-2xl border bg-[var(--surface-2)] p-6 shadow-sm md:p-10",
        "overflow-hidden", // for decorative layers
        className
      )}
      style={style}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-[-10%] top-[-20%] h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(46,211,183,0.18),transparent)] blur-2xl" />
        <div className="absolute left-[-20%] bottom-[-30%] h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(100,215,194,0.12),transparent)] blur-2xl" />
      </div>

      <header className="mb-8 md:mb-10">
        <Badge
          variant="secondary"
          className="bg-[var(--surface-1)] text-[var(--sidebar-foreground)]"
          aria-label="Section: AI recruitment"
        >
          AI recruitment
        </Badge>
        <h2
          id={headingId}
          className="mt-3 font-heading text-3xl leading-tight tracking-[-0.02em] md:text-4xl"
        >
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--chart-4)] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className="mt-3 max-w-2xl text-balance text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </header>

      <ul
        role="list"
        className={clsx(
          "grid gap-4 md:gap-6",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        )}
      >
        {features.map((feat) => (
          <li key={feat.id} className="h-full">
            <FeatureCard feature={feat} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <Card
      role="article"
      aria-labelledby={`${feature.id}-title`}
      className={clsx(
        "group relative h-full rounded-xl border bg-[var(--surface-1)] p-5 shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-lg/5 hover:border-[var(--ring)]/40"
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"
      />
      <div className="flex items-start gap-4">
        <div
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            "bg-[color:rgb(46_211_183_/_.12)] ring-1 ring-[color:rgb(46_211_183_/_.24)]",
            "text-[var(--primary)] transition-transform duration-300 group-hover:scale-[1.04]"
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3
            id={`${feature.id}-title`}
            className="text-base font-semibold leading-tight"
          >
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </div>
    </Card>
  )
}