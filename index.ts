let title: string = "Tabata";
const appDiv: HTMLElement = document.getElementById('app.title').innerHTML = title

let counter: number = 0;
let round = 1;
let set = 0;
document.getElementById('app.round').innerHTML = 'Round: '+round.toString()
let intervalId = setInterval(() => {
  counter = counter + 1;
  if (counter<=20 && set == 0) {
    document.getElementById('app.set').innerHTML = 'Valendo!';
    document.getElementById('app.counter').innerHTML = counter.toString()
  }
    
  else if (counter>=20 && set == 0) {

    set=1;
    counter=0;
  }

  else if (counter<=10 && set == 1) {
    document.getElementById('app.set').innerHTML = 'Descanse!';
    document.getElementById('app.counter').innerHTML = counter.toString()
  }

  else if (round<=7) {
    set=0;
    counter=0;
    round=round + 1;
    document.getElementById('app.round').innerHTML = 'Round: '+round.toString()
  }

  
}, 100);












