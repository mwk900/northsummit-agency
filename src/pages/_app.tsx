import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/components/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // ignore
    }

    const hardScrollTop = () => {
      // 1) Force-unlock any leftover scroll locks (menu overlays etc.)
      document.body.style.overflow = "";
      delete document.body.dataset.mobileMenuOpen;

      // 2) Temporarily disable smooth scrolling so the jump is immediate
      const html = document.documentElement as HTMLElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      // 3) Force top on all possible scroll containers
      window.scrollTo(0, 0);
      document.scrollingElement?.scrollTo(0, 0);
      document.documentElement.scrollTo?.(0, 0);
      document.body.scrollTo?.(0, 0);

      // Restore scroll behavior after the jump
      window.setTimeout(() => {
        html.style.scrollBehavior = prevScrollBehavior;
      }, 0);
    };

    const handleRouteDone = (url: string) => {
      if (url.includes("#")) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hardScrollTop();
          [0, 50, 120, 220, 400].forEach((ms) => window.setTimeout(hardScrollTop, ms));
        });
      });
    };

    router.events.on("routeChangeComplete", handleRouteDone);
    return () => {
      router.events.off("routeChangeComplete", handleRouteDone);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="min-h-screen pt-16"
        style={{ backgroundColor: "var(--primary-bg)" }}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}