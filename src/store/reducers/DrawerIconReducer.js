const DrawerIconReducer = (state = true, action) => {
  switch (action.type) {
    case "DRAWER_ICON_HIDDEN":
      return (state = false);
    case "DRAWER_ICON_SHOW":
      return (state = true);
    default:
      return state;
  }
};
export default DrawerIconReducer;
