/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui';
import theme from './theme.ts';
import './App.css';
import MainColumn from './MainColumn';

const App = () => (
  <ThemeProvider theme={theme}>
    <div sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          background: 'var(--main)',
          zIndex: '-1',
        }}
      />
      <MainColumn />
    </div>
  </ThemeProvider>
);

export default App;
