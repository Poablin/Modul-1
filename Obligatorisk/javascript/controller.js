function isDateValid(date) {
    return checkLength(date)
        && checkDot(date)
        && checkYear(date)
        && checkMonth(date)
        && checkDay(date)
}

function checkLength(date) {
    return date.length >= 10;
}

function checkDot(date) {
    return date.charAt(2) == '.' && date.charAt(5) == '.';
}

function checkYear(date) {
    const year = date.substring(6);
    return year.length == 4 && year >= 0000 && year <= 9999;
}

function checkMonth(date) {
    const month = date.substring(3, 5);
    return month >= '01' && month <= '12';
}

function checkDay(date) {
    const day = date.substring(0, 2);
    const month = date.substring(3, 5);
    const year = date.substring(6);
    if (day.length === 2 && day >= '01' && day <= '28') return true;
    if (day > '31') return false;
    if (month != '02') {
        return day <= '30' || month !== '04' && month !== '06' && month !== '09' && month !== '11';
    }
    else {
        return day == '29' && isLeapYear(year);
    }
}

function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}