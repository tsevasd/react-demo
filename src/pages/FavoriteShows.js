import React, {useContext, useReducer} from "react";
import UserContext from "../context/UserContext";
import userReducer from "../reducers/userReducer";
import ShowCard from "../components/ShowCard";

export default function FavoriteShows({t, shows}){

    const { userInitialState, userInitialState2, setUser } = useContext(UserContext);
    const [user, dispatch] = useReducer(userReducer, userInitialState2);

    return(
        <div className="px-6 pb-4">
            <h1 className="text-xl mb-4">{t('shows.favorites')}</h1>
            <div className="grid grid-cols-6 gap-8">
                {user.favorites.map((id) => {
                    // find show by id
                    const show = shows.find(m => m.id === id);
                    return(<ShowCard show={show}></ShowCard>);
                })}
            </div>
        </div>
    );
};