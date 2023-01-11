let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let am_pm = document.querySelector("#am_pm");

//setting up clock

setInterval(clock, 1000);

function clock() {
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hours.textContent = hrs;
  minutes.textContent = min;
  seconds.textContent = sec;

  if (hrs === 12) {
    am_pm.textContent = "PM";
  }
}
