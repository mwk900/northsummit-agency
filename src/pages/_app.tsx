import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/components/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {}

    const handleRouteDone = (url: string) => {
      if (url.includes("#")) return;
      const html = document.documentElement;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        html.style.scrollBehavior = "";
      });
    };

    router.events.on("routeChangeComplete", handleRouteDone);
    return () => router.events.off("routeChangeComplete", handleRouteDone);
  }, [router.events]);

  return (
    <ErrorBoundary>
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
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </main>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ErrorBoundary>
  );
}