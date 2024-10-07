import React, { useContext, useReducer } from "react";
import { yearsTool } from "../utilities/yearsUtilities";
import { IconStar, IconHeart, IconHeartOn } from "../icons/all";
import UserContext from "../context/UserContext";
import userReducer from "../reducers/userReducer";


export default function ShowCard({show}){

    const { user } = useContext(UserContext);

    const [userState, dispatch] = useReducer(userReducer, user);

    function toggleFavorite(){
        console.log(show.id);
        dispatch({ type: "TOGGLE_FAVORITE_SHOW", showId: show.id});
    };

    return(
        <div key={show.id}>
            <a className="block relative overflow-hidden rounded-lg group">
                <img src={show.poster} alt={show.title} className="w-full object-cover object-center aspect-square group-hover:scale-105 transition-all" />
                <div className="absolute bottom-0 left-0 w-full z-10 px-4 py-3 backdrop-blur-sm bg-black/50">
                    <h3 className="font-bold text-white">{show.title}</h3>
                    <div className="text-sm">{yearsTool(show.years, "range")}</div>
                </div>
            </a>
            <div className="px-2 py-2 text-sm flex w-full items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <IconStar iconClassName="w-6 h-6 stroke-secondary"></IconStar>
                    <span>{show.rating}</span>
                </div>
                <div>
                    <a onClick={toggleFavorite}>
                        {userState.favorites.includes(show.id) ? <IconHeartOn iconClassName="w-6 h-6 fill-error"></IconHeartOn> :
                        <IconHeart iconClassName="w-6 h-6 stroke-secondary"></IconHeart>}
                    </a>
                </div>
            </div>
            <div className="overflow-x-auto whitespace-nowrap text-xs">
                {show.genres.map((g, i) => (
                    <span key={i} className="inline-block bg-area/10 px-2 py-1 rounded-full mr-1 last:mr-0">{g}</span>
                ))}
            </div>
        </div>
    )
};