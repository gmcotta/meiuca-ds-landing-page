import React, { createContext, useContext, useState, useEffect } from 'react';

/* eslint import/no-webpack-loader-syntax: off */
import tema1Light from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-1/light.css';
import tema1Dark from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-1/dark.css';
import tema2Light from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-2/light.css';
import tema2Dark from '!!raw-loader!@gmcotta/design-tokens/dist/css/marca-a/tema-2/dark.css';

export const ThemeContext = createContext();

export function ThemeProvider({
  brand, themeName, mode, children
}) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const tagStyle = document.createElement('style');
    tagStyle.setAttribute('id', 'theme-style');
    document.head.appendChild(tagStyle);
  }, []);

  useEffect(() => {
    changeTheme(brand, theme, mode);
  }, [brand, theme, mode, changeTheme]);

  // TODO: verificar a performance, pois está renderizando a página toda hora
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function changeTheme(brand, theme, mode) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.innerHTML = '';
    if (theme === 'theme-1') {
      mode === 'dark' 
        ? themeStyle.appendChild(document.createTextNode(tema1Dark))
        : themeStyle.appendChild(document.createTextNode(tema1Light));
    }
    if (theme === 'theme-2') {
      mode === 'dark' 
        ? themeStyle.appendChild(document.createTextNode(tema2Dark))
        : themeStyle.appendChild(document.createTextNode(tema2Light));
    }
    setTheme({
      brand,
      themeName,
      mode
    });
  }

  function handleTheme(newTheme = themeName, newBrand = brand, newMode = mode) {
    changeTheme(newTheme, newBrand, newMode);
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
