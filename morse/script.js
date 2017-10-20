var charToMorse = [];
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var morse = ".-|-...|-.-.|-..|.|..-.|--.|....|..|.---|-.-|.-..|--|-.|---|.--.|--.-|.-.|...|-|..-|...-|.--|-..-|-.--|--..".split("|");
var table = document.querySelector("table");
for(var i=0; i < char.length; i++){
    charToMorse.push([char[i], morse[i]]);
    table.insertAdjacentHTML('beforeend', "<tr>"+
                            "<td>" + char[i] + "</td>" +
                            "<td>" + morse[i] + "</td>");
}
//console.log(char);
//console.log(morse);
//console.log(charToMorse);
