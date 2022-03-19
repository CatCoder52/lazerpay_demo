import React, { ReactNode } from "react";

const Store = (
  initial_state: any,
  reducer: (state: any, action: any) => any,
) => {

  const storeCtx = React.createContext<any>(initial_state);
  const dispatchCtx = React.createContext<React.Dispatch<any>>(() => null);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [store, dispatch] = React.useReducer(reducer, initial_state);

    return (
      <dispatchCtx.Provider value={dispatch}>
        <storeCtx.Provider value={store}>{children}</storeCtx.Provider>
      </dispatchCtx.Provider>
    );
  };

  const useStore = () => React.useContext(storeCtx);
  const useDispatch = () => React.useContext(dispatchCtx);

  if (!useStore || !useDispatch) {
    throw new Error("can not call context outside the provider");
  }

  return { useDispatch, useStore, Provider, Consumer: storeCtx.Consumer };
};

export  default Store