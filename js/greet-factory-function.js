function grt(existingNames) {

    var namesGreeted = existingNames || {}
  //  var grtCounter = 0;



    function action(checked,grtName_) {
        grtName = grtName_.charAt(0).toUpperCase() + grtName_.slice(1);

        if (checked === "japanese") {
            return "Konnichiwa, " + grtName;
        }
        else if (checked === "venda") {
            return "Ndaa, " + grtName
        }
        else if (checked === "latin") {
            return "Salve, " + grtName
        }
        
    }

    function setNames(name) {
        

        if (namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;

        }
    }

    function antiEmpty(par) {
        if (par === "") {
            output_div.innerHTML = "please enter your name please"
        }

    }

    function antiDigit(par) {
        var para = /[0-9]/;
        if (par.match(para)) {
            return par
        }


    }

    function getGreetCtr() {
       
        return Object.keys(namesGreeted).length
    }

    // function getName() {
    //     return grtName
    // }

    function greeted() {
        console.log(namesGreeted + "xcvbnjkl;")
        return namesGreeted
    }

    function cleanName(par_) {
        

    }




    return {
        setNames,
        action,
        getGreetCtr,
        greeted,
        antiEmpty,
        antiDigit,
        cleanName

    }
}