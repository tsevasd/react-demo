import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ShowCard from '../components/ShowCard';
import GenresWidget from '../components/GenresWidget';

export default function Home({t, shows}) {

  const { theme } = useContext(ThemeContext);

  return (
        <div className="px-8 py-4">
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                    <img src={`img/logo_hor_${theme.theme}.png`} alt={theme.name} className="block max-w-lg mx-auto" />
                    <h1 className="font-bold text-lg mb-2">{t('home.title')}</h1>
                    <div className="text-sm mb-4">{t('home.text')}</div>
                    <div className="grid grid-cols-4 gap-4">
                        {shows.map((show) => (
                            <ShowCard key={show.id} show={show}></ShowCard>
                        ))}
                    </div>
                </div>
                <div className="border-l border-darkcolor">
                    <GenresWidget t={t}></GenresWidget>
                </div>
            </div>
            <div className="flex jusify-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-area/10 hover:bg-area/20 transition-colors">{}</button>
            </div>
        </div>
  );
}