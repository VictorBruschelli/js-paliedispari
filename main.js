//Palidroma

 //chiedere all’utente di inserire una parola
 let parolaPalidroma = prompt("Inserisci una parola:");

//Creare una funzione per capire se la parola inserita è palindroma 

function scopri(parola) {

    // codice responsabile per invertire la parola 
    let parolainversa = parola.split('').reverse().join('');
    
    // Confronta la parola originale con quella invertita
    return parola === parolainversa;
  }
  
  // Verifica se l'input è una parola palindroma
  if (parolaPalidroma !== null) {
    if (scopri(parolaPalidroma)) {
      console.log(`${parolaPalidroma} è una parola palindroma.`);
      alert(`${parolaPalidroma} è una parola palindroma.`);
    } else {
      console.log(`${parolaPalidroma} non è una parola palindroma.`);
      alert(`${parolaPalidroma} non è una parola palindroma.`);
    }
  }
  