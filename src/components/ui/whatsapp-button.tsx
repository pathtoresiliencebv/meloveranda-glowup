import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "31627344288";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};