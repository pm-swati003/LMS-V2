import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
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
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 -mt-1 -mr-1"
            aria-label="Close"
            data-testid="cookie-close"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="mt-3">
          <Button 
            onClick={handleAccept} 
            size="sm" 
            className="w-full"
            data-testid="cookie-accept"
          >
            Allow Cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
