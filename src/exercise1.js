var removeNegativeValue = function(input) {
  var input = []
  var output = []
  for(i=0;i<input.length;i++){
    if (input[i]>=0){
      output.push(input[i])
    }
    else {}
  }
  return output;
}



/*var removeNegativeValue = function(input) {
  var input = [34, -5, 9, 18, 0, -7, 32]
  var output = []
  for(i=0;i<input.length;i++){
    if (input[i]>=0){
      output.push(input[i])
    }
    else {}
  }
  return output;
}*/

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
