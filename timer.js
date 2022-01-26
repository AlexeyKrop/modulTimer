"use strict";
const timer = () => {
  const timeSeconds = document.querySelector(".labels__second"),
    timeMinutes = document.querySelector(".labels__minute"),
    timeHours = document.querySelector(".labels__hour"),
    timeDays = document.querySelector(".labels__day");
  const timeStart = new Date().getTime(),
    timeStop = new Date(2022, 0, 27).getTime(),
    timeRemaining = (timeStop - timeStart) / 1000;
  const seconds = Math.floor(timeRemaining % 60),
    minutes = Math.floor((timeRemaining / 60) % 60),
    hours = Math.floor((timeRemaining / 3600) % 24),
    days = Math.floor(timeRemaining / 3600 / 24);
  const zeroFormat = (x) => {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  };
  timeSeconds.textContent = zeroFormat(seconds);
  timeMinutes.textContent = zeroFormat(minutes);
  timeHours.textContent = zeroFormat(hours);
  timeDays.textContent = zeroFormat(days);
};
timer();
setInterval(timer, 1000);
