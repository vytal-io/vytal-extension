import Particles from 'react-tsparticles';
import particlesOptions from '../particles.json';
import MainColumn from './MainColumn';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <Particles options={particlesOptions} />
    <MainColumn />
  </div>
);

export default App;
