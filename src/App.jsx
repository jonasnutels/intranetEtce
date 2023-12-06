import './App.css';
import CarouselDestaques from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';
import Servicos from './Components/ListaServicos/Servicos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <CarouselDestaques />
        <Servicos />
      </div>
    </div>
  );
}

export default App;
