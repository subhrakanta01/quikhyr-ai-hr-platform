"use client";

import React, { useState } from 'react';

export default function AnalyticsSection() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-surface-1 to-surface-2">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-chart-1/10 px-4 py-2 text-sm font-medium text-chart-1 ring-1 ring-chart-1/20 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              AI Analytics & Insights
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Advanced HR Analytics & Intelligence
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your hiring data into actionable insights with AI-powered analytics, 
              predictive modeling, and real-time dashboards for data-driven recruitment decisions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Analytics Dashboard Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-card/50 p-4 shadow-2xl border border-border/20 backdrop-blur-sm">
                {!imageError ? (
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/275270b6-9b68-4515-8bfe-b16e0d157193/generated_images/advanced-analytics-dashboard-showing-hr--8f3f7fc2-20250822123629.jpg"
                    alt="Advanced HR Analytics Dashboard"
                    className="w-full rounded-xl"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-surface-2 border-2 border-dashed border-border/40 rounded-xl">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        AI-powered HR analytics and performance metrics visualization
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating Analytics Badge */}
              <div className="absolute -top-4 -left-4 bg-chart-1 text-chart-1-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Live Data
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-6">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Real-time Performance Metrics
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Track key hiring metrics including time-to-hire, cost-per-hire, source effectiveness, 
                      and candidate quality scores with live dashboard updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Predictive Hiring Intelligence
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI algorithms predict candidate success, identify optimal hiring windows, 
                      and forecast future talent needs based on historical data patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Custom Reporting & Insights
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Generate custom reports with drag-and-drop builders, automated insights, 
                      and executive summaries for stakeholder communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Diversity & Inclusion Analytics
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitor diversity metrics, track inclusion initiatives, and identify bias patterns 
                      to build more equitable hiring processes and diverse teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Highlights */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold font-heading text-primary mb-1">40%</div>
              <div className="text-sm text-muted-foreground">Faster Decisions</div>
            </div>

            <div className="bg-accent/5 backdrop-blur-sm rounded-xl p-6 border border-accent/20 text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold font-heading text-accent mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>

            <div className="bg-success/5 backdrop-blur-sm rounded-xl p-6 border border-success/20 text-center">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold font-heading text-success mb-1">60%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>

            <div className="bg-chart-1/5 backdrop-blur-sm rounded-xl p-6 border border-chart-1/20 text-center">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-2xl font-bold font-heading text-chart-1 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Live Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}