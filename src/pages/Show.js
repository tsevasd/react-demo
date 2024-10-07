import React from 'react';
import { useParams } from 'react-router-dom';
import { IconStar } from '../icons/all';

export default function Show({t, shows}) {

    const showParams = useParams();
    const show = shows.find((s) => s.id.toString() === showParams.showId);

    function initials(name){
        // take the first letter of words joined by non word characters and capitalize them
        return name.match(/\b\w/g).join('').toUpperCase();
    }

  return (
        <div className="px-6 pb-4 mb-4 w-1/2 border-r border-darkcolor">
            <div className="flex flex-row w-full mb-8">
                <div>
                    <img src={show.poster} className="max-w-none" alt={show.title} />
                </div>
                <div className="px-8">
                    <div class="flex w-full items-center justify-between">
                        <h1 className="text-2xl text-titlecolor mb-2">{show.title}</h1>
                        <div class="flex items-center">
                            {show.rating}
                            <IconStar iconClassName="w-6 h-6 ml-2 stroke-secondary"></IconStar>
                        </div>
                    </div>
                    <div className="mb-4">[
                        {show.years.map((y, i) => (<span className="first:ml-2 mr-2">{y}{(i < show.years.length-1) && (',')}</span>))}
                        ]
                    </div>
                    <div class="text-sm mb-4">{show.description}</div>
                    <div class="mb-4 text-sm">{show.genres.map((genre) => (
                <a className="inline-block px-5 py-2 bg-area/10 hover:bg-area/20 transition-colors mr-2 mb-2 rounded-full" key={genre}>{genre}</a>
            ))}</div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                {show.cast.map(c => (
                    <div className="flex gap-4 items-center mb-2">
                        <div className="basis-16 grow-0 h-16 bg-primary rounded-full flex items-center justify-center">{initials(c.name)}</div>
                        <div class="grow">
                            <div className="text-titlecolor font-bold">{c.name}</div>
                            <div>{c.hero}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
}