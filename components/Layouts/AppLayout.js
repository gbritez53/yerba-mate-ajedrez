import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import WhatsappButton from "components/WhatsappButton";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <WhatsappButton />
      <main className="grid place-content-center gap-4 pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
