import React from "react";

import { createContext } from "$helpers/createContext";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const [ModalContext, useModalContext] = createContext<IModalContext>();

export const ModalProvider: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen]
  );

  return <ModalContext.Provider value={value} {...props} />;
};

export { useModalContext };
