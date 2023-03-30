export default function DateRender(props) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = props.date.split("-");
    var year = date[0];
    var month = months[parseInt(date[1]) - 1];
    return month + " " + year;
}
