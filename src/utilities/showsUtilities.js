export const showsTool = (shows, action) => {

    switch(action){
        case "ALL_GENRES":
            return [...new Set(shows.map(x => x.genres).flat())].sort();
        case "SOME_GENRES":
            return [...new Set(shows.map(x => x.genres).flat())].sort().filter(x => x.split(' ').length === 1);
        case "SHORT_LIST":
            return shows.map((show) => { return { "id": show.id, "title": show.title, "years": show.years } });
        default:
            return shows;
    }
}

export const nameToURL = (str) => {
    return str.toLowerCase()
    .replace(/ /g, '-')
    .replace(/ä/g, 'a')
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ö/g, 'o')

}

// take the first letter of words joined by non word characters and capitalize them
export const initials = (str) => str !== "" ? str.match(/\b\w/g).join('').toUpperCase() : "";