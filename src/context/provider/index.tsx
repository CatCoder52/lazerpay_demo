import { ReactNode } from "react";
import { Provider as CartDataProvider } from "../reducer/cartReducer";

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <>
      <CartDataProvider>{children}</CartDataProvider>
    </>
  );
};

export default GlobalProvider;
