import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconStar } from '../icons/all';
import { nameToURL, initials } from "../utilities/showsUtilities";

export default function Show({t, shows}) {

    // get the show id through the URL
    const showParams = useParams();
    // find the show from the array that matches the id
    const show = shows.find((s) => s.id.toString() === showParams.showId);
    //console.log(show);

    return (
        <div className="px-6 pb-4 mb-4 max-w-4xl border-r border-darkcolor">
            <div className="flex flex-row w-full mb-8">
                <div>
                    <img src={show.poster} className="max-w-none" alt={show.title} />
                </div>
                <div className="px-8 flex flex-col">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-2xl text-titlecolor mb-2">{show.title}</h1>
                        <div className="flex items-center">
                            {show.rating.toFixed(1)}
                            <IconStar iconClassName="w-6 h-6 ml-2 stroke-secondary"></IconStar>
                        </div>
                    </div>
                    <div className="mb-4">
                        [ {show.years.join(', ')} ]
                    </div>
                    <div className="text-sm mb-4">{show.description}</div>
                    <div className="mt-auto text-sm">{show.genres.map((genre) => (
                        <Link
                            className="inline-block px-5 py-2 bg-area/10 hover:bg-area/20 transition-colors mr-2 mt-2 rounded-full"
                            to={`/genre/${nameToURL(genre)}`}
                            key={nameToURL(genre)}
                        >{genre}</Link>
                    ))}</div>
                </div>
            </div>
            <h3 className="font-bold mb-4">{t('shows.cast')}</h3>
            <div className="grid grid-cols-2 gap-4">
                {show.cast.map(c => (
                    <Link 
                        className="flex gap-4 items-center p-2 rounded-full transition hover:bg-area/10"
                        to={`/actor/${nameToURL(c.name)}`}
                        key={nameToURL(c.name)}
                    >
                        <div className="basis-16 grow-0 h-16 text-primary-variant-light bg-primary rounded-full flex items-center justify-center">{initials(c.name)}</div>
                        <div className="grow">
                            <div className="text-titlecolor font-bold">{c.name}</div>
                            <div>{c.hero}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}