import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send, CheckCircle2, Home, MessageSquare, ArrowLeft, ChevronRight } from "lucide-react";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

type ViewType = "home" | "messages" | "conversation";

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 2500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setCurrentView("home");
      setSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-4 fade-in duration-300"
      data-testid="chat-widget"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-border/30 flex flex-col max-h-[520px]">
        
        {currentView === "home" && (
          <>
            <div className="bg-emerald-600 p-4 relative shrink-0">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
                data-testid="chat-close"
              >
                <X className="size-5" />
              </button>
              <p className="text-white text-sm text-center pr-6 leading-relaxed">
                Please fill out the form below and we will get back to you as soon as possible.
              </p>
            </div>

            <div className="p-5 flex-1 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                  <div className="size-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="size-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                      data-testid="chat-input-name"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                      data-testid="chat-input-email"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Message *"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className={`resize-none ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      data-testid="chat-input-message"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 h-11"
                    data-testid="chat-submit"
                  >
                    <Send className="size-4 mr-2" />
                    Submit
                  </Button>
                </form>
              )}
            </div>

            <div className="px-5 pb-2 pt-0 shrink-0">
              <p className="text-xs text-center text-muted-foreground">
                Powered by <span className="font-medium">tawk.to</span>
              </p>
            </div>
          </>
        )}

        {currentView === "messages" && (
          <>
            <div className="bg-emerald-600 p-4 relative shrink-0 flex items-center">
              <button
                onClick={() => setCurrentView("home")}
                className="text-white/80 hover:text-white transition-colors p-1 mr-2"
                aria-label="Back to home"
                data-testid="chat-back"
              >
                <ArrowLeft className="size-5" />
              </button>
              <h2 className="text-white font-semibold text-lg flex-1">Messages</h2>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
                data-testid="chat-close-messages"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Recent
              </p>
              
              <button
                onClick={() => setCurrentView("conversation")}
                className="w-full bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl p-4 text-left transition-colors group"
                data-testid="chat-conversation-card"
              >
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                    <MessageSquare className="size-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground text-sm">Customer Support</h3>
                      <span className="text-xs text-muted-foreground">now</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      👋 Hi! How can we help?
                    </p>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
                </div>
              </button>
            </div>
          </>
        )}

        {currentView === "conversation" && (
          <>
            <div className="bg-emerald-600 p-4 relative shrink-0 flex items-center">
              <button
                onClick={() => setCurrentView("messages")}
                className="text-white/80 hover:text-white transition-colors p-1 mr-2"
                aria-label="Back to messages"
                data-testid="chat-back-conversation"
              >
                <ArrowLeft className="size-5" />
              </button>
              <div className="flex-1">
                <h2 className="text-white font-semibold text-base">Customer Support</h2>
                <p className="text-white/70 text-xs">Online</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
                data-testid="chat-close-conversation"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="size-4 text-emerald-600" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-foreground">👋 Hi! How can we help you today?</p>
                  <p className="text-xs text-muted-foreground mt-1">Just now</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="size-4 text-emerald-600" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-foreground">Feel free to ask any questions about our programs, courses, or admissions process.</p>
                  <p className="text-xs text-muted-foreground mt-1">Just now</p>
                </div>
              </div>
            </div>

            <div className="p-3 border-t border-border/40 shrink-0">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type a message..."
                  className="flex-1 h-10 bg-slate-50 dark:bg-slate-700/50 border-0"
                  data-testid="chat-message-input"
                />
                <Button 
                  size="icon" 
                  className="h-10 w-10 bg-emerald-600 hover:bg-emerald-700 shrink-0"
                  data-testid="chat-send-message"
                >
                  <Send className="size-4" />
                </Button>
              </div>
            </div>
          </>
        )}

        <div className="border-t border-border/40 shrink-0">
          <div className="flex">
            <button
              onClick={() => setCurrentView("home")}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                currentView === "home" 
                  ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-50 dark:hover:bg-slate-700/50"
              }`}
              aria-label="Home"
              data-testid="chat-nav-home"
            >
              <Home className="size-5" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button
              onClick={() => setCurrentView("messages")}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                currentView === "messages" || currentView === "conversation"
                  ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-50 dark:hover:bg-slate-700/50"
              }`}
              aria-label="Messages"
              data-testid="chat-nav-messages"
            >
              <MessageSquare className="size-5" />
              <span className="text-xs font-medium">Messages</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
