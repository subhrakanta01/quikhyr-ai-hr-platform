"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { Brain, Cloud, Expand, LayoutDashboard, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

export interface AboutSectionProps {
  className?: string
  title?: string
  description?: string
  items?: FeatureItem[]
  id?: string
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}

const defaultItems: FeatureItem[] = [
  {
    title: "Unified AI Platform",
    description:
      "One intelligent platform to orchestrate AI-driven workflows, data insights, and team collaboration—built to simplify complex hiring operations.",
    icon: LayoutDashboard,
  },
  {
    title: "Effortless Scalability",
    description:
      "Elastic AI architecture that scales from pilot to enterprise without re-architecture, downtime, or friction—powered by quikhyr.ai intelligence.",
    icon: Expand,
  },
  {
    title: "Cloud-Native AI Hosting",
    description:
      "Modern, containerized AI runtime with automated provisioning, ML model deployment, observability, and zero-trust networking infrastructure.",
    icon: Cloud,
  },
  {
    title: "Advanced AI/ML Engine",
    description:
      "Intelligent matching, predictive insights, and automated decision-making powered by responsible AI and continuously learning ML pipelines.",
    icon: Brain,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption, fine-grained AI access controls, audit trails, and compliance-ready controls for sensitive HR data protection.",
    icon: ShieldCheck,
  },
]

export default function AboutSection({
  className,
  title = "Built for modern AI-driven teams, engineered for intelligent scale",
  description = "quikhyr.ai is a cutting-edge, cloud-native AI platform that unifies hiring workflows, intelligent data processing, and AI-driven insights into a single, secure system. Designed for performance, observability, and governance—so teams can move fast with AI-powered confidence.",
  items = defaultItems,
  id = "about-quikhyr",
}: AboutSectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "bg-background text-foreground",
        // Internal rhythm and spacing; outer layout is owned by parent
        "rounded-none",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1 w-10 rounded-full bg-primary"
            />
            <span className="text-sm font-medium text-muted-foreground">
              About quikhyr.ai
            </span>
          </div>

          <h2
            id={headingId}
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>

          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div
          role="list"
          className={cn(
            "grid gap-4",
            "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          )}
        >
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                role="listitem"
                key={idx}
                tabIndex={0}
                className={cn(
                  "bg-card text-card-foreground border border-border",
                  "transition-all duration-200 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "hover:border-primary/40 hover:shadow-[0_0_0_1px_var(--color-ring)]/10",
                  "hover:-translate-y-0.5"
                )}
              >
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <div
                    aria-hidden="true"
                    className={cn(
                      "size-10 shrink-0 rounded-md",
                      "bg-surface-2 text-foreground",
                      "grid place-items-center",
                      "ring-1 ring-border"
                    )}
                  >
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <CardTitle className="text-base font-semibold">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}