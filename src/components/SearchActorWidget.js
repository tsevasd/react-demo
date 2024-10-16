import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { showsTool, nameToURL } from "../utilities/showsUtilities";
import { IconSearch, IconClose } from "../icons/all";

export default function SearchActorWidget({t, shows}){

    const allCast = showsTool(shows, "ALL_CAST");
    const allHeroes = showsTool(shows, "ALL_HEROES");
    
    const searchRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const matchesSearchTerm = (allCast, searchTerm) => {
        return [...allCast.filter((actor) => actor.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...allCast.filter(actor => actor.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
    }
    const matchesSearchTermHero = (allHeroes, searchTerm) => {
        return [...allHeroes.filter((hero) => hero.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...allHeroes.filter(hero => hero.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
    }

    return(
        <div className="flex flex-col">
            <div className="relative pb-4">
                <IconSearch iconClassName="w-6 h-6 stroke-primary absolute left-3 top-3"></IconSearch>
                <input
                    type="text"
                    className="w-full bg-area/10 px-12 h-12 rounded-full flex-grow focus:outline-none focus:bg-area/20"
                    placeholder={t('actor.search')}
                    ref={searchRef}
                    value={searchTerm} 
                    onChange={handleSearchChange}
                />
                {searchTerm.length > 0 && 
                    <button
                        className="w-8 h-8 bg-bodycolor rounded-full absolute top-2 right-2 z-10 flex items-center justify-center"
                        onClick={() => { setSearchTerm("");searchRef.current.focus(); }}
                    >
                        <IconClose iconClassName="w-5 h-5 stroke-textcolor"></IconClose>
                    </button>
                }
            </div>
            <div className="pb-4 flex-grow overflow-y-auto h-4/5 max-h-96">
                <ul>
                    {searchTerm.length > 1 && 
                        matchesSearchTerm(allCast, searchTerm).map((actor, i) => (
                            <li key={i} className="mb-1">
                                <Link
                                    className="flex w-full px-4 py-2 rounded-lg transition-colors hover:bg-area/10"
                                    to={`/actor/${nameToURL(actor)}`}>
                                    <span className="flex justify-end shrink pr-2 opacity-50 basis-14">{t('actor.searchActor')}</span>
                                    <div className="font-bold"  dangerouslySetInnerHTML={{ __html: actor.replace(new RegExp(searchTerm, 'gi'), '<span class="text-secondary">$&</span>') }} />
                                </Link>
                            </li>
                        ))
                    }
                    {searchTerm.length > 1 && 
                        matchesSearchTermHero(allHeroes, searchTerm).map((hero, i) => {
                            let url = "";
                            shows.map(s => s.cast.map(a => { if (a.hero === hero) { url = s.id; } }))
                            return(
                            <li key={i} className="mb-1">
                                <Link
                                    className="flex w-full px-4 py-2 text-sm rounded-lg transition-colors hover:bg-area/10"
                                    to={`/show/${url}`}>
                                    <span className="flex justify-end shrink pr-2 opacity-50 basis-14">{t('actor.searchHero')}</span>
                                    <div dangerouslySetInnerHTML={{ __html: hero.replace(new RegExp(searchTerm, 'gi'), '<span class="text-secondary">$&</span>') }} />
                                </Link>
                            </li>
                        )})
                    }
                </ul>
            </div>

        </div>
    )
}