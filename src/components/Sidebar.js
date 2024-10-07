import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IconSun, IconMoon, IconLogout, IconArrowDoubleRight, IconHeart, IconFilm, IconSettings } from "../icons/all";

export default function Sidebar({t}){

    const { theme, toggleSidebar, toggleTheme } = useContext(ThemeContext);

    return(
        <div className={`${theme.sidebar === "open" ? 'basis-64' : 'basis-16'} grow-0 shrink-0 h-screen transition-all`}>
            <div className={`${theme.sidebar === "open" ? 'w-64' : 'w-16'} fixed top-0 left-0 bottom-0 h-screen border-r border-r-darkcolor flex flex-col transition-all pb-2`}>
                <div className="pt-3 relative">
                    <Link to="/" className="block m-2 mr-3 overflow-hidden">
                        <img src={`/img/logo_hor_${theme.theme === "dark" ? 'light' : 'dark'}.png`} alt={theme.name} className="h-12 w-auto max-w-none" />
                    </Link>
                    <button
                        className={`absolute z-10 -right-4 top-2 w-8 h-8 flex items-center justify-center bg-bodycolor border border-textcolor rounded-full opacity-50 hover:opacity-80 transition-all ${theme.sidebar === "open" ? "rotate-180" : ""}`}
                        onClick={toggleSidebar}
                    >
                        <IconArrowDoubleRight iconClassName="w-5 h-5 ml-1 stroke-textcolor"></IconArrowDoubleRight>
                    </button>
                </div>
                <ul className="p-2">
                    <li>
                        <Link to="/favorites" className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left">
                            <IconHeart iconClassName="w-8 stroke-secondary inline"></IconHeart>
                            <span className="ml-3 align-middle">{ t('header.menu.favorites') }</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/genres" className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left">
                            <IconFilm iconClassName="w-8 stroke-secondary inline"></IconFilm>
                            <span className="ml-3 align-middle">{ t('header.menu.genres') }</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="block mb-2 h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left">
                            <IconSettings iconClassName="w-8 stroke-secondary inline"></IconSettings>
                            <span className="ml-3 align-middle">{ t('header.menu.settings') }</span>
                        </Link>
                    </li>
                    <li>
                        <button className="block w-full h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left" onClick={toggleTheme}>
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
    );
}