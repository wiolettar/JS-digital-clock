function showTime() {
    var calendar = document.getElementById("calendar");
    var clock = document.getElementById("clock");
    var currentDate = new Date();

    //CLOCK
    h = currentDate.getHours();
    min = currentDate.getMinutes();
    s = currentDate.getSeconds();
    h = (h < 10) ? "0" + h : h;
    min = (min < 10) ? "0" + min : min;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + min + ":" + s;
    clock.innerHTML = time;
    clock.textContent = time;

    //CALENDAR
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1);
    var day = currentDate.getDate();
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    var date = year + '-' + month + '-' + day;
    calendar.innerHTML = date;
    setTimeout(showTime, 1000)
}

showTime();