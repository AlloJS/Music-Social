/*
----------------------------------------
DICHIARO LE VARIABILI
----------------------------------------
*/
var creatAccount = document.getElementById('new-account');
var register = document.getElementById('register');
var nome = document.getElementById('nome');
var cognome = document.getElementById('cognome');
var email = document.getElementById('email');
var birthday = document.getElementById('data');
var m = document.getElementById('m');
var f = document.getElementById('f');
var register = document.querySelectorAll('.input-register');
var alertForm = document.getElementById('alert');
//alertForm.style.color ='red';
var submit = document.getElementById('submit');


/*
---------------------------------------
COSTRUISCO LE FUNZIONI
---------------------------------------
*/

function createAccount(){

    window.open('newaccount.html');
}
    

function newAccount(){

    if (nome.value === "") {
        nome.classList.add('error');
        alertForm.textContent = 'Compila il form in tutte le sue parti';

    } else {
        nome.classList.remove('error');
       
    }

     if(cognome.value === "") {

        cognome.classList.add('error');
        alertForm.textContent = 'Compila il form in tutte le sue parti';
       
    } else {
        cognome.classList.remove('error');
        
    }
     if(email.value === "") {
        
        email.classList.add('error');
        alertForm.textContent = 'Compila il form in tutte le sue parti';
    

    } else {
        email.classList.remove('error');
        
    }
     if(birthday.value === "" ) {
        
        birthday.classList.add('error');
        alertForm.textContent = 'Compila il form in tutte le sue parti';
       

    } else {
        birthday.classList.remove('error');
       
    }
    if (nome.value !== "" && cognome.value !== "" && email.value !== "" && birthday.value !== "") {

        alert('Registrazione effettuata con successo! Controlla la tua e-mail');
        
        window.open('index.html');

    }

}
console.log(submit);
submit.addEventListener('click', function(e){

    e.preventDefault()
    window.open('home.html');

})

