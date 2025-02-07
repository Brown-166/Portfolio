import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import './i18n'

import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng);
  }
  return (
    <>
      <Navbar 
        ptChange={() => changeLanguage('pt')}
        enChange={() => changeLanguage('en')}
        mainProjects={t('navbar.mainProjects')} 
        latestProjects={t('navbar.latestProjects')}
        technologies={t('navbar.technologies')}
        showAllTech={t('navbar.showAllTech')}
        searchBar={t('navbar.searchBar')}
        searchButton={t('navbar.searchButton')}
        contact={t('navbar.contact')}
       />
       <Outlet />
    </>
  )
}

export default App
