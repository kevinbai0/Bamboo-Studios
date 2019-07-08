const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const oneWeek = 7 * 24 * 60 * 60 * 1000;
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

export default function parseDate(date) { 
    if (typeof(date) === "string") {
        date = new Date(date);
    };

    const now = new Date();
    let difference = now - date;
    
    if (difference < oneMinute) return "Just Now";
    else if (difference < oneHour) {
        const value = Math.round(difference / oneMinute);
        return `${value} min${value === 1 ? "" : "s"} ago`;
    }
    else if (difference < oneDay) {
        const value = Math.floor(difference / oneHour);
        return `${value} hour${value === 1 ? "" : "s"} ago`;
    }
    else if (difference < oneWeek) {
        const value = Math.round(difference / oneDay);
        return `${value} day${value === 1 ? "" : "s"} ago`;
    }
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`; 
}