import UserContext from "./UserContext";
import { React, useState } from "react";

export const UserProvider = ({children}) => {

    const [userInitialState, setUser] = useState({
        id: 0,
        name: "Guest User",
        image: null,
        favorites: [1, 2, 3],
        favoriteGenres: ["sci-fi", "crime", "mystery", "thriller", "action"],
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
    });

    const userInitialState2 = {
        id: 0,
        name: "Guest User",
        image: null,
        favorites: [1, 2, 3],
        favoriteGenres: ["sci-fi", "crime", "mystery", "thriller", "action"],
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

    return (
        <UserContext.Provider value={{userInitialState, userInitialState2, setUser}}>
            {children}
        </UserContext.Provider>
    )
}