import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    default: "Xinteck | Premium Software Development",
    template: "%s | Xinteck",
  },
  description: "Xinteck provides high-performing web, mobile, and custom software solutions for modern businesses. Premium design meets engineering excellence.",
  metadataBase: new URL("https://xinteck.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xinteck | Premium Software Development",
    description: "High-performing software solutions for modern businesses.",
    url: "https://xinteck.com",
    siteName: "Xinteck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xinteck | Premium Software Development",
    description: "High-performing software solutions for modern businesses.",
  },
  icons: {
    icon: [
      {
        url: "/logos/logo-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logos/logo-light.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/logos/logo-light.png",
    apple: "/logos/logo-light.png",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${nunito.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <NextTopLoader 
          color="#B8860B"
          initialPosition={0.08}
          crawlSpeed={50}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={50}
          shadow="0 0 10px #B8860B,0 0 5px #B8860B"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
