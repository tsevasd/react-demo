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