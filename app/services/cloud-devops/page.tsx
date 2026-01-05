"use client";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { Cloud } from "lucide-react";

export default function CloudDevOpsPage() {
  return (
    <ServiceDetail 
      title="Cloud & DevOps"
      subtitle="Infra Excellence"
      icon={Cloud}
      description="Modernizing your infrastructure with cloud-native automation. We ensure your systems are resilient, secure, and ready for global traffic peaks."
      features={[
        "AWS/Azure/GCP Logic",
        "CI/CD Pipeline Mastery",
        "Kubernetes Orchestration",
        "Serverless Scaling",
        "Security Hardening",
        "Site Reliability Labs"
      ]}
      process={[
        { title: "Assess", desc: "Security and performance audit of current architecture." },
        { title: "Automate", desc: "Implementing Infrastructure as Code (IaC) protocols." },
        { title: "Secure", desc: "Applying zero-trust models and data encryption." },
        { title: "Monitor", desc: "Setting up real-time observability and alerting." }
      ]}
    />
  );
}
