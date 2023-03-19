import React from 'react';

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <nav>About NavBar</nav>
      <main>
        {children}
      </main>
      </>
  );
};

export default RootLayout;