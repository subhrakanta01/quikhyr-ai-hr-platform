"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BadgeCheck,
  Cloud,
  History,
  Link as LinkIcon,
  Lock,
  Network,
  Plug,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Webhook,
} from "lucide-react"

type TabValue = "integrations" | "security"

interface IntegrationSecuritySectionProps {
  className?: string
  style?: React.CSSProperties
  defaultTab?: TabValue
  connectors?: string[]
  compliance?: string[]
  onTabChange?: (value: TabValue) => void
}

const DEFAULT_CONNECTORS = [
  "Workday",
  "BambooHR",
  "Gusto",
  "ADP",
  "Rippling",
  "UKG",
  "SAP SuccessFactors",
  "Oracle HCM",
]

const DEFAULT_COMPLIANCE = ["SOC 2 Type II", "ISO 27001", "GDPR", "SSO (SAML/OIDC)", "SCIM 2.0"]

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}

export default function IntegrationSecuritySection({
  className,
  style,
  defaultTab = "integrations",
  connectors = DEFAULT_CONNECTORS,
  compliance = DEFAULT_COMPLIANCE,
  onTabChange,
}: IntegrationSecuritySectionProps) {
  const [tab, setTab] = React.useState<TabValue>(defaultTab)

  return (
    <section
      aria-label="Integrations and Security"
      className={cn(
        "bg-background text-foreground rounded-none",
        "w-full",
        className
      )}
      style={style}
    >
      <div className="space-y-6">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-1)] px-3 py-1 text-xs text-muted-foreground ring-1 ring-border">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
            <span className="font-medium tracking-wide">Enterprise-ready trust</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold leading-tight">
            Seamless Integrations. Proven Security.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            Connect to your HRIS in minutes and operate with confidence. Robust RBAC, encryption,
            detailed audit trails, and compliance standards are built-in to meet the needs of modern
            enterprises.
          </p>
        </header>

        <Tabs
          defaultValue={defaultTab}
          value={tab}
          onValueChange={(v) => {
            const value = (v as TabValue) || "integrations"
            setTab(value)
            onTabChange?.(value)
          }}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 w-full rounded-lg bg-[var(--surface-1)] p-1 ring-1 ring-border">
            <TabsTrigger
              value="integrations"
              className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-md transition-colors"
              aria-label="Integrations"
            >
              <div className="inline-flex items-center gap-2">
                <Plug className="size-4" aria-hidden="true" />
                <span>Integrations</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-md transition-colors"
              aria-label="Security"
            >
              <div className="inline-flex items-center gap-2">
                <Shield className="size-4" aria-hidden="true" />
                <span>Security</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="integrations" className="focus-visible:outline-none">
            <div
              className={cn(
                "grid gap-5",
                "sm:grid-cols-2"
              )}
            >
              <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-1">
                  <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                    <Network className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base font-semibold">Prebuilt HRIS integrations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Plug into leading HRIS systems with battle‑tested connectors and a unified employee schema.
                  </p>
                  <div className="flex flex-wrap gap-2" aria-label="Supported HRIS connectors">
                    {connectors.map((label) => (
                      <Badge
                        key={label}
                        variant="secondary"
                        className="rounded-full border-border/70 bg-[var(--surface-1)] text-foreground"
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="bg-border/50" />
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Cloud className="size-3.5 text-primary" aria-hidden="true" />
                    <span>Real-time and scheduled syncs with retry & backoff</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-1">
                  <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                    <Webhook className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base font-semibold">Webhooks & event subscriptions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Subscribe to key lifecycle events for reliable downstream automations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["employee.created", "employee.updated", "employment.terminated", "department.changed"].map(
                      (e) => (
                        <Badge
                          key={e}
                          variant="outline"
                          className="rounded-full border-border/70 bg-transparent text-foreground"
                        >
                          {e}
                        </Badge>
                      )
                    )}
                  </div>
                  <pre
                    aria-label="Webhook sample payload"
                    className={cn(
                      "mt-2 rounded-md bg-[var(--surface-1)] p-3 text-xs leading-relaxed",
                      "text-muted-foreground ring-1 ring-border overflow-x-auto"
                    )}
                  >
{`POST /webhooks/hris
{
  "event": "employee.updated",
  "id": "evt_9a3f",
  "ts": 1719428200,
  "data": { "employeeId": "emp_123", "changes": ["title", "managerId"] }
}`}
                  </pre>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-1">
                  <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                    <LinkIcon className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base font-semibold">Unified API</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    A consistent, versioned API that abstracts provider quirks with strict typing and sensible defaults.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {["Typesafe", "Idempotent", "Paginated"].map((t) => (
                      <div
                        key={t}
                        className="rounded-md bg-[var(--surface-1)] px-3 py-2 text-xs text-muted-foreground ring-1 ring-border"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-1">
                  <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                    <SlidersHorizontal className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base font-semibold">Sync controls & mapping</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Fine‑grained control over sync cadence, data scopes, and field mappings to fit your workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Real-time", "15-min", "Hourly", "Daily", "Manual"].map((c) => (
                      <Badge
                        key={c}
                        variant="outline"
                        className="rounded-full border-border/70 bg-transparent text-foreground"
                      >
                        {c}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="focus-visible:outline-none">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2" aria-label="Compliance and certifications">
                {compliance.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-1)] px-3 py-1.5 text-xs ring-1 ring-border"
                    role="status"
                    aria-live="polite"
                  >
                    <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{c}</span>
                  </span>
                ))}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                  <CardHeader className="space-y-1">
                    <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                      <Shield className="size-4 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base font-semibold">Role‑based access control</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Enforce least‑privilege with roles, granular permissions, and scope isolation across environments.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                        Organization, project, and resource‑level scoping
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                        Field‑level protections for sensitive data
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                  <CardHeader className="space-y-1">
                    <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                      <Lock className="size-4 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base font-semibold">Encryption & key management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Data encrypted at rest with AES‑256 and in transit via TLS 1.2+. Optional customer‑managed keys.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["AES‑256 at rest", "TLS 1.2+ in transit", "KMS / CMK"].map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="rounded-full border-border/70 bg-[var(--surface-1)] text-foreground"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                  <CardHeader className="space-y-1">
                    <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                      <History className="size-4 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base font-semibold">Audit logs & transparency</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Immutable audit trails for all administrative and data actions, with export and retention controls.
                    </p>
                    <div className="rounded-md bg-[var(--surface-1)] p-3 ring-1 ring-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex size-2 rounded-full bg-primary/80" aria-hidden="true" />
                        <span>2025-01-15 14:22 UTC — user.admin updated role: analyst → manager</span>
                      </div>
                      <Separator className="my-2 bg-border/50" />
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex size-2 rounded-full bg-primary/80" aria-hidden="true" />
                        <span>2025-01-15 14:05 UTC — api:employee.updated via webhook</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/80 hover:border-primary/40 transition-colors">
                  <CardHeader className="space-y-1">
                    <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--surface-2)] ring-1 ring-border">
                      <Cloud className="size-4 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base font-semibold">SSO, SCIM & data residency</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Enterprise identity and provisioning with SSO (SAML/OIDC), SCIM 2.0, and region‑based data residency.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["SAML", "OIDC", "SCIM 2.0", "EU/US residency"].map((i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="rounded-full border-border/70 bg-transparent text-foreground"
                        >
                          {i}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}