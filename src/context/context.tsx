import React, { createContext, useReducer } from "react";
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions
} from "./reducers";

export type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState: InitialStateType = {
  products: [
    {
      id: 3213,
      name: "hola",
      price: 321321
    },
    {
      id: 3213,
      name: "hola",
      price: 321321
    },
    {
      id: 3213,
      name: "hola",
      price: 321321
    }
  ],
  shoppingCart: 15000
};

console.log(initialState);

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

//creamos el main reducer, que acoplara los reducers

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  console.log(initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
