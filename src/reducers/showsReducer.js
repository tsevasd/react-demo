export default function ticketReducer(state, action){

    switch(action.type){
        case "GET_MOVIE_BY_ID":
            return state.find(m => m.id === action.payload.id);
        case "GET_SHOWS_BY_GENRE":
            return state.filter(x => x.genre.includes(action.payload.genre));
        case "GET_SHOWS_BY_ACTOR":
            return state.filter(m => m.cast.find(a => a.name === action.payload.actorName));
        case "TOP_RATING_SHOWS":
            return state.sort((a, b) => b.rating - a.rating).slice(0, action.payload.amount);
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

