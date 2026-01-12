import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatWidget from "./ChatWidget";

export default function GlobalFloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setCookieVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookieVisible(false);
  };

  const handleCloseCookies = () => {
    setCookieVisible(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3" data-testid="floating-buttons">
        <a
          href="tel:+919876543210"
          className="size-14 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105"
          aria-label="Call us"
          data-testid="floating-call-button"
        >
          <Phone className="size-6" />
        </a>

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`size-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105 ${
            isChatOpen 
              ? "bg-primary/90 text-white" 
              : "bg-primary text-white"
          }`}
          aria-label="Open chat"
          data-testid="floating-chat-button"
        >
          <MessageCircle className="size-6" />
        </button>
      </div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {cookieVisible && (
        <div 
          className="fixed bottom-4 left-4 z-50 max-w-xs animate-in slide-in-from-bottom-4 fade-in duration-300"
          data-testid="cookie-consent"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border/50 p-4">
            <div className="flex items-start gap-3">
              <p className="text-sm text-muted-foreground flex-1">
                Your experience on this site will be improved by allowing cookies
              </p>
              <button
                onClick={handleCloseCookies}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 -mt-1 -mr-1"
                aria-label="Close"
                data-testid="cookie-close"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-3">
              <Button 
                onClick={handleAcceptCookies} 
                size="sm" 
                className="w-full"
                data-testid="cookie-accept"
              >
                Allow Cookies
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
