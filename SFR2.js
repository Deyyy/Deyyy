function myFunction() {
var nameFieldA1 = document.getElementById('nameFieldA1').value;
var resultA1 = document.getElementById('resultA1');

var nameFieldA2 = document.getElementById('nameFieldA2').value;
var resultA2 = document.getElementById('resultA2');

var nameFieldA3 = document.getElementById('nameFieldA3').value;
var resultA3 = document.getElementById('resultA3');

var nameFieldA4 = document.getElementById('nameFieldA4').value;
var resultA4 = document.getElementById('resultA4');

var nameFieldA5 = document.getElementById('nameFieldA5').value;
var resultA5 = document.getElementById('resultA5');

var nameFieldA6 = document.getElementById('nameFieldA6').value;
var resultA6 = document.getElementById('resultA6');

var nameFieldB1 = document.getElementById('nameFieldB1').value;
var resultB1 = document.getElementById('resultB1');

var nameFieldB2 = document.getElementById('nameFieldB2').value;
var resultB2 = document.getElementById('resultB2');

var nameFieldB3 = document.getElementById('nameFieldB3').value;
var resultB3 = document.getElementById('resultB3');

var nameFieldB4 = document.getElementById('nameFieldB4').value;
var resultB4 = document.getElementById('resultB4');

var nameFieldB5 = document.getElementById('nameFieldB5').value;
var resultB5 = document.getElementById('resultB5');

var nameFieldB6 = document.getElementById('nameFieldB6').value;
var resultB6 = document.getElementById('resultB6');

if (nameFieldB1.length < 3) {
    resultB1.textContent = 'Falsches Kennzeichen';
    //alert('Falsches Kennzeichen');
} else {
    resultA1.textContent = '1. Kennzeichen: ' + nameFieldA1;
    //alert(nameFieldA1);
    resultA2.textContent = '1. Beitrag Haftpflicht: ' + nameFieldA2 + "€";
    //alert(nameFieldA2);
    resultA3.textContent = '1. Beitrag Teilkasko: ' + nameFieldA3 + "€";
    //alert(nameFieldA3);
    resultA4.textContent = '1. Beitrag Vollkasko: ' + nameFieldA4 + "€";
    //alert(nameFieldA4);
    resultA5.textContent = '1. SF-Klasse Haftpflicht: ' + "SF " + nameFieldA5;
    //alert(nameFieldA5);
    resultA6.textContent = '1. SF-Klasse Vollkasko: ' + "SF " + nameFieldA6;
    //alert(nameFieldA6);
    resultB1.textContent = '2. Kennzeichen: ' + nameFieldB1;
    //alert(nameFieldB1);
    resultB2.textContent = '2. Beitrag Haftpflicht: ' + nameFieldB2 + "€";
    //alert(nameFieldB2);
    resultB3.textContent = '2. Beitrag Teilkasko: ' + nameFieldB3 + "€";
    //alert(nameFieldB3);
    resultB4.textContent = '2. Beitrag Vollkasko: ' + nameFieldB4 + "€";
    //alert(nameFieldB4);
    resultB5.textContent = '2. SF-Klasse Haftpflicht: ' + "SF " + nameFieldB5;
    //alert(nameFieldB5);
    resultB6.textContent = '2. SF-Klasse Vollkasko: ' + "SF " + nameFieldB6;
    //alert(nameFieldB6);
   
}
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', myFunction, false);
subButton.addEcentListener('click', calculate, false);   
