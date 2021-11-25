
const numKm = parseFloat(prompt('Quanti km devi percorrere?'));
const age = parseInt(prompt("Inserisci l'eta"));


if (!(isNaN(numKm)) && !(isNaN(age))) {
  
  let priceForKm = 0.21 * numKm;
  
  if (age < 18) {
    priceForKm = priceForKm - (priceForKm * 20 / 100);
 
  } else if (age > 65) {
    priceForKm = priceForKm - (priceForKm * 40 / 100);
  }

  document.getElementById('finalPrice').innerHTML = `Il prezzo del tuo biglietto ${priceForKm.toFixed(2)} €`;
}


