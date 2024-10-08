import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import userReducer from "../reducers/userReducer";
import { showsTool, nameToURL } from "../utilities/showsUtilities";

export default function Genres({t, shows}){

    const { userInitialState, userInitialState2, setUser } = useContext(UserContext);
    const [user, dispatch] = useReducer(userReducer, userInitialState2);

    function toggleGenre(genre){
        dispatch({type: "TOGGLE_FAVORITE_GENRE", genre: genre});
    }

    const allGenres = showsTool(shows, "ALL_GENRES");

    return(
        <div className="px-6 pb-4">
            <h1 className="text-2xl text-titlecolor mb-4">{t('header.menu.genres')}</h1>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold mb-2">{t('genres.all')}</h3>
                    <div className="mb-8">
                        {allGenres.map((genre) => 
                            (
                                <Link
                                    className="inline-flex items-center px-5 py-2 bg-area/10 hover:bg-area/20 transition-colors mr-2 mb-2 rounded-full"
                                    key={genre}
                                    to={`/genre/${nameToURL(genre)}`}
                                >
                                    {genre}
                                </Link>
                            )
                        )}
                    </div>
                </div>
                <div className="border-l border-darkcolor px-6">
                    <h3 className="font-bold mb-2">{t('genres.favorites')}</h3>
                    <div className="mb-8">
                        {user.favoriteGenres.map((genre) => (
                            <a className="inline-flex items-center pl-5 pr-4 py-2 bg-area/10 hover:bg-area/20 transition-colors mr-2 mb-2 rounded-full"
                                onClick={() => {toggleGenre(genre)}}
                                key={genre}
                            >
                                {genre}
                                <span className="bg-error text-white inline-flex items-center justify-center rounded-full w-5 h-5 ml-3">-</span>
                            </a>
                        ))}
                    </div>
                    <h3 className="font-bold mb-2">{t('genres.addToFavorites')}</h3>
                    <div className="mb-8">
                        {allGenres.map((genre) => 
                                !user.favoriteGenres.includes(genre) && (
                                    <a className="inline-flex items-center pl-5 pr-4 py-2 bg-area/10 hover:bg-area/20 transition-colors mr-2 mb-2 rounded-full"
                                        onClick={() => {toggleGenre(genre)}}
                                        key={genre}
                                    >
                                        {genre}
                                        <span className="text-primary-variant-light bg-primary inline-flex items-center justify-center rounded-full w-5 h-5 ml-3">+</span>
                                    </a>
                                )
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};