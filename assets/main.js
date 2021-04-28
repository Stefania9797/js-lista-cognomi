//1. chiedi all’utente il cognome
var userLastName = prompt("Qual è il tuo cognome?")
//2. inseriscilo in un array con altri cognomi
var lastNameList = ["bianchi", "neri", "rossi", "verdi", "gialli"];
lastNameList.push(userLastName);
//3. stampa la lista ordinata alfabeticamente
lastNameList.sort();
console.log(lastNameList);
for (var i = 0; i < lastNameList.length; i++) {
    console.log(lastNameList[i]);
}
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
//var position = (lastNameList.indexOf(userLastName) + 1 );