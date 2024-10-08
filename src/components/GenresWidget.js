import React, { useContext, useReducer} from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import userReducer from "../reducers/userReducer";
import { nameToURL } from "../utilities/showsUtilities";

export default function GenresWidget({t}){
    
    const { userInitialState, userInitialState2, setUser } = useContext(UserContext);
    const [user, dispatch] = useReducer(userReducer, userInitialState2);

    return(
        <div className="px-4 pb-4">
            <h3 className="text-xl mb-4">{t('genres.favorites')}</h3>
            {user.favoriteGenres.map((genre) => (
                <Link
                    className="inline-block px-5 py-2 bg-area/10 hover:bg-area/20 transition-colors mr-2 mb-2 rounded-full"
                    to={`/genre/${nameToURL(genre)}`}
                    key={genre}
                >{genre}</Link>
            ))}
            <Link
                className="inline-block px-5 py-2 text-primary-variant-light bg-primary hover:opacity-90 transition-all mr-2 mb-2 rounded-full"
                to="/genres"
            >
                {t('genres.add')}
            </Link>
        </div>
    );
};