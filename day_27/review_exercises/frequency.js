var wordLength = function(sentence) {
  var words = sentence.split(" ");
  var myObject = {};
  // var i = 0;
  // while (i < words.length) {
  //   myObject[words[i]] = words[i].length;
  //   i++;
  // }
  for(var i = 0; i < words.length; i++) {
    myObject[words[i]] = words[i].length;
  }
  return myObject;
}

console.log(wordLength("Hello world how is it going"));
