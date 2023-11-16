import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './Episodes.module.css';
import {episodesActions} from "../../../redux";
import {Episode} from "../Episode";
import {Pagination} from "../../pagination-container";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAllEpisodes({page}));
    }, [dispatch, page]);

    return (
        <div>
            <div>
                <Pagination setQuery={setQuery}/>
            </div>
            <div className={css.Episodes}>
                {
                    episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
                }
            </div>
        </div>

    );
};

export {Episodes};