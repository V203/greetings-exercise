var namesGreeted = {};
var userName;
var greetingscounter_div = 0;
var counter = 0;

var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn = document.querySelector(".greetBtn");
var output_div = document.querySelector(".output_div");
var clearBtn = document.querySelector(".resetBtn")
var lstBtn = document.querySelector(".listBtn")





if (localStorage["counter"]) {
    counter = Number(localStorage["counter"])
    counter_div.innerHTML = counter
}
var _grt = grt();

greetbtn.addEventListener("click", function () {
    
    alert(_grt.greeted())
    if (namesGreeted[nameFld.value] === undefined ) {
        counter++
        namesGreeted[nameFld.value] = 0;
        localStorage["counter"] = counter
        

    }
    // else if(namesGreeted[nameFld.value] == ""){
    //    return output_div.innerHTML= "Please enter Name in the text field.."
    // }

    var rdioVal = document.querySelector(".rdio:checked");
    _grt.setName(nameFld.value)
    _grt.getName();

    _grt.antiDigit(nameFld.value)
    _grt.antiEmpty(nameFld.value);

    // localStorage =_grt.getGreetCtr();


    counter_div.innerHTML = localStorage.length;
    
    output_div.innerHTML = _grt.action(rdioVal.value)
    counter_div.innerHTML = counter
    // alert(localStorage["name"])


})

clearBtn.addEventListener("click", function () {
    // localStorage.clear()

    localStorage.clear()
    counter = 0
    counter_div.innerHTML = counter
})

lstBtn.addEventListener("click",function(){
    var obs=JSON.parse(namesGreeted);
    for(var i in obs){
        console.log(namesGreeted)
     
    }

})




console.log(namesGreeted["counter"])
