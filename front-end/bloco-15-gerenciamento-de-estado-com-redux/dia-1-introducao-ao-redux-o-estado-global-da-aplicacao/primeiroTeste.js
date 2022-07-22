const Redux = require('redux');

//Action
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
}) 

// Estado inicial do state
const ESTADO_INICIAL = {
  login: false,
  email: '',
};

// Reducer
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
    default:
      return state;
  }
}

//Store
const store = Redux.createStore(reducer);
console.log(store.getState());
store.dispatch(fazerLogin("alguem@email.com"));
console.log(store.getState());