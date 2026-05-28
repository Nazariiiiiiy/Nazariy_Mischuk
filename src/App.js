import { useState, useEffect } from 'react';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewBlock from './components/PreviewBlock';

function App() {

  const [settings, setSettings] = useState({
    theme: 'light',
    username: '',
    language: 'ua'
  });

  const translations = {
    ua: {
      title: 'Налаштування сторінки',
      theme: 'Тема',
      language: 'Мова',
      username: "Ім'я користувача",
      light: 'Світла',
      dark: 'Темна'
    },

    en: {
      title: 'Page Settings',
      theme: 'Theme',
      language: 'Language',
      username: 'Username',
      light: 'Light',
      dark: 'Dark'
    },

    pl: {
      title: 'Ustawienia strony',
      theme: 'Motyw',
      language: 'Język',
      username: 'Nazwa użytkownika',
      light: 'Jasny',
      dark: 'Ciemny'
    }
  };

  const text = translations[settings.language];

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  const changeTheme = () => {
    setSettings({
      ...settings,
      theme: settings.theme === 'light' ? 'dark' : 'light'
    });
  };

  const changeUsername = (e) => {
    setSettings({
      ...settings,
      username: e.target.value
    });
  };

  const changeLanguage = (e) => {
    setSettings({
      ...settings,
      language: e.target.value
    });
  };

  return (
    <div
      style={{
        backgroundColor: settings.theme === 'light' ? 'white' : '#222',
        color: settings.theme === 'light' ? 'black' : 'white',
        minHeight: '100vh',
        padding: '20px'
      }}
    >

      <Header title={text.title} />

      <SettingsPanel
        settings={settings}
        text={text}
        changeTheme={changeTheme}
        changeUsername={changeUsername}
        changeLanguage={changeLanguage}
      />

      <PreviewBlock
        settings={settings}
        text={text}
      />

    </div>
  );
}

export default App;