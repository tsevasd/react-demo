import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import ShowCard from '../components/ShowCard';
import GenresWidget from '../components/GenresWidget';
import Pagination from '../utilities/Pagination';

export default function Home({t, shows}) {

    const { theme } = useContext(ThemeContext);

    const postsPerPage = 8;
    const {page} = useParams();
    const currentPage = (typeof page === "undefined") ? 1 : parseInt(page);
    const startPost = (currentPage - 1) * postsPerPage;
    const endPost = startPost + postsPerPage;

    const [sort, setSort] = useState(1);
    //const [sortedShows, setSortedShows] = useState([...shows]);
    function sorting(a, b, sort){
        switch(sort){
            case "1":
                return;
            case "2":
                //console.log(b.title, a.title, b.title < a.title);
                return b.title < a.title;
            case "3":
                return b.years[0] < a.years[0];
            case "4":
                return b.rating < a.rating;
            default:
                return;
        }
    }
    /*function handleSorting(sort){
        setSortedShows();
    }*/
    const sortedShows = [...shows].sort((a, b) => sorting(a, b, sort));
    

    return (
        <div className="px-8 py-4">
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                    <img src={`img/logo_hor_${theme.theme}.png`} alt={theme.name}className="block max-w-lg mx-auto" />
                    <div className="flex w-full items-end gap-6 mb-4">
                        <div className="pr-16">
                            <h1 className="font-bold text-lg mb-2">{t('home.title')}</h1>
                            <div className="text-sm">{t('home.text')}</div>
                        </div>
                        <div className="flex justify-end items-center whitespace-nowrap">
                            <label className="mr-4" htmlFor="sort">{t('sort.label')}</label>
                            <select
                                id="sort"
                                onChange={(e) => {setSort(e.target.value)}}
                                className="h-10 p-2 rounded-full bg-area/10 hover:bg-area/20 cursor-pointer transition-colors overflow-hidden whitespace-nowrap">
                                <option value="1" className="bg-bodycolor">{t('sort.default')}</option>
                                <option value="2" className="bg-bodycolor">{t('sort.byName')}</option>
                                <option value="3" className="bg-bodycolor">{t('sort.byYear')}</option>
                                <option value="4" className="bg-bodycolor">{t('sort.byRating')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        {sortedShows.slice(startPost, endPost).map((show) => (
                            <ShowCard key={show.id} show={show}></ShowCard>
                        ))}
                    </div>
                    <Pagination t={t} postsPerPage={postsPerPage} length={shows.length} currentPage={currentPage.toString()} link="/{0}"></Pagination>
                </div>
                <div className="border-l border-darkcolor">
                    <GenresWidget t={t}></GenresWidget>
                </div>
            </div>
        </div>
    );
}