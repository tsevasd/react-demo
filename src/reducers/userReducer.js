export default function userReducer(user, action){

    switch(action.type){
        case "TOGGLE_FAVORITE_SHOW":
            console.log('user.favorites.includes(action.showId)', user.favorites, action.showId, user.favorites.includes(action.showId));
            if (user.favorites.includes(action.showId)) {
                return {...user, favorites: user.favorites.filter(showId => showId !== action.showId)};
            } else {
                return {...user, favorites: [...user.favorites, action.showId]};
            }
        case "TOGGLE_FAVORITE_GENRE":
            if (user.favoriteGenres.includes(action.genre)) {
                return {...user, favoriteGenres: user.favoriteGenres.filter(genre => genre !== action.genre)};
            } else {
                return {...user, favoriteGenres: [...user.favoriteGenres, action.genre]};
            }
        case "READ_MESSAGE":
            var messages = user.notifications.messages.map(m => m.date === action.date && (m.read = true));
            var alert = messages.find(m => m.read === false).length > 0;
            return {...user, notifications: { alert: alert, messages: messages } };
        default:
            return user;
    }

}