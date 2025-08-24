"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe } from "lucide-react"

type HeroSectionProps = {
  className?: string
  style?: React.CSSProperties
  layout?: "compact" | "full"
  title?: string
  tagline?: string
  ctaHref?: string
  ctaLabel?: string
  url?: string
  showLogo?: boolean
}

function cn(...classes: Array<string | null | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}

function QuikhyrLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 36"
      role="img"
      aria-label="quikhyr.ai"
      {...props}
    >
      <defs>
        <linearGradient id="qg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--chart-1)" />
          <stop offset="100%" stopColor="var(--chart-4)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="none">
        <path
          d="M18 2c8.837 0 16 7.163 16 16s-7.163 16-16 16S2 26.837 2 18 9.163 2 18 2z"
          fill="url(#qg)"
          opacity="0.22"
        />
        <path
          d="M18 7.5c5.799 0 10.5 4.701 10.5 10.5S23.799 28.5 18 28.5 7.5 23.799 7.5 18 12.201 7.5 18 7.5z"
          stroke="url(#qg)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M14.25 18c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75-1.679 3.75-3.75 3.75-3.75-1.679-3.75-3.75z"
          fill="url(#qg)"
        />
        <path
          d="M31 27l6.25 6"
          stroke="url(#qg)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <text
          x="48"
          y="24"
          fontFamily="var(--font-heading)"
          fontWeight="700"
          fontSize="18"
          letterSpacing="-0.02em"
          fill="currentColor"
        >
          quikhyr.ai
        </text>
      </g>
    </svg>
  )
}

export default function HeroSection({
  className,
  style,
  layout = "full",
  title = "quikhyr.ai",
  tagline = "AI-Powered HR Platform for Intelligent Recruitment & Workforce Management",
  ctaHref = "/login",
  ctaLabel = "Experience AI Demo",
  url = "www.quikhyr.ai",
  showLogo = true,
}: HeroSectionProps) {
  const heightClasses =
    layout === "full"
      ? "min-h-[85vh] sm:min-h-[90vh]"
      : "min-h-[60vh]"

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate w-full bg-background text-foreground",
        heightClasses,
        "overflow-hidden",
        className
      )}
      style={style}
      role="region"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-surface-1 to-surface-2"
      />
      {/* Enhanced AI glow effects */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-chart-4/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-chart-1/15 blur-2xl animate-pulse" />
      {/* Fine grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(233,238,236,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(233,238,236,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(70% 55% at 50% 40%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 55% at 50% 40%, black 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 py-16 sm:px-8 sm:py-24">
        {showLogo && (
          <div className="mb-6 sm:mb-8">
            <QuikhyrLogo className="h-8 w-auto text-foreground/90 sm:h-9" />
          </div>
        )}

        {/* URL pill */}
        <div
          className="mb-5 flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-inset ring-border/60 backdrop-blur"
          aria-label={`Website URL: ${url}`}
        >
          <Globe className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <span className="tracking-wide">{url}</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="max-w-3xl text-center font-heading text-4xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl sm:leading-tight md:text-6xl bg-gradient-to-r from-foreground via-foreground to-primary/80 bg-clip-text text-transparent"
        >
          {title}
        </h1>

        {/* Tagline */}
        <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
          {tagline}
        </p>

        {/* AI Enhancement Badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Powered by Advanced AI & Machine Learning
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10">
          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={ctaLabel}
          >
            <Link href={ctaHref}>
              <span className="relative z-10 mr-2">{
                ctaLabel
              }</span>
              <ArrowRight
                className="relative z-10 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                aria-hidden
              />
              {/* enhanced glow on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                style={{
                  background:
                    "radial-gradient(120% 120% at 50% 0%, var(--chart-1), transparent 60%)",
                }}
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}