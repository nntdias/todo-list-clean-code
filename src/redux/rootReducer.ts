import items from "../data/items";

const initialState = {
  settings: {
    count: 1,
    filterText: "",
  },
  todoItems: items.slice(0, 4),
};

const onSetFilterText = (state: any, action: any) => ({
  ...state,
  settings: {
    ...state.settings,
    filterText: action.filterText,
  },
});

const onIncrement = (state: any, action: any) => ({
  ...state,
  settings: {
    ...state.settings,
    count: state.settings.count + 1,
  },
});

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FILTER_TEXT":
      return onSetFilterText(state, action);

    case "INCREMENT":
      return onIncrement(state, action);

    default:
      return state;
  }
};

export default reducer;
