// Funzione per cambiare il contenuto del tag h1
let titoloOriginale = "BenAissa Phones";
let nuovoTitolo = "I migliori smartphones in Italia!";
let titoloAlternato = false;


function toggleTitolo() {
    const titolo = document.getElementById("shop-title");
    if (titoloAlternato) {
        titolo.textContent = titoloOriginale; // Ripristina il titolo originale
    } else {
        titolo.textContent = nuovoTitolo; // Cambia al nuovo titolo
    }
    titoloAlternato = !titoloAlternato; // Alterna lo stato
}

// Funzione per cambiare il colore di background
function cambiaColoreBackground() {
    const colori = ["#f4f4f4", "#ffdd57", "#a1c4fd", "#ff9999", "#c0c0c0"];
    const coloreRandom = colori[Math.floor(Math.random() * colori.length)];
    document.body.style.backgroundColor = coloreRandom;
}

 // Modifica il contenuto del testo con un indirizzo fittizio
function cambiaIndirizzo() {
    
    const addressElement = document.getElementById("address");
    
   
    addressElement.textContent = "Via Fittizia 456, Torino, Italia";
}

// Aggiungi la classe "amazon-link" a ciascun link trovato
function aggiungiClasse() {
    const links = document.querySelectorAll("table a[href*='amazon.it']");
links.forEach(link => {
        link.classList.add("amazon-link");
    });
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function toggleVisibilitaImmagini() {
    const immagini = document.querySelectorAll("table img");

    // Alterna la classe "invisibile" per ogni immagine
    immagini.forEach(img => {
        img.classList.toggle("invisibile");
    });
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function cambiaColorePrezzi() {
     const colori = ["red", "blue", "green", "orange", "purple", "pink", "violet"];
    const prezzi = document.querySelectorAll(".prezzo");

    // Cambia il colore di ogni prezzo
    prezzi.forEach(prezzo => {
        // Seleziona un colore casuale dall'array
        const coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
        // Applica il colore al testo del prezzo
        prezzo.style.color = coloreCasuale;
    });
}

