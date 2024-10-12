import React, { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer from "../reducers/userReducer";

export const UserProvider = ({children}) => {

    const userInitialState = {
        id: 0,
        name: "Guest User",
        image: null,
        favorites: [1, 2, 38, 43],
        favoriteGenres: ["sci-fi", "crime", "mystery", "thriller", "drama"],
        notifications: {
            alert: true,
            messages: [
                {
                    date: 1728031514000,
                    title: "Welcome to My TV Shows",
                    text: "Here you will find information of the TV shows I have watched or I have planned to watch. Information includes genres, description, poster, years aired and the cast starring",
                    read: true
                },
                {
                    date: 1728118923000,
                    title: "Favorites functionality",
                    text: "Please have the chance to mark your favorite shows and then go to your Favorites section to examine the list.",
                    read: false
                },
                {
                    date: 1728217924000,
                    title: "Favorite Genres",
                    text: "Add or remove favorite genre to navigate to your favorite shows instantly.",
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