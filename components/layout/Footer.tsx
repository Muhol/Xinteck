import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Portfolio", href: "/portfolio" },
      { name: "Success Stories", href: "/portfolio#case-studies" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Dev", href: "/services/mobile-app-development" },
      { name: "Custom Software", href: "/services/custom-software-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary/5 border-t border-primary/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logos/logo-namelight.png"
                alt="Xinteck"
                width={150}
                height={150}
                className="dark:hidden"
              />
              <Image
                src="/logos/logo-name-dark.png"
                alt="Xinteck"
                width={150}
                height={150}
                className="hidden dark:block"
                />
            </Link>
            <p className="text-foreground/60 leading-relaxed max-w-sm">
              Crafting high-performing digital solutions for forward-thinking companies. 
              Engineering excellence meets premium design.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h3 className="font-bold text-lg text-foreground">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-gold transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-0 h-3 group-hover:w-3 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100 text-gold" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-foreground/40">
          <p>© 2025 Xinteck Premium Solutions Labs. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
              <Mail size={16} className="text-gold" />
              hello@xinteck.com
            </div>
            <div className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
              <Phone size={16} className="text-gold" />
              +1 (555) 000-0000
            </div>
            <div className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
              <MapPin size={16} className="text-gold" />
              Silicon Valley HQ
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
