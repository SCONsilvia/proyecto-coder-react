import './App.css';
import Header from './components/Header/Header';//importando componente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/CartListContainer/CartListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvide } from './context/CartContext';
import Form from './components/Form/Form';

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
            <Route path="/cart" element={<CartListContainer/>}/>
            <Route path="/checkout" element={<Form/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvide>
    </div>
  );
}

export default App;
