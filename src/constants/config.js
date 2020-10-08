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
  try {
    let res = await axios(config);
    res = JSON.parse(JSON.stringify(res.data));
    return res;
  } catch (error) {
    return { status: "error", error: "Can't get Access Token" };
  }
};

export const FETCH_DATA = async url => {
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
    response = { status: "error", error: "Can't getplanets/vehicles data " };
    return response;
  }
};

export const POST_DATA = async (url, data) => {
  const body = JSON.stringify(data);
  const config = {
    method: "post",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    data: body
  };
  try {
    const response = await axios(config);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    console.log("error", error.data);
    return {
      status: "error",
      error: error.response.data.error,
      message: error.message
    };
  }
};
