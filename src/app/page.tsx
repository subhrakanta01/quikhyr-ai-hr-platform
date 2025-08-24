import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import { AiVideoSection } from "@/components/ai-video-section"
import FeaturesOverview from "@/components/features-overview"
import AiRecruitmentSection from "@/components/ai-recruitment-section"
import ResumeAnalysisSection from "@/components/resume-analysis-section"
import VideoInterviewSection from "@/components/video-interview-section"
import IdVerificationSection from "@/components/id-verification-section"
import ATSWorkflowSection from "@/components/ats-workflow-section"
import AnalyticsSection from "@/components/analytics-section"
import IntegrationSecuritySection from "@/components/integration-security-section"
import BenefitsSection from "@/components/benefits-section"
import DemoCtaSection from "@/components/demo-cta-section"
import FooterSection from "@/components/footer-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="space-y-16 py-16 sm:space-y-24 sm:py-24">
          <AboutSection />
          
          <AiVideoSection />
          
          <FeaturesOverview />
          
          <AiRecruitmentSection />
          
          <ResumeAnalysisSection />
          
          <VideoInterviewSection />
          
          <IdVerificationSection />
          
          <ATSWorkflowSection />
          
          <AnalyticsSection />
          
          <IntegrationSecuritySection />
          
          <BenefitsSection />
          
          <DemoCtaSection />
        </div>
      </div>
      
      <FooterSection companyName="quikhyr.ai" />
    </main>
  )
}