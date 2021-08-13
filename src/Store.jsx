import React from "react";
import Reducer from "./Reducer";

export const StoreContext = React.createContext({});

const initial = {
  sectionHeight: 0,
  headerHeight: 0,
  showMenu: false,
  showOverlay: false,
  overlayAction: null,
  loading: true,
};

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initial);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
