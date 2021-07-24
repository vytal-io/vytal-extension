import Particles from 'react-tsparticles';
import particlesOptions from '../particles.json';
import Github from './Github';
import MainColumn from './MainColumn';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <Github />
    <Particles options={particlesOptions} />
    <MainColumn />
  </div>
);

export default App;
