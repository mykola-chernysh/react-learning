import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
    const {chapterName} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            <h1>{chapterName ? chapterName : 'Rick & Morty'}</h1>
        </div>
    );
};

export {Header};
