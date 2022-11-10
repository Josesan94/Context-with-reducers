import { ProductType } from "./context";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Obtain = "GET_PRODUCTS",
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT"
}

//Product

type ProductPayload = {
  [Types.Obtain]: [
    {
      id: number;
      name: string;
      price: number;
    }
  ];
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: any,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    // case "GET_PRODUCTS":
    //   return [...state,
    //     {
    //       id: action.payload.id,
    //       name: action.payload.name,
    //       price: action.payload.price
    //     }
    //   ]

    case "CREATE_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ];
    case "DELETE_PRODUCT":
      return [
        ...state.filter(
          (product: ProductType) => product.id !== action.payload.id
        )
      ];
    default:
      return state;
  }
};

//shopping cart

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state + 1;

    default:
      return state;
  }
};
