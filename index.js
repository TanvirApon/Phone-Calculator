console.log("Js file has been added");

 

function getValue(Value){
    document.getElementById("display").value = Value;            
}
function getOperator(Operator){
    document.getElementById("display").value = Operator;
}

function clearAll(){
    document.getElementById("display").value = "";   
}