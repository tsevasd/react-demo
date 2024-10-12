import ThemeContext from "./ThemeContext";
import { React, useState } from "react";

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState({
        name: "MyTV Shows",
        theme: "dark",
        lang: "en",
        languages: ["en", "el"],
        sidebar: "closed",
        share: {
            facebook: true,
            twitter: true,
            linkedin: false,
            viber: true,
            whatsapp: true,
            email: true
        }
    });

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme.theme === 'dark' ? { ...prevTheme, 'theme': 'light' } : { ...prevTheme, 'theme': 'dark' } ))
    }

    const toggleSidebar = () => {
        setTheme(prevTheme => (prevTheme.sidebar === 'closed' ? { ...prevTheme, 'sidebar': 'open' } : { ...prevTheme, 'sidebar': 'closed' } ))
    }

    const updateName = (name) => {
        setTheme(prevTheme => { return {  ...prevTheme,  'name': name }} )
    }

    return (
        <ThemeContext.Provider value={{theme, toggleSidebar, toggleTheme, updateName}}>
            <div className={`min-h-screen w-full ${theme.theme}`}>
                <div className="min-h-screen w-full bg-bodycolor transition text-textcolor flex flex-row">
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )
}