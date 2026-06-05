import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/store/products";

export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="h-6 w-6 relative" />
    </a>
  );
}
