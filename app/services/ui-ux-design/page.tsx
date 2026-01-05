"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Palette } from "lucide-react";

export default function UIUXPage() {
  return (
    <ServiceDetail 
      title="UI/UX Design"
      subtitle="Visual Strategy"
      icon={Palette}
      description="Design that transcends aesthetics. We create user-centric interfaces that convert visitors into loyal customers through science and art."
      features={[
        "Visual Identity Systems",
        "Conversion Optimization",
        "Design System Creation",
        "User Research & Testing",
        "Interactive Prototyping",
        "Motion Design Labs"
      ]}
      process={[
        { title: "Research", desc: "Understanding the user behavior and psychological triggers." },
        { title: "Wireframe", desc: "Setting the bone structure of the user journey." },
        { title: "Style", desc: "Applying premium aesthetics and brand consistency." },
        { title: "Iterate", desc: "Testing with real users and refining the experience." }
      ]}
    />
  );
}
