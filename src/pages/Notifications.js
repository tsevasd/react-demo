import React, { useContext, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { messageDateTime } from "../utilities/timeUtilities";
import UserContext from "../context/UserContext";

export default function Notifications({t}){

    const { user, dispatchUser } = useContext(UserContext);

    // get the message's timestamp from URL, as ID to display it at once
    const {message} = useParams();
    const currentMessageDate = (typeof message === "undefined") ? 0 : parseInt(message);

    // find message
    const currentMessage = user.notifications.messages.find(msg => msg.date === currentMessageDate);
    //console.log(currentMessageDate, currentMessage, typeof currentMessage !== "undefined");
    useEffect(() => {
        if (typeof currentMessage !== "undefined") {
            //console.log({type: "READ_MESSAGE", date: currentMessageDate})
            //console.log(user, 'then calling dispatch');
            dispatchUser({ type: "READ_MESSAGE", date: currentMessageDate });
            
            /*var messages = user.notifications.messages.map(m => {
                return {...m, read: m.date === currentMessageDate ? true : m.read };
            });
            var alert = messages.find(m => m.read === false) != null;
            console.log(alert, messages);
            user.notifications = { alert: alert, messages: messages };*/
        }
    }, [currentMessageDate]);

    return(
        <div className="px-6 pb-4 pt-2">
            <h1 className="text-2xl text-titlecolor mb-6">{t('header.menu.notifications')}</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="border-r border-darkcolor">
                    {user.notifications.messages.map(msg => (
                        <Link 
                            key={msg.date}
                            className={`block px-6 py-3 border-b border-darkcolor transition ${!msg.read && 'font-bold text-titlecolor bg-area/10 hover:bg-area/20'} hover:bg-area/20`}
                            to={`/notifications/${msg.date}`}>
                            <div className="flex w-full">
                                <div className={`text-lg font-bold ${!msg.read && 'text-secondary'}`}>{msg.title}</div>
                                <div className="text-sm text-right ml-auto">{messageDateTime(msg.date)}</div>
                            </div>
                            <div className="whitespace-nowrap overflow-hidden text-ellipsis">{msg.text}</div>
                        </Link>
                    ))}
                </div>
                {typeof currentMessage !== "undefined" && (
                    <div>
                        <h3 className="text-xl text-titlecolor mb-2">{currentMessage.title}</h3>
                        <div className="text-sm mb-4">{messageDateTime(currentMessage.date)}</div>
                        <div>{currentMessage.text}</div>
                    </div>
                )}
            </div>
        </div>
    );
}