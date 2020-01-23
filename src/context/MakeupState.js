import React, { useReducer } from "react";
import MakeupContext from "./makeupContext";
import MakeupReducer from "./makeupReducer";
import axios from "axios";
import {
  SEARCH_PRODUCTS,
  SET_LOADING,
  CLEAR_PRODUCTS,
  SET_ALERT,
  TOGGLE_ALERT
} from "./types";

const MakeupState = props => {
  const initialState = {
    products: [],
    product: {},
    alert: false,
    alertMsg: "",
    alertType: "",
    loading: false
  };

  const [state, dispatch] = useReducer(MakeupReducer, initialState);

  // Search Products
  const searchProducts = async (brand, type, min, max) => {
    let searchQuery = "?";

    if (brand !== "") {
      searchQuery += `brand=${brand}&`;
    }
    if (type !== "") {
      searchQuery += `product_type=${type}&`;
    }
    if (min !== 0) {
      searchQuery += `price_greater_than=${min}&`;
    }
    if (max !== 100000) {
      searchQuery += `price_less_than=${max}&`;
    }
    if (searchQuery.charAt(searchQuery.length - 1) === "&") {
      searchQuery = searchQuery.slice(0, searchQuery.length - 1);
    }

    if (searchQuery.length === 1) {
      setAlert("Enter brand, product type, min or max price.", "blank-input");
    } else {
      setLoading();

      const res = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json${searchQuery}`
      );

      console.log(res.data);
      if (res.data.length > 0) {
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: res.data
        });
      } else {
        setAlert("Products you'are looking for are not found.", "not-found");
      }
    }
  };

  // Clear Products
  const clearProducts = () => {
    dispatch({
      type: CLEAR_PRODUCTS
    });
  };

  // Set Alert
  const setAlert = (msg, type) => {
    setTimeout(() => {
      dispatch({
        type: SET_ALERT,
        payload: { msg: "", type: "" }
      });
    }, 5000);

    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
  };

  // Toggle Alert
  const toggleAlert = () => {
    dispatch({
      type: TOGGLE_ALERT
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <MakeupContext.Provider
      value={{
        products: state.products,
        product: state.product,
        alert: state.alert,
        alertMsg: state.alertMsg,
        alertType: state.alertType,
        loading: state.loading,
        searchProducts,
        clearProducts,
        setAlert,
        toggleAlert
      }}
    >
      {props.children}
    </MakeupContext.Provider>
  );
};

export default MakeupState;
