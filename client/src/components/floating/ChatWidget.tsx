import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send, CheckCircle2 } from "lucide-react";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-4 fade-in duration-300"
      data-testid="chat-widget"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-border/30">
        {/* Header */}
        <div className="bg-emerald-600 p-4 relative">
          <button
            onClick={onClose}
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

        {/* Form Body */}
        <div className="p-5">
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
                  rows={4}
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

        {/* Footer */}
        <div className="px-5 pb-4 pt-0">
          <p className="text-xs text-center text-muted-foreground">
            Powered by <span className="font-medium">tawk.to</span>
          </p>
        </div>
      </div>
    </div>
  );
}
