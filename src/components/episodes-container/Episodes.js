import React, {useEffect, useState} from 'react';

import {episodesService} from "../../services";
import {Episode} from "./Episode";
import css from './Episodes.module.css';
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [pagination, setPagination] = useState({prev: null, next: null})

    useEffect(() => {
        episodesService.getAll((query.get('page'))).then(({data}) => {
            setEpisodes(data.results);
            setPagination({prev: data.info.prev, next: data.info.next})
        });
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev;
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev;
        })
    }

    return (
       <div>
           <div className={css.Episodes_buttons}>
               <button disabled={!pagination.prev} onClick={prev}>Prev</button>
               <button disabled={!pagination.next} onClick={next}>Next</button>
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