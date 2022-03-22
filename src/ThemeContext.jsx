import React, { createContext, useContext, useState, useEffect } from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import tema1Light from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-1/light.css';
import tema1Dark from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-1/dark.css';
import tema2Light from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-2/light.css';
import tema2Dark from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-2/dark.css';

export const ThemeContext = createContext();

export function ThemeProvider({
  brand,
  themeName,
  mode,
  children
}) {

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const tagStyle = document.createElement("style");
    tagStyle.setAttribute('id', 'theme-style');
    document.head.appendChild(tagStyle);
  }, [])

  useEffect(() => {
    changeTheme(brand, themeName, mode)
  }, [brand, themeName, mode])

  function changeTheme(brand, theme, mode) {
    const themeStyle = document.getElementById('theme-style');

    themeStyle.innerHTML = '';

    if(theme === 'tema-1'){
      (mode === 'dark')
        ? themeStyle.appendChild(document.createTextNode(tema1Dark))
        : themeStyle.appendChild(document.createTextNode(tema1Light));
    }
    if (theme === 'tema-2')  {
      (mode === 'dark')
        ? themeStyle.appendChild(document.createTextNode(tema2Dark))
        : themeStyle.appendChild(document.createTextNode(tema2Light));
    }

    setTheme({
      brand,
      themeName: theme,
      mode
    });
  }

  function handleTheme(newTheme = themeName, newBrand = brand, newMode = mode) {
    changeTheme(newBrand, newTheme, newMode);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {theme && children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}