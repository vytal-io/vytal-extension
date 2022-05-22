import { ThemeProvider } from 'theme-ui';
import theme from './theme.ts';
import './App.css';
import MainColumn from './MainColumn';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <div className="background" />
      <MainColumn />
    </div>
  </ThemeProvider>
);

export default App;
