window.onload = function(){
    {
        function generateArray(num, max){
            var result = [];
            var alt = Math.pow(2, max - num); //the number of steps it takes to alternate
            var col = Math.pow(2, max); //the number of colums needed
            var truth = false ; //will alternate
             for(var k=0; k < col; k++){
                if(k % alt === 0){
                    truth = !truth;
                }
                result.push(truth);
             }
            return result;
        }
        function str_and(str1, str2){
            return ("(" + str1 + "^" + str2 + ")");
        }
        
        
        function recursive_str_and(list){
            if(list.length === 1){
                return list;
            } else{
                return str_and(list[0], recursive_str_and(list.slice(1, list.length)));
          }
        }
        
        function build_or_str(list){
            var or_str = "";
            for(var x=0; x<list.length; x++){
                if(x === list.length - 1){
                    or_str += ("(~" + list[x] + ")");
                } else {
                    or_str += ("(~" + list[x] + ")ν");
                }
            }
            return or_str;
        }
        
        function a(condition1, condition2){
            return condition1 && condition2; 
        }
        
        function o(condition1, condition2){
            return condition || condition2;
        }
        
        function n(condition){
            return !condition;
        }
    }
    
    var table = document.querySelector(".logic-stuff");
    var submitButton = document.querySelector("#enteredNum");
    var uNum = document.querySelector("input[type=\"number\"]");
    var truthTable = [];
    var expressionForm = document.querySelector(".another-thing");
    var customExp = [];
    var expval = "";
    
    table.innerHTML = "";
    expressionForm.style.display = "none";
    
    submitButton.addEventListener("click", function(){
        customExp = [];
        expressionForm.style.display = "block";
        
        truthTable = [];
        var mainNum = parseInt(uNum.value);
        var allvar = [];
        var somestr = "";
        var and_count, or_count;
        console.log(mainNum);
        table.innerHTML = "<tr></tr>";
        
        for(var i=0; i < mainNum; i++){
            document.querySelector("table tr").insertAdjacentHTML("beforeend","<th>" + (i+1) + "</th>");
            truthTable.push([i+1, generateArray(i+1, mainNum)]);
            allvar.push(i+1);
        }    
        
        for(var m=0; m < Math.pow(2, mainNum); m++){
            somestr = "";
            for(var n=0; n < mainNum; n++){
                somestr += "<td>" + (truthTable[n][1][m] * 1) +"</td>";
            }
            table.insertAdjacentHTML("beforeend", "<tr>" + somestr + "</tr>");
        }
        console.log(truthTable);
    });
    
    document.querySelector(".another-thing input[type=\"submit\"]").addEventListener("click", function(){
        expval = document.querySelector(".another-thing input[type=\"text\"]").value;
        console.log(expval);
        table.querySelector("tr:nth-child(1)").insertAdjacentHTML("beforeend", "<th>" + expval + "</th>");
    });
}