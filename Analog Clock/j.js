let secondHand = document.querySelector('.sh');
let minsHand = document.querySelector('.mh');
let hourHand = document.querySelector('.hh');

function setDate() {
  const now = new Date();

  let seconds = now.getSeconds();
  let secondsDegrees = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let mins = now.getMinutes();
  let minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  let hour = now.getHours();
  let hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();