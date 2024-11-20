import React from "react";

export default function Data({t, shows, error}){

    const pretty = JSON.stringify(shows, undefined, 3);

    return(
        <div className="px-6 pb-4">
            {!error.status ?
                (<>
                    <h1 className="text-2xl text-titlecolor mb-4">{t('data')}</h1>
                    <div className="p-2 pr-6 overflow-auto border border-darkcolor rounded-md relative" style={{height:'calc(100vh - 13rem)'}}>
                        <div className="whitespace-break-spaces font-mono text-xs absolute">
                            {pretty}
                        </div>
                    </div>
                </>)
                : (<div className="p-12 text-center text-error">
                    {error.message}
                </div>)
            }
        </div>
    );
}