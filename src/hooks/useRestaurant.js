import React, { useState,} from "react";
import yelp from "../api/yelp";

export default (initialTerm = "Burger") => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get(`/${id}`);
      setResult({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
    return console.log("--------",results)
  };

  return [result, searchRestaurant];
};
