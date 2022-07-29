import './App.css';
import Header from './components/Header/Header';//importando componente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = "Productos"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting = "Productos"/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
