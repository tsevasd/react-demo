import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import ShowCard from '../components/ShowCard';
import GenresWidget from '../components/GenresWidget';
import Pagination from '../utilities/Pagination';

export default function Home({t, shows}) {

    const { theme } = useContext(ThemeContext);

    const postsPerPage = 8;
    const urlParams = useParams();
    const currentPage = (typeof urlParams.page === "undefined") ? 1 : Number(urlParams.page);
    const startPost = (currentPage - 1) * postsPerPage;
    const endPost = startPost + postsPerPage;

    return (
        <div className="px-8 py-4">
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                    <img src={`img/logo_hor_${theme.theme}.png`} alt={theme.name} className="block max-w-lg mx-auto" />
                    <h1 className="font-bold text-lg mb-2">{t('home.title')}</h1>
                    <div className="text-sm mb-4">{t('home.text')}</div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        {shows.slice(startPost, endPost).map((show) => (
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