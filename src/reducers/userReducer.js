export default function userReducer(user, action){

    switch(action.type){
        case "TOGGLE_FAVORITE_SHOW":
            //console.log('user.favorites.includes(action.showId)', user.favorites, action.showId, user.favorites.includes(action.showId));
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
        case "UPDATE_VALUE":
            let a = {};
            a[action.key] = action.value;
            return {...user, ...a};
        case "READ_MESSAGE":
            let messages = user.notifications.messages.map(m => {
                return {...m, read: m.date === action.date ? true : m.read };
            });
            let alert = messages.find(m => m.read === false) != null;
            return {...user, notifications: { alert: alert, messages: [...messages] } };
        default:
            return user;
    }

}