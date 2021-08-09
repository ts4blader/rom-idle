import ACTION from "./Action";

const Reducer = (state, action) => {
  switch (action.type) {
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
