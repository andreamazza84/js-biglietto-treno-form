var btnGenera = document.getElementById('button_genera');
var btnAnnulla = document.getElementById('button_annulla');

btnGenera.addEventListener("click", function() {
  //genera Biglietto
  console.log("Genera il biglietto");

  //selezionare valore input
  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('percorso');
  var fasciaInput = document.getElementById('fascia');

  //La separazione consente di modificare altre proprietà
  var fullName = fullNameInput.value;
  var km = kmInput.value;
  var fascia = fasciaInput.value;
  console.log(fullName, km, fascia);

  //calcolo biglietto treno
  var costoPerKm = 0.21;
  var ticketPrice = costoPerKm * km;
  console.log(ticketPrice);

  if (fascia == "minorenne"){
    console.log("Applica uno scontro del 20%");
  }
  else if (fascia =="over65"){
    console.log("Applica uno scontro del 40%");
  }

  //Seleziona gi elementi de
  var elName = document.getElementById('nome-passeggero');
  var elSconto = document.getElementById('sconto');
  var elCarrozza = document.getElementById('carrozza');
  var elCodice = document.getElementById('codice-cp');
  var elTicket = document.getElementById('ticket-price');

  //Genera numero Carrozza
  var numberCarrozza = Math.ceil(Math.random() * 9) + 1;
  var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90;
  //Inserire i dati nel Biglietto
  elName.innerHTML = fullName;
  elSconto.innerHTML = offer;
  elTicket.innerHTML = "€" + ticketPrice;
  elCarrozza.innerHTML = numberCarrozza;
  elCodice.innerHTML = codiceCp;
  document.getElementById('biglietto').style.display = "block";
});


btnAnnulla.addEventListener("click", function() {
  //Annulla
  var fullNameInput = document.getElementById('full-name');
  var kmInput = document.getElementById('percorso');
  var fasciaInput = document.getElementById('fascia');
  console.log("Annulla operazione");
  document.getElementById('biglietto').style.display = "none";

  fullNameInput.value = "";
  kmInput.value = "";
});
