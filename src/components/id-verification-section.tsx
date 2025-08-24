"use client";

import React, { useState } from 'react';

export default function IdVerificationSection() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-surface-2 to-surface-1">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success ring-1 ring-success/20 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              AI Identity Verification
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Advanced ID Verification & Security
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ensure candidate authenticity with AI-powered identity verification, biometric analysis, 
              and government ID validation for secure and compliant hiring processes.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Features List */}
            <div className="space-y-6">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Biometric Face Matching
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Advanced facial recognition technology compares live photos with government IDs, 
                      ensuring authentic identity verification with 99.7% accuracy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Government ID Validation
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI-powered document analysis validates passports, driver's licenses, and national IDs 
                      against official databases and security features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Liveness Detection
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Real-time liveness detection prevents spoofing attacks using photos or videos, 
                      ensuring authentic human presence during verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/40 hover:bg-card/80 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-chart-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                      Compliance & Audit Trail
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complete audit trails with tamper-proof logs, GDPR compliance, 
                      and regulatory reporting for all verification activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Demo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-card/50 p-4 shadow-2xl border border-border/20 backdrop-blur-sm">
                {!imageError ? (
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/275270b6-9b68-4515-8bfe-b16e0d157193/generated_images/modern-id-verification-dashboard-showing-f210848c-20250822123617.jpg"
                    alt="ID Verification Dashboard Interface"
                    className="w-full rounded-xl"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-surface-2 border-2 border-dashed border-border/40 rounded-xl">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">ID Verification Interface</h3>
                      <p className="text-sm text-muted-foreground">
                        AI-powered identity verification and biometric analysis dashboard
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating Security Badge */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-success/5 border border-success/20">
                  <div className="text-lg font-bold font-heading text-success mb-1">99.7%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-lg font-bold font-heading text-primary mb-1">&lt;3s</div>
                  <div className="text-xs text-muted-foreground">Verification</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="text-lg font-bold font-heading text-accent mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}