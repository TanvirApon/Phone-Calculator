
console.log("Js file has been added");
var num = "";
var result = 0 ;
var  operator = "+";

function getValue(inputValue){
    var operators=["+", "-", "*", "/"];
        if (operators.includes(inputValue)) {
            calculation(); 
            operator = inputValue; 
            console.log("get Value function operator: " + operator);
            num = ""; 
            document.getElementById("display").value = parseFloat(result);  
        } 
        else {
            num += inputValue;
            document.getElementById("display").value = num; 
        }
    console.log("Result: " + result);
    // document.getElementById("display").value += inputValue;   
}

function calculation(){
    if (num !== "") {
        if (operator === "+") {
            result += parseFloat(num);
        } 
        else if (operator === "-") {
            result -= parseFloat(num);
        } 
        else if (operator === "*") {
            result *= parseFloat(num);
        } 
        else if (operator === "/") {
            result /= parseFloat(num);
        }
    }
    console.log("Result: " + result);
    document.getElementById("display").value = result;  
}

function calculateFinal(){
    calculation();
    document.getElementById("display").value = result; 
    num = "";  
}

function clearAll(){
    document.getElementById("display").value = ""; 
    num = "";
    result = 0;
    operator = "+";
    console.clear();  
}

function getFloat(){
    if(!num.includes(".")){
        if(num === ""){
            num = "0.";
        }
        else{
            num += ".";
        }
     document.getElementById("display").value = num; 
    }
}

/*
Old Version of code which has some error 
of updating the values of firstNum
*/

/*
console.log("Js file has been added");
let result = 0;

function getValue(inputValue){
    document.getElementById("display").value +=inputValue;
    let str = document.getElementById("display").value;
    check(str);
}

function check(str){
    let operators=['+','-','/','*'];
    let index; 
    let operator;
    for(let i=0;i<str.length;i++){
        if(operators.includes(str[i]) && operators.includes(str[i+1])|| operators.includes(str[0])){
            alert("Error");
            document.getElementById("display").value = "";
        }
        else if(operators.includes(str[i])){
            index=i;
            operator=str[i];
        }
        else{
            //console.log("no expression found");
        }
    }
    let firstNum = parseFloat(str.slice(0,index));
    let secNum = parseFloat(str.slice(index+1));

    console.log("Checked function firstNum "+ firstNum);
    console.log("First Number from check function : "+ firstNum );
    console.log("Second Number from check function : " + secNum);
    console.log(operator);

    calculate(firstNum,secNum,operator);
}

function calculate(firstNum,secNum,operator){
    console.log("Function calculate first line Result: " + firstNum);
    if(operator === '+'){
      console.log("Result from calculator function: "+ result );
      console.log("First Number from calculator function: "+ firstNum );
      console.log("Second Number from calculator function: "+ secNum );
      result = firstNum + secNum; 
      firstNum = result;
    }
    if(operator === '-'){
        console.log("First Number from calculator function: "+ firstNum );
        result = firstNum - secNum;
    }
    if(operator === '*'){
        console.log("First Number from calculator function: "+ firstNum );
        result = firstNum * secNum;
    }
    if(operator === '/'){
        console.log("First Number from calculator function: "+ firstNum );
        result = firstNum / secNum;
    }   
    console.log("Result from calculator function : "+ result); 
}
function clearAll(){
    document.getElementById("display").value = ""; 
    console.clear();  
}
function float(){
  
}
*/