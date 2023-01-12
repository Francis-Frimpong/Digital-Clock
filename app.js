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
  am_pm.textContent = "AM";

  if (hrs === 12) {
    am_pm.textContent = "PM";
  }
  if (hrs > 12) {
    hrs -= 12;
    am_pm.textContent = "PM";
  }

  if (hrs === 0) {
    hours.textContent = hrs = 12;
    am_pm.textContent = "AM";
  }

  hrs < 10 ? (hours.textContent = "0" + hrs) : hrs;
  min < 10 ? (minutes.textContent = "0" + min) : min;
  sec < 10 ? (seconds.textContent = "0" + sec) : sec;
}
