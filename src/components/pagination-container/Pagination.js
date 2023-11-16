import React from 'react';
import {useSelector} from "react-redux";

import css from "../episodes-container/Episodes/Episodes.module.css";

const Pagination = ({setQuery}) => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);

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
            <div className={css.Episodes_buttons}>
                <button disabled={!prevPage} onClick={prev}>Prev</button>
                <button disabled={!nextPage} onClick={next}>Next</button>
            </div>
    );
};

export {Pagination};