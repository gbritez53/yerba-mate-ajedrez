import React from "react";

const AppLayout = ({ children }) => {
  return (
    <>
      <main className="grid place-content-center h-screen px-4 md:px-8 lg:px-12">
        {children}
      </main>
    </>
  );
};

export default AppLayout;
