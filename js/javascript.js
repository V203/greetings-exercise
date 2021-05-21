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
    counter = JSON.parse(localStorage["counter"])
    counter_div.innerHTML = counter.length
}
var _grt = grt();

greetbtn.addEventListener("click", function () {
    
    
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
    
    counter_div.innerHTML = Object.keys(counter).length
})

lstBtn.addEventListener("click",function(){
    
    for(var i in localStorage){
        alert(Object.key(localStorage.getItem(i)))
     
    }

})




console.log(namesGreeted["counter"])
