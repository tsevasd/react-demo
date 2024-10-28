import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import ShowCard from '../components/ShowCard';
import GenresWidget from '../components/GenresWidget';
import Pagination from '../utilities/Pagination';

export default function Home({t, shows, error}) {

    const { theme } = useContext(ThemeContext);

    const postsPerPage = 10;
    const {page} = useParams();
    const currentPage = (typeof page === "undefined") ? 1 : parseInt(page);
    const startPost = (currentPage - 1) * postsPerPage;
    const endPost = startPost + postsPerPage;

    const [sort, setSort] = useState(1);
    function sorting(a, b, sort){
        switch(sort){
            case "1":
                return;
            case "2":
                return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
            case "3":
                return a.years[0] - b.years[0];
            case "4":
                return b.years[0] - a.years[0];
            case "5":
                return a.rating - b.rating;
            case "6":
                return b.rating - a.rating;
            default:
                return;
        }
    }
    const sortedShows = [...shows].sort((a, b) => sorting(a, b, sort));
    

    return (
        <div className="px-6 md:px-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                    <img src={`img/logo_hor_${theme.theme === "dark" ? 'light' : 'dark'}.png`} alt={theme.name}className="block max-w-60 md:max-w-96 mx-auto" />
                    <div className="flex flex-col md:flex-row w-full items-end gap-4 md:gap-6 mb-4">
                        <div className="md:pr-16">
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
                                <option value="2" className="bg-bodycolor">{t('sort.byName')} &#8595;</option>
                                <option value="3" className="bg-bodycolor">{t('sort.byYear')} &#8593;</option>
                                <option value="4" className="bg-bodycolor">{t('sort.byYear')} &#8595;</option>
                                <option value="5" className="bg-bodycolor">{t('sort.byRating')} &#8593;</option>
                                <option value="6" className="bg-bodycolor">{t('sort.byRating')} &#8595;</option>
                            </select>
                        </div>
                    </div>
                    {!error.status ?
                    (<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        {sortedShows.length > 0 && sortedShows.slice(startPost, endPost).map((show) => (
                            <ShowCard key={show.id} show={show}></ShowCard>
                        ))}
                    </div>)
                    : (<div className="p-12 text-center text-error">
                        {error.message}
                    </div>)
                    }
                    <Pagination t={t} postsPerPage={postsPerPage} length={shows.length} currentPage={currentPage.toString()} link="/{0}"></Pagination>
                </div>
                <div className="md:border-l border-darkcolor">
                    <GenresWidget t={t}></GenresWidget>
                </div>
            </div>
        </div>
    );
}