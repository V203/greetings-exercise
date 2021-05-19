var namesGreeted = {};
var userName;
var greetingscounter_div = 0;
var counter = 0;

var nameFld = document.querySelector(".enter-name-field");
var counter_div = document.querySelector(".counter_div");
var greetbtn = document.querySelector(".greetBtn");
var output_div = document.querySelector(".output_div");
var clearBtn = document.querySelector(".resetBtn")

var _grt = grt();



if (localStorage["counter"]) {
    counter = Number(localStorage["counter"])
    counter_div.innerHTML = counter
}

greetbtn.addEventListener("click", function () {
    // _grt.chkNames(nameFld.value)
    // counter++
    // localStorage["counter"] = counter
    
    if (namesGreeted[nameFld.value] === undefined) {
        counter++
        namesGreeted[nameFld.value] = 0;
        localStorage["counter"] = counter
        

    }

    var rdioVal = document.querySelector(".rdio:checked");
    _grt.setName(nameFld.value)

    _grt.antiDigit(nameFld.value)
    _grt.antiEmpty(nameFld.value);

    // localStorage =_grt.getGreetCtr();


    counter_div.innerHTML = localStorage.length;
    console.log(localStorage.getItem("counter"))
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




