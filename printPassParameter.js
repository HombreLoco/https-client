var https = require("https");


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



function getAndPrintHTML (options) {

  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    var buffered = "";
    response.on("data", function (data) {
      buffered += data;
      console.log(buffered);
    });

    response.on('end', function() {
    });


  });

}

getAndPrintHTML(requestOptions);