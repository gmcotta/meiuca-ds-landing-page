import Divider from '../components/Divider';
import AppCards from '../sections/Cards';
import AppContact from '../sections/Contact';
import AppFooter from '../sections/Footer';
import AppHeader from '../sections/Header';
import AppHomeBanner from '../sections/HomeBanner';
import AppScrollRotation from '../sections/ScrollRotation';
import { useTheme } from '../ThemeContext';

import './App.scss';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" brand={theme.brand} theme="tema-1" mode={theme.mode}>
      <AppHeader />
      <AppHomeBanner />
      <AppCards />
      <AppScrollRotation />
      <Divider />
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default App;
