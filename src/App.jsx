import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import './i18n'
import Header from './components/Header';

function App() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng);
  }
  return (
    <>
      <button onClick={() => changeLanguage('pt')}>Português</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <Header texto1={t('texto1')}/>
    </>
  )
}

export default App
