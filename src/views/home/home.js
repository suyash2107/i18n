import React, { useState } from 'react';
import I18n from '../../utils/I18n.js';
import './home.css'; 

function Home() {
  const [language, setLang] = useState(localStorage.getItem('language') || 'en');

  return (
    <div className="container">
      <h1>{I18n('welcomeMessage')}</h1>
      <p>{I18n('normalMessage')}</p>
      <h3>{I18n('greetingMessage')}</h3>

      <select
        defaultValue={localStorage.getItem('language')}
        onChange={(e) => {
          localStorage.setItem('language', e.target.value);
          window.location.reload();
        }}
      >
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default Home;
