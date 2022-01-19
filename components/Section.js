import React from "react";

const Section = ({ children }) => {
  return (
    <section className="px-10 md:px-32 lg:px-48 py-12 h-screen">
      {children}
    </section>
  );
};

export default Section;
