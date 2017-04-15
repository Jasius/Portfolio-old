var dob = "20150401",
    year = +dob.substr(0, 4),
    month = +dob.substr(4, 2) - 1,
    day = +dob.substr(6, 2),
    today = new Date,
    age = today.getFullYear() - year;
(today.getMonth() < month || today.getMonth() == month && today.getDate() < day) && age--, document.write(age);