import AppHeader from '../sections/Header';
import { useTheme } from '../ThemeContext';
import './App.css';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" brand={theme.brand} theme="tema-1" mode={theme.mode}>
      <AppHeader />
    </div>
  );
}

export default App;
