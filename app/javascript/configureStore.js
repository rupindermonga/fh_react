import { createStore } from "redux";
import { AST_SymbolBlockDeclaration } from "terser";

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
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
