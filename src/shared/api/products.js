import axios from "axios";

export const getProductById = async (id, token) => {
  let req = await axios.get(process.env.API_URL + "/v1/product/" + id);
  let data = await req.data;

  return data;
};

export const getProducts = async () => {
  let req = await axios.get(
    `${process.env.API_URL}/api/${process.env.API_VERSION}/product`
  );

  return await req.data;
};
