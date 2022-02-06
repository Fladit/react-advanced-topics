import React from 'react';
import logo from "./utils/logo.svg";
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.root}>
            <header className={styles.rootHeader}>
                <img src={logo} className={styles.rootLogo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles.rootLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default MainPage;