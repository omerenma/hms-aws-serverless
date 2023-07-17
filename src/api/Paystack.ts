import { HttpStatusCode } from "axios";
import { BodyInit, RequestInit } from "node-fetch";
import fetch from "node-fetch";

class PaystackBaseApi {
  baseUri: string;
  constructor(uri: string) {
    this.baseUri = uri;
  }

  fetch = async (
    uri: string,
    body?: BodyInit,
    args?: Record<string, any>,
    requestInit?: RequestInit
  ) => {
    try {
      const uriObj = new URL(uri, this.baseUri);
      if (args) {
        uriObj.search = new URLSearchParams(args).toString();
      }
      const requestOptions = { ...requestInit, body };
      const response = await fetch(uriObj.toString(), requestOptions);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      if (response.status === HttpStatusCode.NoContent) return;
      return response.json();
    } catch (error: any) {
      console.log(error.message, "errorsss");
      throw new Error(error.message);
    }
  };

  get = (
    uri: string,
    args?: Record<string, any>,
    requestInit?: RequestInit
  ) => {
   return this.fetch(uri, undefined, args, { ...requestInit, method: "GET" });
  };

  post = (
    uri: string,
    body?: Record<string, any>,
    args?: Record<string, any>,
    requestInit?: RequestInit
  ) => {
    const bodyString = body ? JSON.stringify(body) : undefined;
    return this.fetch(uri, bodyString, args, {
      ...requestInit,
      method: "POST",
    });
  };
}

export default PaystackBaseApi;
