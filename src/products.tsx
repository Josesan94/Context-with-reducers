import React, { useContext } from "react";
import { AppContext, ProductType } from "./context/context";
import { Types } from "./context/reducers";

export const Products = () => {
  const { state, dispatch } = useContext(AppContext);

  console.log("products", state.products);

  return (
    <div>
      list of products:
      {state.products.map((product) => {
        return (
          <ul>
            <li>id:{product.id}</li>
            <li>name:{product.name}</li>
            <li>price:{product.price}</li>
          </ul>
        );
      })}
      {/* <button onClick={() => dispatch({ type: Types.Obtain })}>
        products:{state.products}
      </button> */}
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: Types.Create,
            payload: {
              id: 123345,
              name: "producto nuevo",
              price: 1000
            }
          });
        }}
      >
        Agregar producto
      </button>
    </div>
  );
};
