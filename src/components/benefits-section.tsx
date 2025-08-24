"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Clock3, GaugeCircle, Users, ShieldCheck, Sparkles, Headset } from "lucide-react"

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>

export type BenefitItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  stat?: { value: string; label: string }
  outcome?: string
}

export type Metric = { value: string; label: string; hint?: string }

export interface BenefitsSectionProps {
  className?: string
  style?: React.CSSProperties
  heading?: string
  subheading?: string
  metrics?: Metric[]
  benefits?: BenefitItem[]
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const DEFAULT_METRICS: Metric[] = [
  { value: "60%", label: "Faster hiring cycles", hint: "Time-to-hire reduction" },
  { value: "2×", label: "Lift in qualified pipeline", hint: "Higher-fit candidates" },
  { value: "35%", label: "Fewer interviews per hire", hint: "Lean decisioning" },
]

const DEFAULT_BENEFITS: BenefitItem[] = [
  {
    id: "faster-hiring",
    title: "Compress time-to-hire",
    description:
      "Automated sourcing, screening, and shortlists move roles from req to offer in days, not weeks.",
    icon: Clock3,
    stat: { value: "−60%", label: "Cycle time" },
    outcome: "Fill critical roles faster to capture market opportunities.",
  },
  {
    id: "candidate-quality",
    title: "Elevate candidate quality",
    description:
      "Signal-driven matching surfaces top talent with the skills, context, and intent your teams need.",
    icon: Users,
    stat: { value: "2×", label: "Qualified pipeline" },
    outcome: "More first-round passes and stronger onsite conversions.",
  },
  {
    id: "hr-efficiency",
    title: "Multiply HR efficiency",
    description:
      "Automations remove repetitive tasks across scheduling, updates, and feedback loops.",
    icon: GaugeCircle,
    stat: { value: "8–12h", label: "Weekly time saved" },
    outcome: "Recruiters spend time on strategy, not busywork.",
  },
  {
    id: "future-ready",
    title: "Future‑ready platform",
    description:
      "Modular, API-first architecture with privacy-safe AI that adapts as your org evolves.",
    icon: Sparkles,
    outcome: "Scale without retooling. Stay ahead with continuous upgrades.",
  },
  {
    id: "expert-support",
    title: "Expert partnership",
    description:
      "Work with dedicated advisors for rollout, optimization, and hiring best practices.",
    icon: Headset,
    outcome: "Confidence from kickoff to impact—no guesswork.",
  },
  {
    id: "trust-security",
    title: "Built for trust",
    description:
      "Enterprise-grade security, role-based access, and auditability across your hiring stack.",
    icon: ShieldCheck,
    outcome: "Protect data and maintain compliance at every step.",
  },
]

export default function BenefitsSection({
  className,
  style,
  heading = "Proven outcomes with Quikhyr",
  subheading = "Cut hiring cycles while elevating candidate quality and HR efficiency—on a platform built for the future.",
  metrics = DEFAULT_METRICS,
  benefits = DEFAULT_BENEFITS,
}: BenefitsSectionProps) {
  const regionId = React.useId()

  return (
    <section
      aria-labelledby={`${regionId}-title`}
      className={cx(
        "w-full rounded-[calc(var(--radius)+4px)] bg-[var(--surface-1)] text-foreground shadow-sm",
        "ring-1 ring-[var(--border)]",
        "transition-colors",
        className
      )}
      style={style}
    >
      <div className="p-6 sm:p-8 md:p-10">
        {/* Eyebrow + Title */}
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <Badge
              variant="secondary"
              className="rounded-full bg-[var(--surface-2)] text-[var(--foreground)]/80"
              aria-hidden="true"
            >
              Results that matter
            </Badge>
          </div>
          <h2
            id={`${regionId}-title`}
            className="font-heading text-2xl leading-tight sm:text-3xl md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subheading}
          </p>
        </div>

        {/* Metrics */}
        {metrics?.length ? (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((m, i) => (
              <Card
                key={i}
                className={cx(
                  "bg-[var(--surface-2)] ring-1 ring-[var(--border)]",
                  "transition-all duration-300 ease-out",
                  "hover:translate-y-[-2px] hover:shadow-md hover:ring-[var(--primary)]/60",
                  "focus-within:ring-2 focus-within:ring-[var(--primary)]"
                )}
              >
                <div className="flex items-center justify-between p-4">
                  <div>
                    <div className="font-heading text-2xl sm:text-3xl">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.label}</div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                </div>
                {m.hint ? (
                  <>
                    <Separator className="bg-[var(--border)]" />
                    <div className="p-4 pt-3">
                      <p className="text-xs text-muted-foreground">{m.hint}</p>
                    </div>
                  </>
                ) : null}
              </Card>
            ))}
          </div>
        ) : null}

        {/* Benefits Grid */}
        {benefits?.length ? (
          <div role="list" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <article
                key={b.id}
                role="listitem"
                className={cx(
                  "group relative overflow-hidden rounded-[var(--radius)]",
                  "bg-[var(--surface-2)] p-5 ring-1 ring-[var(--border)]",
                  "transition-all duration-300 ease-out",
                  "hover:translate-y-[-2px] hover:shadow-md hover:ring-[var(--primary)]/60",
                  "focus-within:ring-2 focus-within:ring-[var(--primary)]"
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cx(
                      "flex size-10 items-center justify-center rounded-full",
                      "bg-[var(--surface-1)] ring-1 ring-[var(--border)]",
                      "transition-colors"
                    )}
                    aria-hidden="true"
                  >
                    <b.icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-base sm:text-lg">{b.title}</h3>
                      {b.stat ? (
                        <Badge className="rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                          {b.stat.value} {b.stat.label ? <span className="sr-only">{b.stat.label}</span> : null}
                        </Badge>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
                    {b.outcome ? (
                      <p className="mt-3 text-sm">
                        <span className="text-[var(--foreground)]">{b.outcome}</span>
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Subtle bottom accent */}
                <div
                  aria-hidden="true"
                  className={cx(
                    "pointer-events-none absolute inset-x-0 bottom-0 h-[2px]",
                    "from-[var(--primary)]/80 via-[var(--primary)]/30 to-transparent",
                    "bg-gradient-to-r opacity-70 transition-opacity duration-300",
                    "group-hover:opacity-100"
                  )}
                />
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}