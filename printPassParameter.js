var https = require("https");


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



function getAndPrintHTML (options) {

  https.get(options, function(response) {

    response.setEncoding("utf8");

    response.on("data", function (data) {
      console.log(data + "\n");
    });
  });

}

getAndPrintHTML(requestOptions);