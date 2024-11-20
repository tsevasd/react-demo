import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ShowCard from "../components/ShowCard";

export default function FavoriteShows({t, shows}){

    const { user } = useContext(UserContext);

    return(
        <div className="px-6 pb-4">
            <h1 className="text-xl text-titlecolor mb-4">{t('shows.favorites')}</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
                {(user.favorites.length > 0 && shows.length > 0) ? user.favorites.map((id) => {
                    // find show by id
                    const show = shows.find(m => m.id === id);
                    return(<ShowCard key={id} show={show}></ShowCard>);
                }) : t('noFavorites')}
            </div>
        </div>
    );
};