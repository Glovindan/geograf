import React from 'react';

import { Header } from './components/Header/Header';
import { MainPage } from './Pages/MainPage/MainPage';
import { Loader } from './components/Loader/Loader';

import { AboutPage } from './Pages/AboutPage/AboutPage';
import { AboutMineral } from './components/AboutMineral/AboutMineral';
import { AdminPage } from './Pages/AdminPage/AdminPage';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        {/*<Loader />*/}
         <MainPage />
        {/* <AboutMineral /> */}
        {/*<AdminPage />*/}
      </div>
    </div>
  );
}

export default App;
