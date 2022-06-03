var form = document.getElementById("form"),
    bdate = document.getElementById("date"),
    bmonth = document.getElementById("month"),
    byear = document.getElementById("year"),
    date = document.getElementById("date2"),
    month = document.getElementById("month2"),
    year = document.getElementById("year2"),
    age = document.getElementById("age"),
    days = document.getElementById("days"),
    months = document.getElementById("months"),
    today = new Date();

year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var birthyear = Number.parseFloat(byear.value),
        birthmonth = Number.parseFloat(bmonth.value),
        birthday = Number.parseFloat(bdate.value),
        todayyear = Number.parseFloat(year.value),
        todaymonth = Number.parseFloat(month.value),
        todays = Number.parseFloat(date.value);

    if (todays < birthday) {
        days.innerHTML = (todays - birthday + 30) + ' days';
        todaymonth = todaymonth - 1;
    } else {
        days.innerHTML = (todays - birthday) + ' days'
    }

    if (todaymonth < birthmonth) {
        months.innerHTML = (todaymonth - birthmonth + 12) + ' months';
        todayyear = todayyear - 1;
    } else {
        months.innerHTML = (todaymonth - birthmonth) + ' months'
    }

    age.innerHTML =(todayyear - birthyear) + ' years';

});