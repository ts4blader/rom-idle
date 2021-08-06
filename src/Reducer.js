import ACTION from "./Action";

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.nav.open:
      return { ...state, openNav: true };
    case ACTION.headerHeight.set:
      return { ...state, headerHeight: action.payload };
    default:
      alert("Action is not supported");
  }
};

export default Reducer;
