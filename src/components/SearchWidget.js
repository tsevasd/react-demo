import React from "react";
import { useState, useRef } from "react";
import { IconSearch, IconClose } from '../icons/all';
import { yearsTool } from "../utilities/yearsUtilities";

export default function SearchWidget({t, showsShort}){

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
    const matchesSearchTerm = (shows, searchTerm) => {
        return [...shows.filter((show) => show.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...shows.filter((show) => show.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
    }

    return(
        <div className="ml-4">
            <button
                className="w-48 h-12 rounded-full bg-area/10 hover:bg-area/20 flex items-center justify-start text-darkcolor px-3"
                onClick={openSearch}
            >
                <IconSearch iconClassName="w-6 h-6 stroke-darkcolor mr-3"></IconSearch>
                <span>{t('header.searchInput')}</span>
            </button>
            <div className={`fixed z-20 top-0 left-0 w-full ${search ? 'visible h-screen' : 'invisible'}`}>
                <div className="bg-black/50 absolute inset-0">
                    <div className="max-w-screen-lg mx-auto h-screen bg-bodycolor relative z-20 flex flex-col">
                        <div className="p-4 flex gap-2">
                            <div className="flex-grow relative">
                                <input
                                    type="text"
                                    className="w-full bg-area/10 px-4 h-12 rounded-full flex-grow focus:outline-none focus:bg-area/20"
                                    placeholder={t('header.searchInput')}
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
                        <div className="px-8 pb-4 flex-grow overflow-y-auto">
                            <ul>
                                {
                                    searchTerm.length > 1 &&
                                    matchesSearchTerm(showsShort, searchTerm).map(show => (
                                        <li key={show.id} className="mb-2">
                                            <a>
                                                <h4 className="font-bold"  dangerouslySetInnerHTML={{ __html: show.title.replace(new RegExp(searchTerm, 'gi'), '<span className="text-secondary">$&</span>') }} />
                                                <div className="text-sm">{yearsTool(show.years, "range")}</div>
                                            </a>
                                        </li>
                                    ))
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