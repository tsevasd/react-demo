import React from 'react';
import ShowCard from '../components/ShowCard';
import GenresWidget from '../components/GenresWidget';

export default function Top10({t, shows}) {

    return (
        <div className="px-6 md:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                    <h1 className="text-xl text-titlecolor mb-4">{t('top10')}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        {shows.sort((a, b) => b.rating - a.rating).slice(0, 10).map((show) => (
                            <ShowCard key={show.id} show={show}></ShowCard>
                        ))}
                    </div>
                </div>
                <div className="md:border-l border-darkcolor">
                    <GenresWidget t={t}></GenresWidget>
                </div>
            </div>
        </div>
    );
}