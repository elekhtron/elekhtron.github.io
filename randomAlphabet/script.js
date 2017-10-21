function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var randomAlphabet = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
    
var table = document.querySelector("table");
for(var i=0; i < char.length; i++){
    table.insertAdjacentHTML('beforeend', "<tr>"+
                            "<td>" + char[i] + "</td>" +
                            "<td>" + randomAlphabet[i] + "</td>");
}