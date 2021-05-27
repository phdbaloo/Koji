import React from"react";
import Blog from './components/blog/blog';
import Theme from './components/theme/theme';
import {setTheme, themes} from './components/theme/theme';

import './App.css'

export default function App() {

  if (localStorage.getItem('theme')) {
    var theme = localStorage.getItem('theme');
    if (theme === themes.dark.name) {
        new setTheme(themes.dark);
    } else if (theme === themes.light.name) {
        new setTheme(themes.light)
    }
}
  return(
      <div className='app'>
        <div className='app-top'>
          <h1>Hello Friend ❤</h1>
          <Theme/>
        </div>
        <Blog />
      </div>
  );
}