import React from "react";
import { useParams } from 'react-router-dom';
import ShowCard from "../components/ShowCard";

export default function Genre({t, shows}){

    const urlParams = useParams();
    var genre = urlParams.genre.replace(/-/g, ' ');
    if (urlParams.genre === "sci-fi") { genre="sci-fi"; }

    //find all shows containing the genre parameter
    const showsFound = shows.filter(s => s.genres.includes(genre));

    return(
        <div className="px-6 pb-4">
            <h1 className="text-2xl text-titlecolor mb-8"><span className="text-secondary capitalize">{genre}</span> {t('genres.shows')}</h1>
            <div className="grid grid-cols-6 gap-6">
                {showsFound.map((show) => (
                    <ShowCard key={show.id} show={show}></ShowCard>
                ))}
            </div>
        </div>
    );
};