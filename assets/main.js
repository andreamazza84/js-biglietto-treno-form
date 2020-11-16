var btnGenera = document.getElementById('button_genera');
var btnAnnulla = document.getElementById('button_annulla');

var isNumber = function isNumber(){
  return typeof value === 'number' && isFinite();
}

//Genera Biglietto
btnGenera.addEventListener("click", function() {

  //Selezionare valore input
  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('percorso');
  var fasciaInput = document.getElementById('fascia');

  //La seguente separazione del valore consente di modificare altre proprietà
  var fullName = fullNameInput.value;
  var km = kmInput.value;
  var fascia = fasciaInput.value;

  //Calcolo prezzo biglietto treno
  var costoPerKm = 0.21;
  var ticketPrice = costoPerKm * km;

  // Offerta
  var offer = 1;
  if (fascia == "minorenne"){
    offer = (1 - 0.2);
  }
  else if (fascia =="over65"){
    offer = (1 - 0.4);
  }
  // Applicazione dello sconto
  ticketPrice = ticketPrice * offer;

  //Ora "offer" coincide con il valore percentuale dello sconto
  offer = (1 - offer)*100;

  //Genera numero Carrozza
  var numberCarrozza = Math.ceil(Math.random() * 9) + 1;
  //Numero causuale tra 90000 e 99999
  var codiceCp = Math.floor(Math.random() * 10000) + 90000;

  //Seleziono gli elementi dal documento
  var elName = document.getElementById('nome-passeggero');
  var elSconto = document.getElementById('sconto');
  var elCarrozza = document.getElementById('carrozza');
  var elCodice = document.getElementById('codice-cp');
  var elTicket = document.getElementById('ticket-price');

  //Inserimento dei dati nel biglietto
  elName.innerHTML = fullName;
  elSconto.innerHTML = "Sconto " + offer.toFixed(0) + "%";
  elCarrozza.innerHTML = numberCarrozza;
  elCodice.innerHTML = codiceCp;
  // Il prezzo viene sempre arrotondato a 5c€
  elTicket.innerHTML = "€ " + (Math.round(ticketPrice / 0.05) * 0.05).toFixed(2);
  document.getElementById('biglietto').style.opacity = "1";
});


//Annulla
btnAnnulla.addEventListener("click", function() {
  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('percorso');
  var fasciaInput = document.getElementById('fascia');
  document.getElementById('biglietto').style.opacity = "0";

  fullNameInput.value = "";
  kmInput.value = "";
  fasciaInput.value = "minorenne";
});
