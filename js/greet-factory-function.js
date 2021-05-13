function grt() {
    let grtName;
    let namesGreeted = {}
    let grtCounter = 0;

    function setName(_name) {
        grtName = _name;
    }

    function action(checked) {

        if (checked === "japanese") {
            return "Konnichiwa ," + grtName;
        }
        else if (checked === "venda") {
            return "Ndaa ," + grtName
        }
        else if (checked === "latin") {
            return "Salve ," + grtName
        }
    }

    function chkNames(grtName) {
        if (namesGreeted[grtName] === undefined) {
            grtCounter
            namesGreeted[grtName] = 0;

        }
    }

    function antiEmpty(par) {
        if (par === "") {
            alert("please enter your name please");
            return output.value = "please enter your name please"
        }

    }

    function antiDigit(par) {
        var par_ = /[0-9]/
        if (par.match(par_)) {
            alert("nums not needed")
        }


    }

    function getGreetCtr() {
        return grtCounter
    }


    return {
        setName,
        action,
        chkNames,
        getGreetCtr,
        antiEmpty,
        antiDigit

    }
}