// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // create an output array to push matching nodes up to
  var outputArr = [];
  // iterate over the body of the HTML document
  document.body.each('html', function() {
    // push any nodes that match "className" to the output array
  })
  // return output array
};
