"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "YOUR_PHONE_NUMBER";
  const whatsappURL = `https://wa.me/6580442909`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition cursor-pointer"
    >
      <MessageCircle className="text-white h-7 w-7" />
    </a>
  );
}
