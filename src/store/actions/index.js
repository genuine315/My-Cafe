export const helloTitle = () => {
  return {
    type: "HELLO",
    payload: "hello",
  };
};

export const speakeMore = () => {
  return {
    type: "SPEAKE_MORE",
    payload: "how are you my frind?",
  };
};

export const byeTitle = () => {
  return {
    type: "BYE",
    payload: "good Bye",
  };
};

export const LightThemeAction = () => {
  return {
    type: "ACTION_LIGHT_THEME",
  };
};
export const DarkThemeAction = () => {
  return {
    type: "ACTION_DARK_THEME",
  };
};
export const ToggleDrawer = () => {
  return {
    type: "TOGGLE_DRAWER",
  };
};
export const DrawerIconHidden = () => {
  return {
    type: "DRAWER_ICON_HIDEEN",
  };
};
export const DrawerIconShow = () => {
  return {
    type: "DRAWER_ICON_SHOW",
  };
};
