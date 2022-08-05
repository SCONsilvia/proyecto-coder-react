import './App.css';
import Header from './components/Header/Header';//importando componente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useContext} from "react"
import { CartContextProvide } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvide>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting = "Productos"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting = "Productos"/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvide>
    </div>
  );
}

export default App;
