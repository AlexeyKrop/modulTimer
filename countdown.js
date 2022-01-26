"use strict";
const timer = (deadline) => {
  // функция склонение числительных
  const declensionNum = (num, words) => {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
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
