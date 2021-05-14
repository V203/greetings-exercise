var namesGreeted={};
var userName;
var greetingscounter_div = 0;


var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn =  document.querySelector(".greetBtn");
var output_div = document.querySelector(".output_div");

var _grt = grt();

greetbtn.addEventListener("click",function(){
    
    var rdioVal = document.querySelector(".rdio:checked");
    _grt.setName(nameFld.value)
    _grt.chkNames(nameFld.value)
    _grt.antiDigit(nameFld.value)
    _grt.antiEmpty(nameFld.value);
     
    localStorage =_grt.getGreetCtr();
   

    counter_div.innerHTML = localStorage.length;
    console.log(localStorage.length)
    output_div.innerHTML = _grt.action(rdioVal.value)
    if(localStorage["counter"]){
        counter = localStorage["counter"]
        counter_div.innerHTML=counter


    }
})




