document.write('<form action = "EX3.html" onsubmit = "return valider();"><label for="Status">Status :  </label><input class = "textinput" type="text" name="value1"><label id = "msg-error"></label><input type = "submit"></form>');

function valider(){
    var texte = document.querySelector('.textinput').value;
    console.log(texte);
    if(texte == null || texte.length == 0  ){
        document.querySelector('#msg-error').innerHTML = "Vous devew remplir le champs";
        return false;
    }
    document.querySelector('#msg-error').innerHTML = "";
    return true;
}


