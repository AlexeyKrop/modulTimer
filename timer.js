"use strict";
const timer = () => {
  const timeStart = new Date().getTime();
  const timeStop = new Date(2022, 0, 27).getTime();
  const timeRemaining = (timeStop - timeStart) / 1000;
  const seconds = Math.floor(timeRemaining % 60),
    minutes = Math.floor((timeRemaining / 60) % 60),
    hours = Math.floor((timeRemaining / 3600) % 24),
    days = Math.floor(timeRemaining / 3600 / 24);
  const timeSeconds = document.querySelector(".labels__second");
  const timeMinutes = document.querySelector(".labels__minute");
  const timeHours = document.querySelector(".labels__hour");
  timeSeconds.textContent = seconds;
  timeMinutes.textContent = minutes;
  timeHours.textContent = hours;
};
timer();
setInterval(timer, 1000);
