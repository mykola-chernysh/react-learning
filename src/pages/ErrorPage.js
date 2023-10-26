import React from 'react';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.ErrorPage}>
            <span>Error!</span>
            <span>Something went wrong!</span>
        </div>
    );
};

export {ErrorPage};