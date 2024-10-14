import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";
import { IconSun, IconMoon } from "../icons/all";

export default function Settings({t, handleChangeLanguage}){

    const { theme, toggleTheme, updateName } = useContext(ThemeContext);
    const {user, dispatchUser} = useContext(UserContext);

    const [themeName, setThemeName] = useState(theme.name);
    const [userName, setUserName] = useState(user.name);

    function handleThemeName(e){
        let newName = e.target.value;
        setThemeName(newName);
        updateName(newName)
    }

    function handleUserName(e){
        let newName = e.target.value;
        setUserName(newName);
        dispatchUser({ type: "UPDATE_VALUE", key: "name", value: newName });
    }

    return(
        <div className="px-6 pb-4 max-w-3xl">
            <h1 className="text-2xl text-titlecolor mb-4">{t('header.menu.settings')}</h1>
            <h3 className="pb-4 border-b border-darkcolor mb-4"><span className="text-secondary">{theme.name}</span> {t('settings.theme')} &amp; {t('settings.user')} <span className="text-secondary">{user.name}</span> {t('header.menu.settings')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="pr-6 py-2 font-bold">{t('settings.themeName')}</div>
                <div className="pb-2 md:pt-2">
                    <input type="text"
                        className="w-full px-4 py-2 text-black rounded-full"
                        value={themeName}
                        onChange={handleThemeName}
                    />
                </div>
                <div className="pr-6 py-2 font-bold">{t('settings.username')}</div>
                <div className="pb-2 md:pt-2">
                    <input type="text"
                        className="w-full px-4 py-2 text-black rounded-full"
                        value={userName}
                        onChange={handleUserName}
                    />
                </div>
                <div className="pr-6 py-2 font-bold">{t('settings.languages')}</div>
                <div className="pb-2 md:pt-2">
                    <div className="flex gap-2">
                        {theme.languages.map(language => (
                            <a
                                key={language}
                                className={`flex w-12 h-12 items-center justify-center rounded-full uppercase transition-colors ${language === theme.lang ? 'bg-primary text-primary-variant-light' : 'border-2 border-primary hover:bg-area/10'}`}
                                onClick={() => { handleChangeLanguage(language, theme) }}
                            >{language}</a>
                        ))}
                    </div>
                </div>
                <div className="pr-6 py-2 font-bold">{t('settings.currentTheme')}</div>
                <div className="pb-2 md:pt-2">
                    <div className="px-4 py-2 border-2 border-primary rounded-full uppercase">
                        {theme.theme}
                    </div>
                </div>
                <div className="pr-6 py-2 font-bold">{t('settings.changeTheme')}</div>
                <div className="pb-2 md:pt-2">
                    <button className="block w-full h-12 p-2 rounded-full bg-area/10 hover:bg-area/20 transition-colors overflow-hidden whitespace-nowrap text-left" onClick={toggleTheme}>
                        { theme.theme === "dark" ? <IconSun iconClassName="w-8 h-8 stroke-secondary inline"></IconSun> : <IconMoon iconClassName="w-8 h-8 stroke-primary-variant inline"></IconMoon> }
                        <span className="ml-3 align-middle">{ theme.theme === "dark" ? t('header.menu.changeThemeLight') : t('header.menu.changeThemeDark') }</span>
                    </button>
                </div>
                <div className="pr-6 py-2 font-bold">{t('settings.sidebarStatus')}</div>
                <div className="pb-2 md:pt-2">
                    <div className="px-4 py-2 border-2 border-primary rounded-full uppercase">
                        {theme.sidebar}
                    </div>
                </div>
            </div>
        </div>
    );
}