import React from "react";
import { useParams } from 'react-router-dom';
import ShowCard from "../components/ShowCard";
import Pagination from "../utilities/Pagination";

export default function Genre({t, shows, error}){

    const {genre, page} = useParams();

    const postsPerPage = 10;
    const currentPage = (typeof page === "undefined") ? 1 : parseInt(page);
    const startPost = (currentPage - 1) * postsPerPage;
    const endPost = startPost + postsPerPage;

    var genreFormatted = genre.replace('-', ' ');
    if (genre === "sci-fi") { genreFormatted = "sci-fi"; }

    //find all shows containing the genre parameter
    const showsFound = shows.filter(s => s.genres.includes(genreFormatted));

    return(
        <div className="px-6 pb-4">
            <h1 className="text-2xl text-titlecolor mb-8"><span className="text-secondary capitalize">{genreFormatted}</span> {t('genres.shows')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3">
                    {!error.status ?
                        (<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-4">
                            {showsFound.length > 0 && showsFound.slice(startPost, endPost).map((show) => (
                                <ShowCard key={show.id} show={show}></ShowCard>
                            ))}
                        </div>)
                        : (<div className="p-12 text-center text-error">
                            {error.message}
                        </div>)
                    }
                    <Pagination t={t} postsPerPage={postsPerPage} length={showsFound.length} currentPage={currentPage.toString()} link={`/genre/${genre}/{0}`}></Pagination>
                </div>
                <div></div>
            </div>
        </div>
    );
};