console.log("iniciado");
const result = document.getElementById("result");
const select = document.getElementById("mails");
const form = document.getElementById("selector");

form.addEventListener("submit",contar);

function contar(event){
    event.preventDeafault();
    try {
        var mail_seleccionar = select.options[select.index].value; 

        console.log(mail_seleccionar);
    
        result.innerHTML =  mail_seleccionar;
        
    } catch (error) {
        console.log(error);
        
    }

}







