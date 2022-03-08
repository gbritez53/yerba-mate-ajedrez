import React from "react";
import Whatsapp from "public/icons/Whatsapp";

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=543764231666"
      target="_blanck"
      rel="noreferrer"
      className="fixed z-50 bottom-24 md:bottom-20 right-10 simple-animation animate-pulse hover:animate-none"
    >
      <Whatsapp />
    </a>
  );
};

export default WhatsappButton;
