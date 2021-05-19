function grt() {
    var grtName;
    var namesGreeted = {}
    var grtCounter = 0;

    function setName(_name) {
        if (_name !== "" && _name !== /[0-9]/) {
            grtName = _name;

        }

    }

    function action(checked) {

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

    function chkNames(grtName) {

        if (namesGreeted[grtName] === undefined) {
            grtCounter++
            namesGreeted[grtName] = 0;



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
            return alert("nums not needed")
        }


    }

    function getGreetCtr() {
        return grtCounter
    }

    function getName() {
        return grtName
    }

    function greeted() {
        return namesGreeted
    }

    function cleanName(par_) {
        par_

    }


    return {
        setName,
        action,
        chkNames,
        getGreetCtr,
        getName,
        greeted,
        antiEmpty,
        antiDigit,
        cleanName

    }
}