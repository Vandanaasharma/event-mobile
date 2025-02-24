/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { IApiResponse } from "models/IApiResponse";
import APIConstants from "core/ApiConstants";
import StatusCode from "core/StatusCode";
import LocalString from "shared/localization/localEnums";

const token = () => {
  return "";
};
const instance: AxiosInstance = axios.create({
  baseURL: APIConstants.BaseURL,
  timeout: APIConstants.axiosCallTimeout,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});
interface RetryConfig extends AxiosRequestConfig {
  retry: number;
  retryDelay: number;
}

const globalConfig: RetryConfig = {
  retry: APIConstants.axiosCallRetryCount,
  retryDelay: APIConstants.axiosCallRetryTimeout,
};

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config } = error;

    if (!config || !config.retry) {
      return Promise.reject(error);
    }
    config.retry -= 1;
    const delayRetryRequest = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, config.retryDelay);
    });
    return delayRetryRequest.then(() => instance(config));
  },
);
export function sendGetRequest<T>(url: string) {
  instance.defaults.headers.common.Authorization = token();
  return instance
    .get(url, globalConfig)
    .then((response: any) => {
      if (response.status === StatusCode.UnprocessableEntity) {
        return handleError<T>(response);
      } else if (response.status === StatusCode.SuccessOK) {
        return handleResponse<T>(response);
      } else throw new Error(LocalString.serverError);
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error(LocalString.serverError);
      }
      return handleError<T>(err.response.data);
    })
    .finally(() => {});
}

export function sendPostRequest<T>(url: string, body: any): any {
  instance.defaults.headers.common.Authorization = token();
  return instance
    .post(url, body, globalConfig)
    .then((response: any) => {
      return handleResponse<T>(response.data);
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error("something went wrong");
      }
      return handleError<T>(err.response.data);
    })
    .finally(() => {});
}

export function sendPutRequest<T>(url: string, body: any): any {
  instance.defaults.headers.common.Authorization = token();
  return instance
    .put(url, body, globalConfig)
    .then((response: any) => handleResponse<T>(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error("something went wrong");
      }
      return handleError<T>(err.response.data);
    })
    .finally(() => {});
}

export function sendPatchRequest<T>(url: string): any {
  instance.defaults.headers.common.Authorization = token();
  return instance
    .patch(url, globalConfig)
    .then((response: any) => handleResponse<T>(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error("something went wrong");
      }
      return handleError<T>(err.response.data);
    })
    .finally(() => {});
}

export function deleteRequest<T>(url: string): any {
  return instance
    .delete(url, globalConfig)
    .then((response: any) => handleResponse<T>(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error("something went wrong");
      }
      return handleError<T>(err.response.data);
    })
    .finally(() => {});
}

function handleResponse<T>(data: T) {
  const res: IApiResponse<T> = {
    isSuccess: true,
    data,
  };
  return res;
}

function handleError<T>(data: any) {
  const res: IApiResponse<T> = {
    isSuccess: false,
    errors: data,
  };
  return res;
}
