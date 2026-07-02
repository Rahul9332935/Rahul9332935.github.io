import { BackToTop } from "@/components/back-to-top";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExtrasSection } from "@/components/sections/extras-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Kumar",
    jobTitle: "Java Backend Engineer",
    email: "rahul9332935@gmail.com",
    url: "https://rahul9332935.github.io",
    sameAs: ["https://github.com/Rahul9332935", "https://www.linkedin.com/in/rahul9332/"],
    alumniOf: ["Masai School", "C. M. Science College, Darbhanga"],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "System Design",
      "Microservices",
      "Distributed Systems",
      "REST APIs"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <LoadingScreen />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ExtrasSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
