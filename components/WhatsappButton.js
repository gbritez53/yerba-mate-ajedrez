import React from "react";
import Whatsapp from "public/icons/Whatsapp";

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=543764231666"
      target="_blanck"
      rel="noreferrer"
      className="fixed z-50 bottom-10 right-10 transform hover:scale-110 hover:translate-x-1 active:scale-95 hover:-translate-y-2 transition-transform duration-300 ease-in-out"
    >
      <Whatsapp />
    </a>
  );
};

export default WhatsappButton;
