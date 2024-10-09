import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IconSun, IconMoon } from "../icons/all";

export default function Settings({t}){

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div className="px-6 pb-4">
            <h1 className="text-2xl text-titlecolor mb-8">{t('header.menu.settings')}</h1>
            <table>
                <tr>
                    <td className="pr-6 py-1 font-bold">{t('settings.changeTheme')}</td>
                    <td className="py-1">
                        <button className="block w-full h-12 p-2 rounded-full hover:bg-area/10 transition-colors overflow-hidden whitespace-nowrap text-left" onClick={toggleTheme}>
                            { theme.theme === "dark" ? <IconSun iconClassName="w-8 h-8 stroke-secondary inline"></IconSun> : <IconMoon iconClassName="w-8 h-8 stroke-primary-variant inline"></IconMoon> }
                            <span className="ml-3 align-middle">{ theme.theme === "dark" ? t('header.menu.changeThemeLight') : t('header.menu.changeThemeDark') }</span>
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}