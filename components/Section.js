import React from "react";

const Section = ({ children }) => {
  return (
    <section className="px-10 md:px-32 lg:px-48 py-12">{children}</section>
  );
};

export default Section;
