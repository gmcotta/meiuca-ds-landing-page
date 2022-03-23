import AppCards from '../sections/Cards';
import AppHeader from '../sections/Header';
import AppHomeBanner from '../sections/HomeBanner';
import { useTheme } from '../ThemeContext';

import './App.scss';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" brand={theme.brand} theme="tema-1" mode={theme.mode}>
      <AppHeader />
      <AppHomeBanner />
      <AppCards />
    </div>
  );
}

export default App;
