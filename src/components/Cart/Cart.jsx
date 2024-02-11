/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from 'react';

const TotalLengthContext = createContext();

export const TotalLengthProvider = ({ children }) => {
  const [totalLength, setTotalLength] = useState(0);

  return (
    <TotalLengthContext.Provider value={{ totalLength, setTotalLength }}>
      {children}
    </TotalLengthContext.Provider>
  );
};

export const useTotalLength = () => {
  const context = useContext(TotalLengthContext);
  if (!context) {
    throw new Error('useTotalLength must be used within a TotalLengthProvider');
  }
  return context;
};
