"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Copy, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

type SocialLink = {
  label: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface FooterSectionProps {
  className?: string
  companyName?: string
  title?: string
  description?: string
  email?: string
  phone?: string
  address?: string
  links?: FooterLink[]
  socials?: SocialLink[]
  padded?: boolean
}

function normalizePhoneForHref(phone: string) {
  return phone.replace(/[^\d+]/g, "")
}

function InfoRow({
  icon: Icon,
  children,
  action,
  as = "div",
  href,
  title,
  ariaLabel,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
  action?: React.ReactNode
  as?: "div" | "a"
  href?: string
  title?: string
  ariaLabel?: string
}) {
  const Comp: any = as
  const baseClasses =
    "group flex items-center justify-between gap-3 rounded-md border border-transparent px-3 py-2 transition-colors"
  const interactive =
    as === "a" ? "hover:border-border hover:bg-secondary-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" : ""

  return (
    <Comp
      className={cn(baseClasses, interactive)}
      href={href}
      title={title}
      aria-label={ariaLabel}
      target={as === "a" && href?.startsWith("http") ? "_blank" : undefined}
      rel={as === "a" && href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className="flex min-w-0 items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary/60 text-secondary-foreground"
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm text-foreground">{children}</div>
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Comp>
  )
}

export default function FooterSection({
  className,
  companyName = "Your Company",
  title = "Thank you for your time.",
  description = "We appreciate your consideration. If our work resonates, we’d love to continue the conversation. Expect a response within one business day.",
  email = "hello@yourcompany.com",
  phone = "+1 (555) 123-4567",
  address = "123 Market St, Suite 500, San Francisco, CA 94103",
  links = [],
  socials = [],
  padded = true,
}: FooterSectionProps) {
  const telHref = `tel:${normalizePhoneForHref(phone)}`
  const mailHref = `mailto:${email}`
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(address)}`
  const year = new Date().getFullYear()

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(`${label} copied to clipboard`)
    } catch {
      toast.error(`Unable to copy ${label}`)
    }
  }

  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-heading"
      className={cn(
        "bg-secondary text-secondary-foreground border-t border-border",
        padded && "px-6 py-12 sm:py-16",
        className,
      )}
    >
      <div className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Thank you
            </p>
            <h2
              id="footer-heading"
              className="font-heading text-3xl font-semibold leading-tight sm:text-4xl"
            >
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Average response time: &lt; 1 business day</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-95">
              <a href={mailHref} aria-label={`Email ${companyName}`}>
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Email us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-transparent hover:bg-secondary-foreground/5"
            >
              <a href={telHref} aria-label={`Call ${companyName}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call us
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <section aria-labelledby="contact-heading" className="space-y-3">
            <h3 id="contact-heading" className="font-heading text-sm font-semibold">
              Contact
            </h3>
            <div className="space-y-2">
              <InfoRow
                icon={Mail}
                as="a"
                href={mailHref}
                title={`Email ${companyName}`}
                ariaLabel={`Email ${companyName} at ${email}`}
                action={
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={(e) => {
                      e.preventDefault()
                      handleCopy(email, "Email")
                    }}
                    aria-label="Copy email address"
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  </Button>
                }
              >
                {email}
              </InfoRow>

              <InfoRow
                icon={Phone}
                as="a"
                href={telHref}
                title={`Call ${companyName}`}
                ariaLabel={`Call ${companyName} at ${phone}`}
                action={
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={(e) => {
                      e.preventDefault()
                      handleCopy(phone, "Phone")
                    }}
                    aria-label="Copy phone number"
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  </Button>
                }
              >
                {phone}
              </InfoRow>
            </div>
          </section>

          <section aria-labelledby="office-heading" className="space-y-3">
            <h3 id="office-heading" className="font-heading text-sm font-semibold">
              Office
            </h3>
            <InfoRow
              icon={MapPin}
              as="a"
              href={mapsHref}
              title="Open address in Google Maps"
              ariaLabel={`Open address in Google Maps for ${address}`}
              action={
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
              }
            >
              {address}
            </InfoRow>
            <p className="px-3 text-xs text-muted-foreground">
              Mon–Fri · 9am–6pm PT
            </p>
          </section>

          {links.length > 0 && (
            <nav aria-labelledby="links-heading" className="space-y-3">
              <h3 id="links-heading" className="font-heading text-sm font-semibold">
                Resources
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>{link.label}</span>
                      {link.external ? (
                        <ExternalLink
                          className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground"
                          aria-hidden="true"
                        />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {socials.length > 0 && (
            <nav aria-labelledby="social-heading" className="space-y-3">
              <h3 id="social-heading" className="font-heading text-sm font-semibold">
                Connect
              </h3>
              <ul className="flex flex-wrap gap-2">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <li key={s.label}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-border bg-transparent text-foreground hover:bg-secondary-foreground/5"
                      >
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          title={s.label}
                          className="inline-flex items-center gap-2"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          <span className="text-sm">{s.label}</span>
                        </a>
                      </Button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {year} {companyName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-md bg-secondary-foreground/5 px-2 py-1">
                Secure by default
              </span>
              <span aria-hidden="true">•</span>
              <span className="rounded-md bg-secondary-foreground/5 px-2 py-1">
                Privacy-first
              </span>
              <span aria-hidden="true">•</span>
              <span className="rounded-md bg-secondary-foreground/5 px-2 py-1">
                Accessible
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}