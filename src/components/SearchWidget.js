import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IconSearch, IconClose } from '../icons/all';
import { yearsTool } from "../utilities/timeUtilities";
import { showsTool, nameToURL } from "../utilities/showsUtilities";

export default function SearchWidget({t, shows}){

    const [search, setSearch] = useState(false);

    const searchRef = useRef(null);
    function openSearch(){
        setSearch(true);
        setTimeout(() => { searchRef.current.focus(); }, 50);
    }
    function closeSearch(){
        setSearchTerm("");
        setSearch(false);
    }

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const showsShort = showsTool(shows, "SHORT_LIST");
    const matchesSearchTermShow = (shows, searchTerm) => {
        return [...shows.filter((show) => show.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...shows.filter((show) => show.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
    }

    
    const allCast = showsTool(shows, "ALL_CAST");
    const matchesSearchTermActor = (allCast, searchTerm) => {
        return [...allCast.filter((actor) => actor.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...allCast.filter(actor => actor.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
    }

    const allHeroes = showsTool(shows, "ALL_HEROES");
    const matchesSearchTermHero = (allHeroes, searchTerm) => {
        return [...allHeroes.filter((hero) => hero.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...allHeroes.filter(hero => hero.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
    }

    return(
        <div className="ml-2 md:ml-4">
            <button
                className="w-12 md:w-48 h-12 rounded-full bg-area/10 hover:bg-area/20 transition-colors flex items-center justify-center md:justify-start text-darkcolor md:px-3"
                onClick={openSearch}
            >
                <IconSearch iconClassName="w-6 h-6 stroke-textcolor md:stroke-darkcolor md:mr-3"></IconSearch>
                <span className="hidden md:inline">{t('header.searchInput')}</span>
            </button>
            <div className={`fixed z-20 top-0 left-0 w-full ${search ? 'visible h-screen h-full' : 'invisible'}`}>
                <div className="bg-black/50 absolute inset-0">
                    <div className="max-w-screen-lg mx-auto h-screen bg-bodycolor relative z-20 flex flex-col">
                        <div className="p-4 flex gap-2">
                            <div className="flex-grow relative">
                                <input
                                    type="text"
                                    className="w-full bg-area/10 px-4 h-12 rounded-full flex-grow focus:outline-none focus:bg-area/20"
                                    placeholder={`${t('header.searchInput')} ${t('header.searchInputDescription')}`}
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
                            <button
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-area/10 hover:bg-area/20"
                                onClick={closeSearch}
                            >
                                <IconClose iconClassName="w-7 h-7 stroke-primary"></IconClose>
                            </button>
                        </div>
                        <div className="px-4 pb-4 flex-grow overflow-y-auto">
                            <ul>
                                {
                                    searchTerm.length > 1 &&
                                    matchesSearchTermShow(showsShort, searchTerm).map(show => (
                                        <li key={show.id} className="mb-1">
                                            <Link
                                                className="block px-4 py-2 rounded-lg transition-colors hover:bg-area/10"
                                                to={`/show/${show.id}`}
                                                onClick={closeSearch}>
                                                <h4 className="font-bold"  dangerouslySetInnerHTML={{ __html: show.title.replace(new RegExp(searchTerm, 'gi'), '<span class="text-secondary">$&</span>') }} />
                                                <div className="text-sm">{yearsTool(show.years, "range")}</div>
                                            </Link>
                                        </li>
                                    ))
                                }
                                {searchTerm.length > 1 && 
                                    matchesSearchTermActor(allCast, searchTerm).map((actor, i) => (
                                        <li key={i} className="mb-1">
                                            <Link
                                                className="flex w-full px-4 py-2 rounded-lg transition-colors hover:bg-area/10"
                                                to={`/actor/${nameToURL(actor)}`}
                                                onClick={closeSearch}>
                                                <span className="flex justify-end shrink pr-2 opacity-50 basis-14">{t('actor.searchActor')}</span>
                                                <div className="font-sm font-bold"  dangerouslySetInnerHTML={{ __html: actor.replace(new RegExp(searchTerm, 'gi'), '<span class="text-secondary">$&</span>') }} />
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
                                                to={`/show/${url}`}
                                                onClick={closeSearch}>
                                                <span className="flex justify-end shrink pr-2 opacity-50 basis-14">{t('actor.searchHero')}</span>
                                                <div dangerouslySetInnerHTML={{ __html: hero.replace(new RegExp(searchTerm, 'gi'), '<span class="text-secondary">$&</span>') }} />
                                            </Link>
                                        </li>
                                    )})
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-10" onClick={closeSearch}></div>
                </div>
            </div>
        </div>
    );
}