const axios = require("axios");

const { API_ADAPTER_TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: parseInt(API_ADAPTER_TIMEOUT),
  });
};
