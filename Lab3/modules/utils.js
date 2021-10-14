function getDate() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var localTime = new Date();
    let currentDate = localTime.toLocaleString("en-US", options);
    let currentTimeZone = localTime.toTimeString();
    let fullDate = currentDate + " " + currentTimeZone;
    return fullDate;
}

module.exports = {getDate};