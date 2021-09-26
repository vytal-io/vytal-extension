import Github from './Github';
import MainColumn from './MainColumn';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <Github />
    <div className="background" />
    <MainColumn />
  </div>
);

export default App;
