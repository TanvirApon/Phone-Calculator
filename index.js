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
        else if(operators.includes(str[i]))
        {
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
    firstNum === result;
    console.log("Function calculate first line Result: " + firstNum);

    if(operator==='+')
    {
      result === firstNum;
      console.log("Result from calculator function: "+ result );
      console.log("First Number from calculator function: "+ firstNum );
      console.log("Second Number from calculator function: "+ secNum );
      result += secNum;   
    }
    if(operator==='-')
    {
        console.log("First Number from calculator function: "+ firstNum );
        result -= secNum;
    }
    if(operator==='*')
    {
        console.log("First Number from calculator function: "+ firstNum );
        result *= secNum;
    }
    if(operator==='/')
    {
        console.log("First Number from calculator function: "+ firstNum );
        result /= secNum;
    }
    console.log("Result from calculator function : "+ result);  
   
}

function clearAll(){
    document.getElementById("display").value = ""; 
    console.clear();  
}

function float(){
  

}