const temp=document.getElementById("temp");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let value;
function convert(){
    if(toFahrenheit.checked){

     value=Number(temp.value);
     value=value * 9 / 5 + 32;
      result.textContent=value.toFixed(1) + " °F";
    }
    else if(toCelsius.checked){
        
      value=Number(temp.value);
      value=(value - 32) * 5 / 9;
       result.textContent=value.toFixed(1) + " °C";

    }
    else{
        result.textContent="Select unit";
    }
}