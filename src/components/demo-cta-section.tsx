"use client"

import * as React from "react"
import { Play, Calendar, FileText, Sparkles, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export interface DemoCtaSectionProps {
  title?: string
  subtitle?: string
  className?: string
  style?: React.CSSProperties
  onDemoClick?: () => void
  onBookClick?: () => void
  onCaseStudiesClick?: () => void
  layout?: "compact" | "comfortable"
}

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export default function DemoCtaSection({
  title = "Experience quikhyr.ai in minutes",
  subtitle = "Spin up a live AI demo, book a personalized AI walkthrough, or explore real customer results from our intelligent platform. Choose your path—no commitment needed.",
  className,
  style,
  onDemoClick,
  onBookClick,
  onCaseStudiesClick,
  layout = "comfortable",
}: DemoCtaSectionProps) {
  const headingId = React.useId()

  const handleDemo = () => {
    if (onDemoClick) return onDemoClick()
    toast("AI Demo launching", {
      description: "We'll open the interactive quikhyr.ai demo environment.",
    })
  }

  const handleBook = () => {
    if (onBookClick) return onBookClick()
    toast("AI Consultation booking", {
      description: "We'll guide you to schedule your personalized AI walkthrough.",
    })
  }

  const handleCases = () => {
    if (onCaseStudiesClick) return onCaseStudiesClick()
    toast("AI Success stories", {
      description: "We'll showcase AI-powered outcomes from teams like yours.",
    })
  }

  return (
    <section
      role="region"
      aria-labelledby={headingId}
      className={cx(
        "relative w-full overflow-hidden rounded-lg border bg-card text-foreground",
        layout === "compact" ? "p-5 sm:p-6" : "p-6 sm:p-8",
        "shadow-sm",
        className
      )}
      style={style}
    >
      {/* Enhanced Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(closest-side, rgba(46,211,183,0.25), rgba(46,211,183,0.15) 40%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(240,178,137,0.18), rgba(240,178,137,0.10) 40%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      <div className="relative">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" aria-hidden="true" />
          <span className="font-medium">Ready to experience AI innovation?</span>
        </div>

        <h2
          id={headingId}
          className={cx(
            "font-heading tracking-tight",
            layout === "compact"
              ? "text-2xl sm:text-3xl"
              : "text-3xl sm:text-4xl"
          )}
        >
          {title}
        </h2>

        <p
          className={cx(
            "mt-3 max-w-[70ch] text-muted-foreground",
            layout === "compact" ? "text-sm" : "text-base"
          )}
        >
          {subtitle}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            size="lg"
            className={cx(
              "group relative overflow-hidden",
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            aria-label="Try the live AI demo"
            onClick={handleDemo}
          >
            <Play className="mr-2 h-4 w-4" aria-hidden="true" />
            Try AI Demo Live
            <span className="ml-3 inline-flex items-center text-primary-foreground/80">
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
            aria-label="Book a personalized AI walkthrough"
            onClick={handleBook}
          >
            <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
            Book AI Consultation
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="text-foreground hover:bg-muted/60 hover:text-foreground/90 sm:ml-1"
            aria-label="Explore AI-powered customer case studies"
            onClick={handleCases}
          >
            <FileText className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
            See AI Success Stories
          </Button>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="inline-flex items-center text-xs text-muted-foreground">
            <Clock className="mr-2 h-3.5 w-3.5 text-primary" aria-hidden="true" />
            AI platform launches in under 30 seconds
          </div>
          <span className="hidden h-1 w-1 rounded-full bg-muted sm:inline-block" aria-hidden="true" />
          <div className="inline-flex items-center text-xs text-muted-foreground">
            <span className="mr-2 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary/30 ring-1 ring-inset ring-primary/50">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            </span>
            No credit card or signup required
          </div>
        </div>
      </div>
    </section>
  )
}