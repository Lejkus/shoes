import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers";
import { singleProductReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  productList: productListReducer,
  singleProduct: singleProductReducer,
  cart:cartReducer
});

const initialState = {
  cart:{cartItems: localStorage.getItem('cartItems') ? JSON.parse (localStorage.getItem('cartItems')) : []},
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...[thunk]))
);
export default store;
