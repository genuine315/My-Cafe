const ThemeReducer = (state = true, action) => {
  switch (action.type) {
    case "ACTION_LIGHT_THEME":
      return (state = false);
    case "ACTION_DARK_THEME":
      return (state = true);
    default:
      return state;
  }
};
export default ThemeReducer;
