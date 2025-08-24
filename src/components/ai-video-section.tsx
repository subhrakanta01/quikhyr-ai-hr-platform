"use client";

import React, { useState } from 'react';

export const AiVideoSection = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-surface-1">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Content */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Powered Innovation
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Experience quikhyr.ai in Action
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how quikhyr.ai's cutting-edge artificial intelligence transforms traditional HR processes 
              into intelligent, automated workflows that save time, reduce costs, and enhance decision-making 
              across your organization with advanced machine learning capabilities.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden bg-card/50 p-4 lg:p-6 shadow-2xl border border-border/20 backdrop-blur-sm">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-2">
              {!videoError ? (
                <video
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-95"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={handleVideoError}
                  preload="metadata"
                >
                  <source 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/275270b6-9b68-4515-8bfe-b16e0d157193/generated_videos/professional-ai-recruitment-dashboard-in-78070600-20250822123437.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-2 border-2 border-dashed border-border/40">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">AI Demo Video</h3>
                    <p className="text-sm text-muted-foreground">
                      We're having trouble loading the video demonstration. 
                      Please check your connection or try again later.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Description */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Watch how quikhyr.ai's advanced AI technology streamlines recruitment, onboarding, and HR management processes
              </p>
            </div>
          </div>

          {/* Enhanced Feature Highlights */}
          <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">AI Lightning Speed</h3>
              <p className="text-sm text-muted-foreground">
                Process applications and manage HR tasks 15x faster with advanced AI automation and machine learning algorithms
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">Intelligent Decisions</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered insights and predictive analytics help you make smarter hiring and management decisions with 95% accuracy
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-success/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">Seamless AI Integration</h3>
              <p className="text-sm text-muted-foreground">
                Integrate effortlessly with your existing tools and workflows while leveraging powerful AI capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};