import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";
import SearchWidget from "./SearchWidget";
import UserMenu from "./UserMenu";
import { IconNotification } from '../icons/all';
import { messageDateTime } from "../utilities/timeUtilities";

export default function Header({t, handleChangeLanguage, showsShort}){

    const { theme } = useContext(ThemeContext);
    const { user, dispatchUser } = useContext(UserContext);

    return(
        <header className="w-full flex flex-row items-center px-6 py-4">
            <ul className="flex flex-row gap-4">
                <li><Link to="/">{ t('header.menu.home') }</Link></li>
                <li><Link to="/top-10">{ t('header.menu.top10') }</Link></li>
            </ul>
            <SearchWidget t={t} showsShort={showsShort}></SearchWidget>
            <div className="ml-auto flex gap-2">
                <Menu>
                    <MenuButton className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-area/10 data-[open]:bg-area/20">{ theme.lang.toUpperCase() }</MenuButton>
                    <MenuItems transition anchor="bottom" className="origin-top bg-bodycolor rounded-lg border border-primary text-center data-[closed]:scale-95 data-[closed]:opacity-0 transition z-10 w-16">
                        {theme.languages.map((language, i) => (
                            <MenuItem key={i}>
                                <a
                                    className="block py-2 hover:bg-area/10"
                                    key={i}
                                    onClick={() => { handleChangeLanguage(language, theme) }}>
                                        {language.toUpperCase()}
                                </a>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
                <Menu>
                    <MenuButton className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-area/10 data-[open]:bg-area/20 relative">
                        <IconNotification iconClassName="w-6 h-6 stroke-secondary"></IconNotification>
                        {user.notifications.alert && <div className="w-2 h-2 rounded-full bg-error absolute top-2 right-2"></div>}
                    </MenuButton>
                    <MenuItems transition anchor="bottom" className="origin-top-right bg-bodycolor rounded-lg border border-primary data-[closed]:scale-95 data-[closed]:opacity-0 transition z-10 w-96">
                        {user.notifications.messages.map((message, i) => (
                        <MenuItem key={i}>
                            <Link
                                to={`/notifications/${message.date}`}
                                className={`block py-2 px-4 border-b border-primary last:border-none ${message.read ? 'opacity-75' : 'bg-area/10 text-titlecolor font-bold'} hover:bg-area/20 hover:opacity-100 transition-all`}>
                                <div className={`font-bold ${!message.read && 'text-secondary'}`}>{message.title}</div>
                                <div className="text-xs">{messageDateTime(message.date)}</div>
                                <div className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{message.text}</div>
                            </Link>
                        </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
                <UserMenu user={user} t={t}></UserMenu>
                {/*<Menu>
                    <MenuButton className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-area/10 border border-white data-[open]:bg-area/20 relative">
                        <IconUser iconClassName="w-6 h-6 stroke-secondary"></IconUser>
                    </MenuButton>
                    <MenuItems transition className="fixed right-0 top-0 h-full bottom-0 w-96 opacity-0 bg-bodycolor border-l border-primary transition duration-300 translate-x-full data-[open]:translate-x-0 data-[open]:opacity-100">
                        <MenuItem>
                        <div className="block py-1 hover:bg-area/10">EN</div>
                        </MenuItem>
                        <MenuItem>
                        <div className="block py-1 hover:bg-area/10">EL</div>
                        </MenuItem>
                    </MenuItems>
                </Menu>*/}
            </div>
            {/*<Menu>
                <MenuButton className="data-[open]:text-primary-variant">My account</MenuButton>
                <MenuItems transition anchor="bottom" className="w-52 origin-top-right rounded-xl border border-gray-600 bg-gray-900 p-1 text-sm/6 text-white transition duration-150 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-10">
                    <MenuItem>
                    <a className="block data-[focus]:bg-blue-100" href="/settings">
                        Settings
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a className="block data-[focus]:bg-blue-100" href="/support">
                        Support
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a className="block data-[focus]:bg-blue-100" href="/license">
                        License
                    </a>
                    </MenuItem>
                </MenuItems>
            </Menu>*/}
        </header>
    );
}