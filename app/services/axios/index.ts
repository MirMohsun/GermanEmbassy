import Axios from "axios";
import {LINKS} from "../../config";
import {store} from "../../modules/redux/store";
import {AppStateActions} from "../../modules/redux/appStateSlice";
import {AuthStateActions} from "../../modules/redux/authStateSlice";
import {IAsyncStorage} from "../asyncStorage";
import {STORAGE_KEYS} from "../asyncStorage/storageKeys";

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

type AxiosPost = Omit<AxiosOptions, "params"> & {data: any};
type AxiosGet = Omit<AxiosOptions, "data" | "pureData">;
type AxiosPut = Omit<AxiosOptions, "params" | "pureData">;
type AxiosDelete = Omit<AxiosOptions, "data">;
const state = store.getState();

Axios.interceptors.request.use(
    async function (response) {
        const token = await IAsyncStorage.get(STORAGE_KEYS.token);
        const isGuest = state.app.isGuest;
        const isInterceptorsActive = state.app.isInterceptorsActive;

        if (isInterceptorsActive && !isGuest && !token) {
            store.dispatch(AuthStateActions._setIsAuthorized(false));
        }
        store.dispatch(AppStateActions._setIsLoading(true));
        return response;
    },
    function (error) {
        store.dispatch(AppStateActions._setIsLoading(false));
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    function (response) {
        store.dispatch(AppStateActions._setIsLoading(false));
        return response;
    },
    function (error) {
        store.dispatch(AppStateActions._setIsLoading(false));
        return Promise.reject(error);
    }
);

const post = async ({
    url,
    sender,
    data,
    headers,
    timeoutMS,
    pureData,
    isNoToken
}: AxiosPost): Promise<any> => {
    const token = await IAsyncStorage.get(STORAGE_KEYS.token);

    try {
        store.dispatch(AppStateActions._setError(""));
        const config: any = {
            url: LINKS.BASE_URL + url,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            validateStatus: () => true,
            timeout: timeoutMS || 30000
        };
        !isNoToken &&
            token &&
            (config.headers = {
                ...config.headers,
                ...headers,
                Authorization: `Bearer ${token}`
            });
        headers && (config.headers = {...config.headers, ...headers});
        if (data) {
            pureData
                ? (config.data = data)
                : (config.data = JSON.stringify(data));
        }
        const response = await Axios(config);
        if (response?.status >= 300) {
            store.dispatch(
                AppStateActions._setError(response?.data[0]?.description)
            );
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
    isNoToken
}: AxiosGet): Promise<any> => {
    const token = await IAsyncStorage.get(STORAGE_KEYS.token);

    try {
        store.dispatch(AppStateActions._setError(""));
        const config: any = {
            url: LINKS.BASE_URL + url,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            validateStatus: () => true,
            timeout: timeoutMS || 30000
        };
        !isNoToken &&
            token &&
            (config.headers = {
                ...config.headers,
                ...headers,
                Authorization: `Bearer ${token}`
            });
        headers && (config.headers = headers);
        params && (config.params = params);
        const response = await Axios(config);

        if (response?.status >= 300) {
            store.dispatch(AppStateActions._setError(response?.data?.error));
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
    isNoToken
}: AxiosPut): Promise<any> => {
    const token = state.auth.token;

    try {
        store.dispatch(AppStateActions._setError(""));
        const config: any = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            url: LINKS.BASE_URL + url,
            timeout: timeoutMS || 30000
        };

        !isNoToken &&
            token &&
            (config.headers = {
                ...config.headers,
                ...headers,
                Authorization: `Bearer ${token}`
            });
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
    pureData
}: AxiosDelete): Promise<any> => {
    const token = state.auth.token;

    try {
        store.dispatch(AppStateActions._setError(""));
        const config: any = {
            url: LINKS.BASE_URL + url,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            validateStatus: () => true,
            timeout: timeoutMS || 30000
        };
        token &&
            (config.headers = {
                ...config.headers,
                ...headers,
                Authorization: `Bearer ${token}`
            });
        headers && (config.headers = {...config.headers, ...headers});
        params && (config.params = JSON.stringify(params));
        const response = await Axios(config);
        if (response?.status >= 300) {
            store.dispatch(AppStateActions._setError(response?.data?.error));
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
    deleteMethod
};
