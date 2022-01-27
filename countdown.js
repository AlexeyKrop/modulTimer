"use strict";
const timer = (deadline) => {
  const declensionNum = (value, words) => {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (value > 10 && value < 20) {
      return words[2];
    }
    if (num > 1 && num < 5) {
      return words[1];
    }
    if (num === 1) {
      return words[0];
    }
    return words[2];
  };
  const zeroFormat = (x) => {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  };
  const timeSeconds = document.querySelector(".labels__second"),
    timeMinutes = document.querySelector(".labels__minute"),
    timeHours = document.querySelector(".labels__hour"),
    timeDays = document.querySelector(".labels__day");
  const timeStart = new Date().getTime(),
    timeStop = new Date(deadline).getTime(),
    timeRemaining = (timeStop - timeStart) / 1000;
  const seconds = Math.floor(timeRemaining % 60),
    minutes = Math.floor((timeRemaining / 60) % 60),
    hours = Math.floor((timeRemaining / 3600) % 24),
    days = Math.floor(timeRemaining / 3600 / 24);
  if (timeRemaining > 0) {
    timeSeconds.textContent = ` ${zeroFormat(seconds)}
      ${declensionNum(seconds, ["секунда", "секунды", "секунд"])}`;
    timeMinutes.textContent = `${zeroFormat(minutes)}
      ${declensionNum(minutes, ["минута", "минуты", "минут"])}`;
    timeHours.textContent = `${zeroFormat(hours)}  ${declensionNum(hours, [
      "час",
      "часа",
      "часов",
    ])}`;
    timeDays.textContent = `${zeroFormat(days)} ${declensionNum(days, [
      "день",
      "дня",
      "дней",
    ])}`;
  } else {
    timeSeconds.textContent = zeroFormat(0);
    timeMinutes.textContent = zeroFormat(0);
    timeHours.textContent = zeroFormat(0);
    timeDays.textContent = zeroFormat(0);
  }
};
setInterval(timer, 1000, "15 jule 2121");
