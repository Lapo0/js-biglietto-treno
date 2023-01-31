/*
//Nome del passeggero
const firstName = prompt('Come ti chiami?');
const userFirstName = document.getElementById('first-name');
userFirstName.innerHTML = 'Sig. ' + firstName;

// Cognome del passeggero
const lastName = prompt('Qual è il tuo cognome?');
const userLastName = document.getElementById('last-name');
userLastName.innerHTML = 'Sig. ' + lastName;
*/

// Quanti chilometri devi percorre
const chilometriDaPercorrere = parseFloat( prompt('Quanti chilometri devi percorrere?'))
console.log ('Devi percorrere:', chilometriDaPercorrere, 'km');
const resultContainer = document.getElementById('chilometri');
resultContainer.innerHTML = 'Devi percorrere: ' + chilometriDaPercorrere + ' km';

// Qual è la tua età
const eta = parseInt(prompt ('Quanti anni hai?'));
console.log ('Hai:', eta, 'anni');

// Prezzo al chilometro
const prezzoAlChilometro = 0.21;
console.log (prezzoAlChilometro, '€/km');

// Prezzo totale per il viaggio
const prezzoTotale = chilometriDaPercorrere * prezzoAlChilometro;
console.log(prezzoTotale.toFixed(2));

    // Sconto minorenne
    if (eta < 18) {
        const prezzoMinorenni = ((prezzoTotale / 100) * 80);
        console.log (prezzoMinorenni.toFixed(2));

        const valoreScontoMinorenni = document.getElementById('valore-sconto');
        valoreScontoMinorenni.innerHTML = (prezzoTotale - prezzoMinorenni).toFixed(2);
        console.log (valoreScontoMinorenni)

        const prezzoFinaleMinorenni = document.getElementById('prezzo-finale');
        prezzoFinaleMinorenni.innerHTML = prezzoMinorenni.toFixed(2);
        console.log (prezzoMinorenni.toFixed(2));

    // Sconto Over 65    
    } else if (eta > 65) {
        const prezzoOver = ((prezzoTotale / 100) * 60);
        console.log (prezzoOver.toFixed(2));

        const valoreScontoOver = document.getElementById('valore-sconto');
        valoreScontoOver.innerHTML = (prezzoTotale - prezzoOver).toFixed(2);
        console.log (valoreScontoOver);

        const prezzoFinaleOver = document.getElementById('prezzo-finale');
        prezzoFinaleOver.innerHTML = prezzoOver.toFixed(2);
        console.log (prezzoOver.toFixed(2));
    }

const prezzoIntero = document.getElementById('prezzo-intero');
prezzoIntero.innerHTML = 'Il prezzo del biglietto è: ' + prezzoTotale.toFixed(2);


