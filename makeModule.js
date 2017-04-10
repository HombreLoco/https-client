var https = require("https");


// function printHTML (html) {
//   console.log(html);
// }

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };



module.exports = function getHTML (options, pHTML) {

  https.get(options, function(response) {

    response.setEncoding("utf8");

    var buffered = "";
    response.on("data", function (data) {
      buffered += data;
      pHTML(buffered);
    });

    response.on('end', function() {
    });
  });
}
