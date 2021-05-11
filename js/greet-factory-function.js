function grt(){
let grtName;
let namesGreeted = {}
let grtCounter=0;

function setName(_name){
    grtName = _name;
}

function action(checked){

    if(checked === "japanese"){
      return  "Konnichiwa ,"+grtName;
    }
    else if(checked === "venda"){
       return "Ndaa ,"+grtName
    }
    else if(checked === "latin"){
       return "Salve ,"+grtName
    }
}

function chkNames(){
    if(namesGreeted[grtName]===undefined){
        grtCounter++;
        namesGreeted[grtName] = 0;
        
    }
}

function getGreetCtr(){
    return grtCounter
}


return{
setName,
action,
chkNames,
getGreetCtr

}
}