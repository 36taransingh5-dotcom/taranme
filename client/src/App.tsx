import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import PortalIntro from "./components/PortalIntro";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if user has already seen the intro
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("portalIntroSeen");
    }
    return true;
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("portalIntroSeen", "true");
    // Reset scroll position
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {showIntro ? (
            <PortalIntro onComplete={handleIntroComplete} />
          ) : (
            <Router />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
