var namesGreeted={};
var userName;
var greetingscounter_div = 0;


var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn =  document.querySelector(".greetBtn");
var output_div = document.querySelector(".output_div");

// var greetingscounter_div = 0;

var _grt = grt();

greetbtn.addEventListener("click",function(){
    
    var rdioVal = document.querySelector(".rdio:checked");
    _grt.setName(nameFld.value)
    _grt.chkNames(nameFld.value)
    _grt.antiDigit(nameFld.value)
    _grt.antiEmpty(nameFld.value);
    
    
    
    
    // alert(_grt.greeted())
    counter_div.innerHTML = _grt.getGreetCtr();
    output.innerHTML = _grt.action(rdioVal.value)
})




