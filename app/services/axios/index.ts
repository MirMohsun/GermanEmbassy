import Axios from "axios";
import { Links } from "../../config";
import { store } from "../../modules/redux/store";

interface AxiosOptions {
  url: string;
  sender: string;
  data?: any;
  headers?: any;
  timeoutMS?: number;
  pureData?: boolean;
  params?: any;
  isNoToken?: boolean;
}

type AxiosPost = Omit<AxiosOptions, "params"> & { data: any };
type AxiosGet = Omit<AxiosOptions, "data" | "pureData">;
type AxiosPut = Omit<AxiosOptions, "params" | "pureData">;
type AxiosDelete = Omit<AxiosOptions, "data">;
const state = store.getState();

const post = async ({
  url,
  sender,
  data,
  headers,
  timeoutMS,
  pureData,
  isNoToken,
}: AxiosPost): Promise<any> => {
  try {
    const config: any = {
      url: Links.mainUrl + url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: () => true,
      timeout: timeoutMS || 30000,
    };
    !isNoToken &&
      token &&
      (config.headers = {
        ...config.headers,
        ...headers,
        Authorization: `Bearer ${token}`,
      });
    headers && (config.headers = { ...config.headers, ...headers });
    if (data) {
      pureData ? (config.data = data) : (config.data = JSON.stringify(data));
    }
    const response = await Axios(config);
    if (response?.status >= 300) {
    }
    return pureData ? response : response.data;
  } catch (error) {
    console.warn(`${sender}: ${error}`);
    return error;
  }
};

const get = async ({
  url,
  sender,
  params,
  headers,
  timeoutMS,
}: AxiosGet): Promise<any> => {
  try {
    const config: any = {
      url: Links.mainUrl + url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: () => true,
      timeout: timeoutMS || 30000,
    };

    headers && (config.headers = headers);
    params && (config.params = params);
    const response = await Axios(config);

    if (response?.status >= 300) {
      console.warn("Error: ", sender, response?.data);
    }
    return response.data;
  } catch (error) {
    console.warn(`${sender}: ${error}`);
  }
};

const put = async ({
  url,
  sender,
  data,
  headers,
  timeoutMS,
  isNoToken,
}: AxiosPut): Promise<any> => {
  try {
    const config: any = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      url: Links.mainUrl + url,
      timeout: timeoutMS || 30000,
    };

    data && (config.data = JSON.stringify(data));
    const response = await Axios(config);
    return response;
  } catch (error) {
    console.warn(`${sender}: ${error}`);
    return error;
  }
};

const deleteMethod = async ({
  url,
  sender,
  params,
  headers,
  timeoutMS,
  pureData,
}: AxiosDelete): Promise<any> => {
  try {
    const config: any = {
      url: Links.mainUrl + url,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: () => true,
      timeout: timeoutMS || 30000,
    };

    headers && (config.headers = { ...config.headers, ...headers });
    params && (config.params = JSON.stringify(params));
    const response = await Axios(config);
    if (response?.status >= 300) {
      console.warn("Error: ", response?.data);
    }
    return pureData ? response : response.data;
  } catch (error) {
    console.warn(`${sender}: ${error}`);
    return error;
  }
};

export const IAxios = {
  post,
  get,
  put,
  deleteMethod,
};
