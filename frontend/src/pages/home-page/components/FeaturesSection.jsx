// FeaturesSection.jsx
import React from "react";
import FeatureBlock from "./FeatureBlock";

const FeaturesSection = () => {
  // Array of features to render
  const features = [
    {
      imgSrc: "src/assets/Job hunt-rafiki 1.png",
      title: "Unified Job Discovery",
      description:
        "Find all relevant jobs in one place. Skip the chaos of multiple sites — we bring everything together for a smoother search.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* SVG content */}
        </svg>
      ),
    },
    {
      imgSrc: "src/assets/Vision statement-rafiki 1.png",
      title: "Tailored to Your Ambition",
      description:
        "Get clear insights into why a job matches your profile. Our transparency ensures you're always informed about the best opportunities.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* SVG content */}
        </svg>
      ),
    },
    {
      imgSrc: "src/assets/analytics.png",
      title: "Transparent & Match Insights",
      description:
        "See how closely jobs match your profile with our smart match percentage. Make better, faster decisions.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* SVG content */}
        </svg>
      ),
    },
    {
      imgSrc: "src/assets/image23.png",
      title: "Build a Standout Resume",
      description:
        "Use our built-in CV builder to craft a professional resume that gets noticed — optimized to impress recruiters and hiring managers.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* SVG content */}
        </svg>
      ),
    },
    {
      imgSrc: "src/assets/Design stats-rafiki 1.png",
      title: "Your Smart Job App Companion",
      description:
        "Track every application, follow up easily, and stay organized with your personal job assistant.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* SVG content */}
        </svg>
      ),
    },
  ];

  return (
    <section className="relative flex flex-col items-center pt-[24px] sm:pt-[80px] bg-white w-full h-auto px-0">
      {/* Section Heading */}
      <h3 className="text-[24px] sm:text-[24px] font-manrope font-bold text-[#AA1299] text-center">
        HOW ARE WE BETTER
      </h3>
      <div className="h-[8px]" />
      <h2 className="text-[28px] sm:text-[56px] font-manrope font-bold text-[#1B1C1C] text-center sm:text-center sm:w-[880px] sm:leading-[90px]">
        How We Help Elevate Your Career
      </h2>

      {/* Features */}
      <div className="relative w-full flex flex-col items-center gap-[64px] mt-[64px] sm:mt-[80px]">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <FeatureBlock
              imgSrc={feature.imgSrc}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />

            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
