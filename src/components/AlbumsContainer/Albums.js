import React, {useEffect, useState} from 'react';

import {albumService} from "../../services/albumService";
import {Album} from "./Album";
import styles from './Albums.module.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (
        <div className={styles.Albums}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {Albums};