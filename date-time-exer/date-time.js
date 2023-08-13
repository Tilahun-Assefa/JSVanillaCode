// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
let newDate = new Date('2012-02-20:3:12:0');
console.log("parse date", newDate);

let otherDate = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(otherDate);

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
function getWeekDay(date) {
    let weekDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA",];
    return weekDays[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(getWeekDay(date));        // should output "TU"

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). 
//Write a function getLocalDay(date) that returns the “European” day of week for date.
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}
let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log(getLocalDay(date2));       // tuesday, should show 2

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
let mydate = new Date(2016, 1, 28);
mydate.setDate(mydate.getDate() - 2);

console.log(mydate); // 1 Mar 2016

function getDateAgo(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(date.getDate() - days);
    return copyDate.getDate();
}

let dateDiff = new Date(2015, 0, 2);

console.log(getDateAgo(dateDiff, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(dateDiff, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(dateDiff, 365)); // 2, (2 Jan 2014)

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    return date.getDate(date.setDate(0));
}
console.log(getLastDayOfMonth(2012, 1)); //= 29 (leap year, Feb).

// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
function getSecondsToTomorrow() {
    let curTime = new Date();
    let tomorrow = new Date(curTime.getFullYear(), curTime.getMonth(), curTime.getDate() + 1);
    return Math.round((tomorrow - curTime) / 1000);
}
console.log(getSecondsToTomorrow()); // == 3600

// Write a function formatDate(date) that should format date as follows:

// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". 
// That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
function formatDate(date) {
    let dateDiff = new Date - date;
    if (dateDiff < 1000) {
        return "right now";
    }
    if (dateDiff < 60 * 1000) {
        return `${Math.round(dateDiff / (1000))} sec. ago`;
    }
    if (dateDiff < 60 * 60 * 1000) {
        return `${Math.round(dateDiff / (60 * 1000))} min. ago`;
    }
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()}`;
}

console.log(formatDate(new Date(new Date - 1))); // "right now"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));