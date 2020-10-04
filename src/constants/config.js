import axios from "axios";
import { accessTokenAPI } from "./api";
import "regenerator-runtime/runtime";

export const FETCH_ACCESS_TOKEN = async () => {
  const config = {
    method: "post",
    url: accessTokenAPI,
    headers: {
      Accept: "application/json"
    }
  };
  let response;

  try {
    response = await axios(config);
    return JSON.stringify(response.data);
  } catch (error) {
    response = { token: "ERROR" };
    return response;
  }
};

export const FETCH_DATA = async (url) => {
  const config = {
    method: "get",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  let response;
  try {
    response = await axios(config);
    return JSON.stringify(response.data);
  } catch (error) {
    response = { token: "ERROR" };
    return response;
  }
};
