// Quanti chilometri devi percorre
const chilometriDaPercorrere = parseFloat( prompt('Quanti chilometri devi percorrere?'))

console.log ('Devi percorrere:', chilometriDaPercorrere, 'km')

// Qual è la tua età
const eta = parseInt(prompt ('Quanti anni hai?'))

console.log ('Hai:', eta, 'anni')

// Prezzo al chilometro
const prezzoAlChilometro = 0.21

console.log (prezzoAlChilometro, '€/km')

// Prezzo totale per il viaggio
const prezzoTotale = chilometriDaPercorrere * prezzoAlChilometro

console.log(prezzoTotale.toFixed(2))

    // Sconto minorenne
    if (eta < 18) {
        const prezzoMinorenni = ((prezzoTotale / 100) * 80)

        console.log (prezzoMinorenni.toFixed(2))

    // Sconto Over 65    
    } else if (eta > 65) {
        const prezzoOver65 = ((prezzoTotale / 100) * 60)

        console.log (prezzoOver65.toFixed(2))
    }