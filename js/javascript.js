var namesGreeted={};
var userName;
var greetingscounter_div = 0;


var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn =  document.querySelector(".greetBtn");
var output = document.querySelector(".output_div");

// var greetingscounter_div = 0;



greetbtn.addEventListener("click",function(){
    var _grt = grt();
    var rdioVal = document.querySelector(".rdio:checked");
    _grt.setName(nameFld.value)
    _grt.chkNames()
    // alert(_grt.action(rdioVal.value))
    counter_div.innerHTML = _grt.getGreetCtr();
    output.innerHTML = _grt.action(rdioVal.value)
})

