import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from './constants/routes';

import { Header } from './components/Header/Header';
import { MainPage } from './Pages/MainPage/MainPage';

import { AboutMineral } from './components/AboutMineral/AboutMineral';
import { AdminPage } from './Pages/AdminPage/AdminPage';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { MapPage } from './Pages/MapPage/MapPage';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <Router>
          <Header />
          <Routes>
            <Route path={ROUTES.MAIN_PAGE} exact={true} element={<MainPage />} />
            <Route path={ROUTES.MINERAL_PAGE + '/:id'} element={<AboutMineral />} />
            <Route path={ROUTES.MAP_PAGE} element={<MapPage />} />
            <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
            <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />

            <Route path='*' element={<Navigate to={ROUTES.ERROR_PAGE} />}/>
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
