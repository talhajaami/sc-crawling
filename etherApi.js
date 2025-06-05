const axios = require("axios");

const etherApi = axios.create({
  baseURL: "https://scbnledger.com",
  //baseURL : "https://testnet-rpc-seoul.gen.foundation",
  headers: { "content-type": "application/json" },
});

module.exports = { etherApi };
