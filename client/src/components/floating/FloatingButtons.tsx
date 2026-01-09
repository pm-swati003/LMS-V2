import { Phone, MessageCircle } from "lucide-react";

interface FloatingButtonsProps {
  onChatClick: () => void;
  isChatOpen: boolean;
}

export default function FloatingButtons({ onChatClick, isChatOpen }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3" data-testid="floating-buttons">
      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="size-14 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105"
        aria-label="Call us"
        data-testid="floating-call-button"
      >
        <Phone className="size-6" />
      </a>

      {/* Chat Button */}
      <button
        onClick={onChatClick}
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
  );
}
