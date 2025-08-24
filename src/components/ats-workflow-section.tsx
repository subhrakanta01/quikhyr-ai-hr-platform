"use client";

import React, { useState } from 'react';

export default function ATSWorkflowSection() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface-2 via-background to-surface-1">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-chart-2/10 px-4 py-2 text-sm font-medium text-chart-2 ring-1 ring-chart-2/20 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Automated Workflows
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Intelligent ATS & Workflow Automation
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Streamline your entire recruitment process with AI-powered workflows, intelligent pipeline management, 
              and automated candidate progression for faster, smarter hiring decisions.
            </p>
          </div>

          {/* Video Demo */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden bg-card/50 p-4 lg:p-6 shadow-2xl border border-border/20 backdrop-blur-sm">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-2">
                {!videoError ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={handleVideoError}
                    preload="metadata"
                  >
                    <source 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/275270b6-9b68-4515-8bfe-b16e0d157193/generated_videos/animated-workflow-diagram-showing-automa-5bb56471-20250822123551.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-2 border-2 border-dashed border-border/40">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Workflow Automation Demo</h3>
                      <p className="text-sm text-muted-foreground">
                        Intelligent ATS workflows and automated recruitment processes
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Smart Pipeline Management
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-driven candidate progression through customizable pipeline stages with 
                automated status updates and intelligent routing decisions.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Automated Candidate Matching
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Machine learning algorithms automatically match candidates to positions based on 
                skills, experience, and cultural fit indicators.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0v5a2 2 0 002 2v0a2 2 0 002 2h4a2 2 0 002-2v0a2 2 0 002-2V7m-8 0V2m8 0v5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Intelligent Task Automation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automate repetitive tasks like scheduling, follow-ups, and document generation 
                with smart triggers and conditional logic.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Team Collaboration Tools
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built-in collaboration features with real-time comments, feedback collection, 
                and decision tracking across your hiring team.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Smart Scheduling & Reminders
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered scheduling optimization with automated calendar coordination, 
                interview reminders, and timezone management.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Advanced Reporting & Analytics
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive workflow analytics with performance metrics, bottleneck identification, 
                and optimization recommendations powered by AI insights.
              </p>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-3xl font-bold font-heading text-primary mb-2">75%</div>
              <div className="text-sm text-muted-foreground">Faster Processing</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
              <div className="text-3xl font-bold font-heading text-accent mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Task Automation</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-success/5 border border-success/20">
              <div className="text-3xl font-bold font-heading text-success mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Time Savings</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-chart-1/5 border border-chart-1/20">
              <div className="text-3xl font-bold font-heading text-chart-1 mb-2">95%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}