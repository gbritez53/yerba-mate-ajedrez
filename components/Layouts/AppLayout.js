import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import WhatsappButton from "components/WhatsappButton";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <WhatsappButton />
      <main className="flex justify-center min-h-screen ">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
