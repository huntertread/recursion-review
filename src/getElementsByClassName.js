// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, currentNode) {
  // create an output array to push matching nodes up to
  var outputArr = [];
  // define the currentNode parameter
  if (currentNode === undefined) {
    currentNode = document.body;
  } else {
    currentNode = currentNode;
  }
  // if the current node has a classlist and that classList includes the class name we are looking for
  if (currentNode.classList && currentNode.classList.contains(className)) {
    // push the node to the output array
    outputArr.push(currentNode);
  }
  // if the current node has children
  if (currentNode.childNodes) {
    for (var i = 0; i < currentNode.childNodes.length; i++) {
      // recurse getElementsByClassName on the children
      outputArr = outputArr.concat(getElementsByClassName(className, currentNode.childNodes[i]));
    }
  }
  // return output array
  return outputArr;
};
