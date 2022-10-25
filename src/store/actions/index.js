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
export const actionIsLogin = () => {
  return {
    type: "ACTION_IS_LOGIN",
  };
};
export const actionNoLogin = () => {
  return {
    type: "ACTION_NO_LOGIN",
  };
};
export const actionClientData = (customer) => {
  return {
    type: "ACTION_CLIENT_DATA",
    payload: customer,
  };
};
export const actionEditClientDate = (customer) => {
  return {
    type: "ACTION_EDIT_CLIENT_DATE",
    payload: customer,
  };
};
export const actionEditClientTime = (customer) => {
  return {
    type: "ACTION_EDIT_CLIENT_TIME",
    payload: customer,
  };
};
export const actionEditClientOccasion = (customer) => {
  return {
    type: "ACTION_EDIT_CLIENT_OCCASION",
    payload: customer,
  };
};
export const actionEditClientTheme = (customer) => {
  return {
    type: "ACTION_EDIT_CLIENT_THEME",
    payload: customer,
  };
};
export const actionEditClientCake = (customer) => {
  return {
    type: "ACTION_EDIT_CLIENT_CAKE",
    payload: customer,
  };
};
export const actionEditClientBalloon = (customer) => {
  return {
    type: "ACTION_EDIT_CLIENT_BALLOONS",
    payload: customer,
  };
};
