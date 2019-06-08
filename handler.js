"use strict";

var getAdminApp = require("./admin");
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "hello function update" +
          process.env.MY_API_KEY +
          " " +
          process.env.MY_FUNCTION_ENV_VAR,
        appName: getAdminApp().name
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.helloOne = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello One"
      },
      null
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
