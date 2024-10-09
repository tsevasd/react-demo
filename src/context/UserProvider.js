import React, { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer from "../reducers/userReducer";

export const UserProvider = ({children}) => {

    const userInitialState = {
        id: 0,
        name: "Guest User",
        image: null,
        favorites: [1, 2, 3],
        favoriteGenres: ["sci-fi", "crime", "mystery", "thriller", "drama"],
        notifications: {
            alert: true,
            messages: [
                {
                    date: 1728031514,
                    title: "Welcome to My TV Shows",
                    text: "<p>Here you will find information of the TV shows I have watched or I have planned to watch.</p><p>Information includes genres, description, poster, years aired and the cast starring</p>",
                    read: true
                },
                {
                    date: 1728117923,
                    title: "Favorites functionality",
                    text: "<p>Please have the chance to mark your favorites shows and then go to your Favorites section to examine the list.</p>",
                    read: false
                },
                {
                    date: 1728217924,
                    title: "Favorite Genres",
                    text: "<p>Add or remove favorite genre to navigate to your favirote shows instantly.</p>",
                    read: false
                }
            ]
        }
    };

    const [user, dispatchUser] = useReducer(userReducer, userInitialState)



    return (
        <UserContext.Provider value={{user, dispatchUser}}>
            {children}
        </UserContext.Provider>
    )
}