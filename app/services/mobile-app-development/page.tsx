"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Smartphone } from "lucide-react";

export default function MobileAppPage() {
  return (
    <ServiceDetail 
      title="Mobile App Dev"
      subtitle="Native Experiences"
      icon={Smartphone}
      description="Creating stunning, intuitive mobile apps for iOS and Android. We focus on deep system integration and fluid animations that users love."
      features={[
        "iOS Swift Development",
        "Android Kotlin Apps",
        "Cross-Platform React Native",
        "App Store Optimization",
        "Biometric Security",
        "Offline-First Logic"
      ]}
      process={[
        { title: "Prototype", desc: "Interactive low-fidelity and high-fidelity wireframing." },
        { title: "Develop", desc: "Clean, native-feel coding with modular architectures." },
        { title: "Connect", desc: "Deep integration with cloud backends and third-party APIs." },
        { title: "Quality", desc: "Testing across 50+ device types and OS versions." }
      ]}
    />
  );
}
