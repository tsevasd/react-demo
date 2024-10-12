export const yearsTool = (years, type) => {
    if (years.length > 0) {
        switch(type){
            case "range":
                return years.length === 1 ? years[0] : `${years[0]} - ${years[years.length-1]}`;
            default:
                return years.join(", ");
        }
    }
}

export const messageDateTime = (timestamp) => {
    let msgGetDate = new Date(timestamp),
        y = msgGetDate.getFullYear(),
        m = msgGetDate.getMonth()+1,
        d = msgGetDate.getDate(),
        h = msgGetDate.getHours(),
        min = msgGetDate.getMinutes();
    return `${y}-${m < 10 ? '0'+m : m}-${d < 10 ? '0'+d : d} ${h < 10 ? '0'+h : h}:${min < 10 ? '0'+min : min}`;
}