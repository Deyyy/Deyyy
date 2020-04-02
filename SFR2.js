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
    resultA1.textContent = "1. Kfz: " + nameFieldA1;
    //alert(nameFieldA1);
    resultA2.textContent = "KH: " + nameFieldA2 + " €";
    //alert(nameFieldA2);
    resultA3.textContent = "TK: " + nameFieldA3 + " €";
    //alert(nameFieldA3);
    resultA4.textContent = "VK: " + nameFieldA4 + " €";
    //alert(nameFieldA4);
    resultA5.textContent = "SF-Rabatt: " + nameFieldA5 + " %";
    //alert(nameFieldA5);
    resultA6.textContent = "SF-Rabatt: " + nameFieldA6 + " %";
    //alert(nameFieldA6);
    resultB1.textContent = "2. Kfz: " + nameFieldB1;
    //alert(nameFieldB1);
    resultB2.textContent = "KH: " + nameFieldB2 + " €";
    //alert(nameFieldB2);
    resultB3.textContent = "TK: " + nameFieldB3 + " €";
    //alert(nameFieldB3);
    resultB4.textContent = "VK: " + nameFieldB4 + " €";
    //alert(nameFieldB4);
    resultB5.textContent = "SF-Rabatt: " + nameFieldB5 + " %";
    //alert(nameFieldB5);
    resultB6.textContent = "SF-Rabatt: " + nameFieldB6 + " %";
    //alert(nameFieldB6);
}
}




function calculateit() {

  document.getElementById("ursprünglich").innerHTML = "Gesamtbeitrag mit ursprünglichen SF-Klassen:"
  document.getElementById("andere").innerHTML = "Gesamtbeitrag mit getauschten SF-Klassen:"
  
  num0 = document.getElementById("nameFieldA2").value
  num1 = document.getElementById("nameFieldA3").value;
  num2 = document.getElementById("nameFieldA4").value
  num3 = document.getElementById("nameFieldA5").value;
  num4 = document.getElementById("nameFieldA6").value;
  num5 = document.getElementById("nameFieldB2").value
  num6 = document.getElementById("nameFieldB3").value;
  num7 = document.getElementById("nameFieldB4").value
  num8 = document.getElementById("nameFieldB5").value;
  num9 = document.getElementById("nameFieldB6").value;

  document.getElementById("finalresult1").innerHTML = (Number(num0) / 100 * Number(num3) + Number(num1) + Number(num2) / 100 * Number(num4) + Number(num5) / 100 * Number(num8) + Number(num6) + Number(num7) / 100 * Number(num9)).toFixed(2) + " €";

  document.getElementById("finalresult2").innerHTML = (Number(num0) / 100 * Number(num8) + Number(num1) + Number(num2) / 100 * Number(num9) + Number(num5) / 100 * Number(num3) + Number(num6) + Number(num7) / 100 * Number(num4)).toFixed(2) + " €";
}





var subButton = document.getElementById('subButton');
subButton.addEventListener('click', myFunction, false);

var subButton2 = document.getElementById('subButton2');
subButton2.addEventListener('click', calculateit, false); 
