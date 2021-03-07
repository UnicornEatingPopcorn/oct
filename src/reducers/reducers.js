const defaultState = {
  stopSpinner: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SPINNER_STOP": {
      return {
        stopSpinner: action.payload,
      };
    }

    default:
      return state;
  }
};
