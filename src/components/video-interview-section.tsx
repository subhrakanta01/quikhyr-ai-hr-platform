"use client";

import React, { useState } from 'react';

export default function VideoInterviewSection() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface-1 via-background to-surface-2">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent ring-1 ring-accent/20 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              AI Video Interviews
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Intelligent Video Interview Platform
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conduct smarter interviews with AI-powered analysis, real-time sentiment tracking, 
              and automated competency scoring for better hiring decisions.
            </p>
          </div>

          {/* Video Demo */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden bg-card/50 p-4 lg:p-6 shadow-2xl border border-border/20 backdrop-blur-sm max-w-4xl mx-auto">
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
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/275270b6-9b68-4515-8bfe-b16e0d157193/generated_videos/ai-powered-video-interview-simulation-sh-dc657ac0-20250822123514.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-2 border-2 border-dashed border-border/40">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Video Interview Demo</h3>
                      <p className="text-sm text-muted-foreground">
                        AI-powered video interview platform with real-time analysis
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Real-time Sentiment Analysis
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI monitors facial expressions, tone of voice, and speech patterns to provide 
                real-time emotional intelligence insights during interviews.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Automated Competency Scoring
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Machine learning algorithms evaluate responses against job requirements 
                and provide detailed competency scores for each candidate.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Smart Scheduling & Recording
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intelligent calendar integration, automated reminders, and secure video recording 
                with AI-generated transcripts and highlights.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0L6 20a1 1 0 001 1h10a1 1 0 001-1L16 4M9 9v8m6-8v8" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Bias Detection & Elimination
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI monitors for unconscious bias in questions and evaluations, 
                ensuring fair and inclusive interview processes.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Advanced Analytics Dashboard
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive interview analytics with performance metrics, 
                comparison tools, and predictive hiring success indicators.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                Enterprise Security & Compliance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bank-level encryption, GDPR compliance, and secure data handling 
                for confidential interview processes and candidate information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}