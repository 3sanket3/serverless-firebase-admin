"use strict";

var getAdminApp = require("./admin");

module.exports.helloAnotherFile = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from Another file",
        appName: getAdminApp().name
      },
      null
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
