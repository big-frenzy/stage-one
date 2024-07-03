document.addEventListener("DOMContentLoaded", function () {
  setInterval(getTime, 1000);
  getDay();
});
function getTime() {
  const timeElement = document.getElementById("current-time");
  const currentTime = new Date();
  const options = {
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  const timeString = currentTime.toLocaleTimeString("en-GB", options);
  timeElement.textContent = timeString;
}
function getDay() {
  const dayElement = document.getElementById("current-day");
  const currentDate = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekdays[currentDate.getDay()];
  dayElement.textContent = day;
}
