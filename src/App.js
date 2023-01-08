import './App.css';
import { Testimonio } from './components/testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>          
        <h1>Estas son algunas reseñas</h1>
        <Testimonio 
          nombre='Joao'
          pais='Peru'
          cargo='Ingeniero'
          empresa='TheUF'
          testimonio='Este es mi testimonio.'
        />
      </div>
    </div>
  );
}

export default App;