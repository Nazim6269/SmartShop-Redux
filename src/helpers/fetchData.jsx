import axios from "axios";

export const fetchData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data.products;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
