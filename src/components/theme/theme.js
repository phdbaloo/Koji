import React from 'react';
import './theme.css';

export default class Theme extends React.Component {
    render() {
        return(
            <div className="div-theme">
                <button onClick={() => setTheme(themes.dark)}></button>
                <button onClick={() => setTheme(themes.light)}></button>
            </div>
        )
    }
}

export function setTheme(color) {
        document.documentElement.style.setProperty('--maincolor', color.maincolor)
        document.documentElement.style.setProperty('--textcolor', color.textcolor)
        document.documentElement.style.setProperty('--seccolor', color.seccolor)
        document.documentElement.style.setProperty('--postbg', color.postbg)
        localStorage.setItem('theme', color.name);
}
export const themes = ({
    dark: {
        name:'dark',
        maincolor: 'rgba(51, 51, 51, 0.952)',
        textcolor: '#c7c6c6',
        seccolor: '#4e4e4e',
        postbg: '#363636',
    },
    light: {
        name:'dark',
        maincolor: 'rgba(224, 224, 224, 0.952)',
        textcolor: '#1a1a1a',
        seccolor: '#c2c2c2',
        postbg: '#c7c7c7',
    }
})
