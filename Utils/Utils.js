import axios from 'axios';

import {
  API_SERVICES_URL,
  API_BASE_URL,
} from '../ApiService/ApiService';

export const PostMethode = async (url, data, token) => {
  let PostUrl = API_SERVICES_URL + url;
  console.log('Api url', PostUrl, data);
  try {
    let response = await axios.post(PostUrl, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        authToken: token,
      },
    });
    console.log('Api resp', response);
    return response.data;
  } catch (error) {
    console.log('22222222222222error', error);
    throw handleError(error);
    return error;
  }
};

export const GetRawurl = async (url, token) => {
  let PostUrl = API_SERVICES_URL + url;
  try {
    let response = await axios.get(PostUrl, {
      headers: {
        'Content-Type': 'application/json',
        authToken: token,
      },
    });
    return response;
  } catch (error) {
    throw handleError(error);
  }
};

const handleError = err => {
  console.log(err);
  let error = err;
  if (err?.response && err?.response?.data?.hasOwnProperty('message'))
    error = err.response.data;
  else if (!err?.hasOwnProperty('message')) error = err?.toJSON();
  return new Error(error.message);
};
