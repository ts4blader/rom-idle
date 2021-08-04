import ACTION from "./Action";

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.nav.open:
      return { ...state, openNav: true };
    default:
      alert("Action is not supported");
  }
};

export default Reducer;
