function displayTime() {

    const dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let days = dateTime.getDate();
    let months = dateTime.getMonth() + 1;
    let year = dateTime.getFullYear();
    const meridian = document.getElementById('meridian');

    if (hours >= 12) {
        meridian.textContent = 'PM';
    } else {
        meridian.textContent = 'AM';
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if(months > 9){
        document.getElementById('months').innerHTML = months;
    }else{
        document.getElementById('months').innerHTML = '0' + months;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('days').innerHTML = days;
    document.getElementById('year').innerHTML = year;
}
setInterval(displayTime, 10);