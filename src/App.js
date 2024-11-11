
import './App.css';
import Intro from './componentes/Intro';
import Menu from './componentes/Menu';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';
import Sobremim from './componentes/Sobremim';

function App() {
  return (
    <div className="App">
      <Menu />
      <Intro />
      <Sobremim/>
      <Projetos />
      <Rodape />
    </div>
  );
}

export default App;
