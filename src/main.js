let time = 20;

// erstellung von funktion: stop wenn null erreicht ist;
// zeit reduzieren um "-1"
// timer stoppen wenn "0" erreicht ist

const countdown = () => {
  console.log(time); //dadurch sehen wir die "20" als Anfangswert
  time--; //dadurch sage ich das immer 1 abgezogen werden soll
  if (time === 0) {
    //dadaurch sage ich wenn die zeit 0 ist wird gestoppt
    clearInterval(timeOut);

    return console.log("Ende");
  }
};

let timeOut = window.setInterval(countdown, 1000); //damit wird garantiert das die funktion sich immer wiederholt
