import { Route, Routes } from 'react-router-dom';
import { Inicio } from "./components/Inicio"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
      </Routes>

    </div>
  );
}

export default App;
