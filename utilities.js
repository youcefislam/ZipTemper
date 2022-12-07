const axios = require("axios");
require("dotenv").config();

module.exports = {
  getWeather: (latitude, longitude) =>
    new Promise((resolve, reject) => {
      const config = {
        method: "get",
        url: `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.AQ_KEY}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          resolve(response.data.data.current.weather);
        })
        .catch(function (error) {
          reject(error);
        });
    }),
};
