import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";
import { IconSun, IconMoon, IconLogout, IconArrowDoubleRight, IconHeart, IconFilm, IconData, IconSettings, IconClose } from "../icons/all";

export default function Sidebar({t}){

    const { user } = useContext(UserContext);
    const { theme, toggleSidebar, toggleTheme } = useContext(ThemeContext);

    return(
        <>
        <div className={`hidden z-20 w-full ${theme.sidebar === "open" ? 'translate-x-0 md:basis-64' : '-translate-x-full md:basis-16'} md:translate-x-0 grow-0 shrink-0 h-screen transition-all md:block md:w-auto`}></div>
        <div className={`fixed z-20 w-full ${theme.sidebar === "open" ? 'translate-x-0 md:basis-64' : '-translate-x-full md:basis-16'} md:translate-x-0 grow-0 shrink-0 h-screen transition-all md:w-auto`}>
            <div className="bg-black/50 fixed inset-0 z-10 md:hidden"
                    onClick={toggleSidebar}>
                <button
                    className="md:hidden absolute z-10 right-4 top-4 w-14 h-14 bg-bodycolor rounded-full"
                >
                    <span className="absolute inset-0 w-full h-full bg-area/10 rounded-full flex items-center justify-center">
                        <IconClose iconClassName="w-8 h-8 stroke-primary" />
                    </span>
                </button>
            </div>
            <div className={`bg-bodycolor ${theme.sidebar === "open" ? 'w-64' : 'w-16'} fixed top-0 left-0 bottom-0 h-full border-r border-r-darkcolor flex flex-col transition-all pb-2 z-20`}>
                <div className="pt-3 relative">
                    <Link
                        to="/"
                        className="block m-2 mr-3 overflow-hidden"
                        onClick={() => toggleSidebar({mobile:true})}>
                        <img src={`/img/logo_hor_${theme.theme === "dark" ? 'light' : 'dark'}.png`} alt={theme.name} className="h-12 w-auto max-w-none" />
                    </Link>
                    <button
                        className="hidden md:flex absolute z-10 -right-4 top-0 w-8 h-8 items-center justify-center bg-bodycolor border border-textcolor border-t-0 pb-1 rounded-b-full opacity-75 hover:opacity-100 transition-all"
                        onClick={toggleSidebar}
                    >
                        <IconArrowDoubleRight iconClassName={`w-5 h-5  stroke-textcolor transition-all ${theme.sidebar === "open" ? "rotate-180" : "ml-1"}`}></IconArrowDoubleRight>
                    </button>
                </div>
                <ul className="p-2">
                    <li>
                        <Link
                            to="/favorites"
                            className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left" 
                            onClick={() => toggleSidebar({mobile:true})}>
                            <span className="inline-block relative">
                                <IconHeart iconClassName="w-8 stroke-secondary inline"></IconHeart>
                                <span className={`absolute top-0 -right-1 w-4 h-4 bg-bodycolor border border-textcolor rounded-full flex items-center justify-center text-xs transition ${theme.sidebar === "open" ? 'opacity-0' : 'opacity-1'}`}>{user.favorites.length}</span>
                            </span>
                            <span className="ml-3 align-middle">{ t('header.menu.favorites') } ({user.favorites.length})</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/genres"
                            className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left"
                            onClick={() => toggleSidebar({mobile:true})}>
                            <IconFilm iconClassName="w-8 stroke-secondary inline"></IconFilm>
                            <span className="ml-3 align-middle">{ t('header.menu.genres') }</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/data"
                            className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left"
                            onClick={() => toggleSidebar({mobile:true})}>
                            <IconData iconClassName="w-8 stroke-secondary inline"></IconData>
                            <span className="ml-3 align-middle">{ t('data') }</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left"
                            onClick={() => toggleSidebar({mobile:true})}>
                            <IconSettings iconClassName="w-8 stroke-secondary inline"></IconSettings>
                            <span className="ml-3 align-middle">{ t('header.menu.settings') }</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            className="block w-full h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left"
                            onClick={toggleTheme}>
                            { theme.theme === "dark" ? <IconSun iconClassName="w-8 h-8 stroke-secondary inline"></IconSun> : <IconMoon iconClassName="w-8 h-8 stroke-primary-variant inline"></IconMoon> }
                            <span className="ml-3 align-middle">{ theme.theme === "dark" ? t('header.menu.changeThemeLight') : t('header.menu.changeThemeDark') }</span>
                        </button>
                    </li>
                </ul>
                <button className="w-12 h-12 mt-auto ml-2 flex items-center justify-center rounded-full hover:bg-area/10 transition-colors">
                    <IconLogout iconClassName="w-8 h-8 stroke-error"></IconLogout>
                </button>
            </div>
        </div>
        </>
    );
}