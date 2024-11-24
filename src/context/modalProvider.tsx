import React, { createContext, useState, useContext } from "react";

// Define the type for the context
type ModalContextType = {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with a default value
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Create the provider component
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook to use the context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
