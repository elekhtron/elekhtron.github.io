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
    }
    var table = document.querySelector(".logic-stuff");
    var submitButton = document.querySelector("#enteredNum");
    var uNum = document.querySelector("input[type=\"number\"]");
    var truthTable = [];
    
    table.innerHTML = "";
    submitButton.addEventListener("click", function(){
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
        
        document.querySelector("table tr").insertAdjacentHTML("beforeend","<th style=\"font-size: 8px; width: 60px;\">" + ("~" + recursive_str_and(allvar)) + "</th>");
        document.querySelector("table tr").insertAdjacentHTML("beforeend","<th style=\"font-size: 8px; width: 60px;\">" + (build_or_str(allvar)) + "</th>");
        document.querySelector("table tr").insertAdjacentHTML("beforeend","<th style=\"font-size: 8px; width: 60px; \">" + (("(~" + recursive_str_and(allvar))+ " ⇔ "+("("+build_or_str(allvar)+")")) + "</th>");
        
        
        for(var m=0; m < Math.pow(2, mainNum); m++){
            somestr = "";
            and_count = 0;
            or_count = 0;
            for(var n=0; n < mainNum; n++){
                somestr += "<td>" + (truthTable[n][1][m] * 1) +"</td>";
                if(truthTable[n][1][m] === false){
                    and_count = 1;
                    or_count = 1;
                } 
            }
            somestr += "<td>" + and_count + "</td>";
            somestr += "<td>" + or_count + "</td>";
            somestr += "<td>1</td>";
            table.insertAdjacentHTML("beforeend", "<tr>" + somestr + "</tr>");
        }
        console.log(truthTable);
    });
}