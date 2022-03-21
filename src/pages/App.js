import { useTheme } from '../ThemeContext';
import './App.css';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" brand={theme.brand} theme="tema-1" mode={theme.mode}>
      <div className="grid container grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        oi
      </div>
    </div>
  );
}

export default App;
