function displayTime() {

    const dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let days = dateTime.getDate();
    let months = dateTime.getMonth() + 1;
    let year = dateTime.getFullYear();
    const meridian = document.getElementById('meridian');

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    days = days < 10 ? `0${days}` : days;
    months = months < 10 ? `0${months}` : months;
    meridian.textContent = hours >= 12 ? meridian.textContent = 'PM' : meridian.textContent = 'AM';

    if (hours > 12) {
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('days').innerHTML = days;
    document.getElementById('months').innerHTML = months;
    document.getElementById('year').innerHTML = year;
}
setInterval(displayTime, 10);
