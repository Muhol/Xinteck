"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Layers } from "lucide-react";

export default function CustomSoftwarePage() {
  return (
    <ServiceDetail 
      title="Custom Software"
      subtitle="Enterprise Solutions"
      icon={Layers}
      description="Tailor-made software built to solve unique business challenges. We automate the complex and streamline the legacy for modern growth."
      features={[
        "Legacy Modernization",
        "Custom ERP/CRM Systems",
        "Automated Workflows",
        "Data Lake Architecture",
        "Microservices Design",
        "Internal Admin Tools"
      ]}
      process={[
        { title: "Discovery", desc: "Understanding the complex roadblocks in your current system." },
        { title: "Architect", desc: "Building a foundation for long-term scalability." },
        { title: "Integrate", desc: "Connecting new tools with your existing tech stack." },
        { title: "Support", desc: "Continuous maintenance and dedicated tech support." }
      ]}
    />
  );
}
