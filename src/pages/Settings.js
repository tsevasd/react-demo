import React from "react";

export default function Settings({t}){
    return(
        <div className="px-6 pb-4">
            <h1 className="text-2xl text-titlecolor">{t('header.menu.settings')}</h1>
        </div>
    );
}