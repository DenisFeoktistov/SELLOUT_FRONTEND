import { apiConfig } from "@/shared/configs/api.config";
import axios from "axios";

export const getProducts = async () => {
  let req = await axios.get(
    `${apiConfig.API_URL}/api/${apiConfig.API_VERSION}/product`
  );

  let res = await req.data;

  return res;
};
