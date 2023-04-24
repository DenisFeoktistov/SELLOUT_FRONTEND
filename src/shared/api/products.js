import axios from "axios";

exports.getProductById = async (id, token) => {
  let req = await axios.get(process.env.APi_URL + "/v1/product/" + id);
  let data = await req.data;

  return data;
};
