import { createStore, applyMiddleware } from "redux";
import { AST_SymbolBlockDeclaration } from "terser";
import thunk from "redux-thunk";

const initialState = {
  houses: [
    {
      latitude: "87",
      longitude: "62",
      address: "ASpmkf"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_HOUSES_SUCCESS":
      return { houses: action.json.houses };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
