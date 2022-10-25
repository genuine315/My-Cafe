const ClientDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "ACTION_CLIENT_DATA":
      return (state = {
        table: action.payload.table,
        date: action.payload.date,
        time: action.payload.time,
        theme: action.payload.theme,
        occasion: action.payload.occasion,
        cake: action.payload.cake,
        balloon: action.payload.balloon,
      });
    // case "ACTION_EDIT_CLIENT_DATE":
    //   return (state = {
    //     table: action.payload.table,
    //     date: action.payload.date,
    //     time: action.payload.time,
    //     theme: action.payload.theme,
    //     occasion: action.payload.occasion,
    //     cake: action.payload.cake,
    //     balloon: action.payload.balloon,
    //   });
    // case "ACTION_EDIT_CLIENT_TIME":
    //   return (state = {
    //     table: action.payload.table,
    //     date: action.payload.date,
    //     time: action.payload.time,
    //     theme: action.payload.theme,
    //     occasion: action.payload.occasion,
    //     cake: action.payload.cake,
    //     balloon: action.payload.balloon,
    //   });
    // case "ACTION_EDIT_CLIENT_OCCASION":
    //   return (state = {
    //     table: action.payload.table,
    //     date: action.payload.date,
    //     time: action.payload.time,
    //     theme: action.payload.theme,
    //     occasion: action.payload.occasion,
    //     cake: action.payload.cake,
    //     balloon: action.payload.balloon,
    //   });
    // case "ACTION_EDIT_CLIENT_THEME":
    //   return (state = {
    //     table: action.payload.table,
    //     date: action.payload.date,
    //     time: action.payload.time,
    //     theme: action.payload.theme,
    //     occasion: action.payload.occasion,
    //     cake: action.payload.cake,
    //     balloon: action.payload.balloon,
    //   });
    // case "ACTION_EDIT_CLIENT_CAKE":
    //   return (state = {
    //     table: action.payload.table,
    //     date: action.payload.date,
    //     time: action.payload.time,
    //     theme: action.payload.theme,
    //     occasion: action.payload.occasion,
    //     cake: action.payload.cake,
    //     balloon: action.payload.balloon,
    //   });
    // case "ACTION_EDIT_CLIENT_BALLOONS":
    //   return (state = {
    //     table: action.payload.table,
    //     date: action.payload.date,
    //     time: action.payload.time,
    //     theme: action.payload.theme,
    //     occasion: action.payload.occasion,
    //     cake: action.payload.cake,
    //     balloon: action.payload.balloon,
    //   });

    default:
      return state;
  }
};
export default ClientDataReducer;
