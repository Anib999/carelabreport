import { httpBase } from "./HttpBaseUtil";

/**
 * 
 * @param {do get request} url 
 * @param {as url parameter} params 
 * @returns service data
 */
export const fetch = (url, params) => {
  return httpBase().get(`/${url}`, params);
};

/**
 * 
 * @param {do post request} url 
 * @param {as url parameter} data 
 * @returns success or failed data
 */
export const store = (url, data) => {
  return httpBase().post(`/${url}`, data);
};

export const update = (url, data) => {
  return httpBase().put(`/${url}`, data);
};

export const destroy = (url, id = "") => {
  return httpBase().delete(`/${url}/${id}`);
};
