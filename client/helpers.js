

export function formatIsoDate(date) {
    date = date ? new Date(date) : new Date();
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    var hours = date.getHours().toString();
    hours = hours.length > 1 ? hours : '0' + hours;

    var minutes = date.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : '0' + minutes;

    var newDate = day + "-" + month + "-" +  year + " " + hours + ":" + minutes;
    return newDate;
}