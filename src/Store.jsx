import React from "react";
import Reducer from "./Reducer";

export const StoreContext = React.createContext({});

const initial = {
  openNav: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initial);

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export default Store;
