import axios from "axios";
import { toast } from "react-hot-toast";

import {
  getErrorMessageAndCode,
  getUrlShortenQuery,
} from "../../utils/helper";

export const getStoreProducts = async (query: string) => {
  try {
    const response = await axios.get(getUrlShortenQuery());
    return response;
  } catch (error) {
    toast.error(getErrorMessageAndCode(error).message);
  }
};
