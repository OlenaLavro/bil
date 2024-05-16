import { createStore } from "../libs/state-manager/createStore";

const INITIAL_STATE = {
  isSignedIn: null,
  name: null,
  role: null,
  uid: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        name: action.payload.name,
        role: action.payload.role,
        uid: action.payload.uid,
      };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, name: null, role: null, uid: null };
    default:
      return state;
  }
};

export const store = createStore(authReducer);

store.subscribe(() => {
  console.log(store.getState());
});
