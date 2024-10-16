import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { showsTool, nameToURL } from "../utilities/showsUtilities";
import { IconSearch, IconClose } from "../icons/all";

export default function SearchActorWidget({t, shows}){

    const allCast = showsTool(shows, "ALL_CAST");
    
    const searchRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const matchesSearchTerm = (allCast, searchTerm) => {
        return [...allCast.filter((actor) => actor.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0), ...allCast.filter(actor => actor.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)];
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
                    {
                        searchTerm.length > 1 &&
                        matchesSearchTerm(allCast, searchTerm).map((actor, i) => (
                            <li key={i} className="mb-1">
                                <Link
                                    className="block px-4 py-2 rounded-lg transition-colors hover:bg-area/10"
                                    to={`/actor/${nameToURL(actor)}`}>
                                    <h4 className="font-bold"  dangerouslySetInnerHTML={{ __html: actor.replace(new RegExp(searchTerm, 'gi'), '<span class="text-secondary">$&</span>') }} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}