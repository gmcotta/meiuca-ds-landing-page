import React, { useEffect, useState } from 'react';

import '@gmcotta/design-system-core/dist/components/header';
import '@gmcotta/design-system-core/dist/components/heading';
import '@gmcotta/design-system-core/dist/components/radio';
import '@gmcotta/design-system-core/dist/components/radio-group';
import '@gmcotta/design-system-core/dist/components/switch';

import { useTheme } from '../../ThemeContext';

export default function AppHeader() {
  const { theme, handleTheme } = useTheme();
  const [mode, setMode] = useState('light');
  const [actualTheme, setActualTheme] = useState('tema-1');
  
  useEffect(() => {
    handleTheme(actualTheme, theme.brand, mode);
  }, [mode, actualTheme]);

  useEffect(() => {
    document.querySelector('.change-mode')
      .addEventListener(
        'dscChange', 
        (evt) => setMode(!evt.detail.checked ? 'light' : 'dark')
      );
    document.querySelector('.theme-radio-group')
      .addEventListener(
        'dscChange',
        (evt) => setActualTheme(evt.detail.value)
      );
  }, []);

  return (
    <header className='header'>
      <div className="grid container grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className='col-span-12'>
          <dsc-header>
            <div className='header-content'>
              <dsc-heading class="only-mobile" level="h2" size="xs">
                Trocar tema da Landing Page
              </dsc-heading>
              <dsc-radio-group class="theme-radio-group">
                <dsc-radio label="Tema 01" value="tema-1" checked></dsc-radio>
                <dsc-radio label="Tema 02" value="tema-2"></dsc-radio>
              </dsc-radio-group>
              <dsc-heading class="only-mobile" level="h2" size="xs">
                Ativar Dark Mode
              </dsc-heading>
              <dsc-switch class="change-mode" label="Dark"></dsc-switch>
            </div>
          </dsc-header>
        </div>
      </div>
    </header>
  );
}