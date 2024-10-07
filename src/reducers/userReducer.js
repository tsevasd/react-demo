export default function userReducer(state, action){

    switch(action.type){
        case "TOGGLE_FAVORITE_SHOW":
            if (state.favorites.includes(action.showId)) {
                return {...state, favorites: state.favorites.filter(showId => showId !== action.showId)};
            } else {
                return {...state, favorites: [...state.favorites, action.showId]};
            }
        case "ADD_FAVORITE_GENRE":
            if (!state.favoriteGenres.includes(action.genre)) {
                return {...state, favoriteGenres: [...state.favoriteGenres, action.genre]};
            } else {
                return state;
            }
        case "REMOVE_FAVORITE_GENRE":
            if (state.favoriteGenres.includes(action.genre)) {
                return {...state, favoriteGenres: state.favoriteGenres.filter(genre => genre !== action.genre)};
            } else {
                return state;
            }
        case "READ_MESSAGE":
            var messages = state.notifications.messages.map(m => m.date === action.date && (m.read = true));
            var alert = messages.find(m => m.read === false).length > 0;
            return {...state, notifications: { alert: alert, messages: messages } };
        default:
            return state;
    }

}




// take all genres of all movies, remove duplicates and sort them alphabetically
//const allGenres = [...new Set(data.map(x => x.genre).flat())].sort();
// take all the genres consisted of 1 word
//const someGenres = allGenres.filter(x => x.split(' ').length === 1);
// take all movies that include "crime" in their genres
//const crime = data.filter(x => x.genre.includes('crime'));
// take the first 10 movies with highest rating number
//const topMovies = data.sort((a, b) => b.rating - a.rating).slice(0, 10);
/*function getMovieById(id){
    return data.find(m => m.id === id);
};*/
//const lookForActor = "Bae Doona";
// filter movies according to cast > actor/ress name
//const moviesWithActor = data.filter(m => m.cast.find(a => a.name === lookForActor));
//const shortList = data.map((show) => { return { "title": show.title, "years": show.years } });

