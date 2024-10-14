import React from "react";
import { useParams } from 'react-router-dom';
import { nameToURL, initials } from "../utilities/showsUtilities";
import ShowCard from "../components/ShowCard";

export default function Actor({t, shows}){

    console.log(shows);

    // get the actor name string from URL
    const {actorName} = useParams();

    // find all shows that include the actor
    const showsWithActor = shows.filter(s => s.cast.find(a => nameToURL(a.name) === actorName));

    var actorRealName = "";
    if (showsWithActor.length>0) showsWithActor[0].cast.map(a => { if (nameToURL(a.name) === actorName) { actorRealName = a.name; } return true; });


    return(
        <div className="px-6 pb-4">
            <div className="flex gap-4 items-center mb-8">
                <div className="basis-16 grow-0 h-16 text-primary-variant-light bg-primary rounded-full flex items-center justify-center text-2xl">{initials(actorRealName)}</div>
                <div className="grow">
                    <div className="text-titlecolor text-2xl">{actorRealName}</div>
                </div>
            </div>
            <h3 className="font-bold mb-4">{t('actor.playedWith').replace('{0}', actorRealName)}</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {showsWithActor.map((show) => (
                    <ShowCard key={show.id} show={show}></ShowCard>
                ))}
            </div>
        </div>
    );
}