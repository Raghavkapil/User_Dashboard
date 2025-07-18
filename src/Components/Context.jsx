import React, { createContext, useState  } from "react";

export const HeadContext = createContext('');
export const HeadProvider = ({ children }) => {
  const [heading, setHeading] = useState('User List...');

  return (
    <HeadContext.Provider value={{ heading, setHeading }}>
      {children}
    </HeadContext.Provider>
  );
}