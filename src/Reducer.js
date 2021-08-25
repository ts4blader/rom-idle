import ACTION from "./Action";

const Reducer = (state, action) => {
  switch (action.type) {
    //loading
    case ACTION.loader.show:
      return { ...state, loading: true };
    case ACTION.loader.hide:
      return { ...state, loading: false };
    //pop up
    case ACTION.popUp.show:
      return { ...state, showPopUp: true };
    case ACTION.popUp.hide:
      return { ...state, showPopUp: false };
    // Menu
    case ACTION.menu.open:
      return { ...state, showMenu: true };
    case ACTION.menu.close:
      return { ...state, showMenu: false };
    // Overlay
    case ACTION.overlay.open:
      return { ...state, showOverlay: true };
    case ACTION.overlay.close:
      return { ...state, showOverlay: false };
    // Overlay action
    case ACTION.overlay_action.set:
      return { ...state, overlayAction: action.payload };
    // Utilities
    case ACTION.headerHeight.set:
      return { ...state, headerHeight: action.payload };
    case ACTION.sectionHeight:
      return { ...state, sectionHeight: action.payload };
    default:
      alert("Action is not supported");
  }
};

export default Reducer;
