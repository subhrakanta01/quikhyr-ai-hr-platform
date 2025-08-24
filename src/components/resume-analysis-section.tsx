"use client";

import * as React from "react";
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeAnalysisSection() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              AI Resume Analysis
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Advanced Resume Intelligence
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered resume analysis engine extracts key insights, matches skills to requirements, 
              and provides intelligent scoring to help you identify the best candidates instantly.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image/Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-card/50 p-4 shadow-2xl border border-border/20 backdrop-blur-sm">
                {!imageError ? (
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/275270b6-9b68-4515-8bfe-b16e0d157193/generated_images/professional-ai-powered-resume-analysis--c890e69c-20250822123605.jpg"
                    alt="AI Resume Analysis Dashboard Interface"
                    className="w-full rounded-xl"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-surface-2 border-2 border-dashed border-border/40 rounded-xl">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Resume Analysis Preview</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced AI-powered resume scanning and analysis interface
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                AI Powered
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="p-6 bg-card/60 border-border/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                          Intelligent Skills Extraction
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Automatically identifies and categorizes technical skills, soft skills, certifications, 
                          and experience levels with 95%+ accuracy using advanced NLP models.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-card/60 border-border/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                          Smart Compatibility Scoring
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          AI algorithms analyze job requirements against candidate profiles to generate 
                          precise compatibility scores and highlight key strengths and gaps.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-card/60 border-border/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                          Instant Processing & Insights
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Process hundreds of resumes in seconds with real-time analysis, 
                          automated ranking, and actionable insights for faster hiring decisions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="text-2xl font-bold font-heading text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="text-2xl font-bold font-heading text-accent mb-1">10x</div>
                  <div className="text-sm text-muted-foreground">Faster Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}