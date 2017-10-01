function getFrequency(string) {
    var f = {}; //frequency
    
};

var textArea = document.querySelector("textarea");
var textDiv = document.querySelector("div");

textArea.addEventListener("keyup", function(){
    document.querySelector("#characters").textContent = textArea.value.length;    
});
