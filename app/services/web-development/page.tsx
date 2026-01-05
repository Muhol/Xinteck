"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Globe } from "lucide-react";

export default function WebDevPage() {
  return (
    <ServiceDetail 
      title="Web Development"
      subtitle="Digital Platforms"
      icon={Globe}
      description="We craft high-performance, secure, and infinitely scalable web applications. Our engineering team focuses on lightning-fast load times and seamless user experiences."
      features={[
        "React & Next.js Architecture",
        "E-commerce Ecosystems",
        "Headless CMS Integration",
        "PWA & Responsive Labs",
        "Global CDN Deployment",
        "API First Development"
      ]}
      process={[
        { title: "Blueprint", desc: "Detailed technical specification and architecture design." },
        { title: "Sprint", desc: "High-velocity development with continuous integration." },
        { title: "Audit", desc: "Rigorous performance, security, and accessibility testing." },
        { title: "Launch", desc: "Deployment to global edge servers with 99.9% uptime." }
      ]}
    />
  );
}
