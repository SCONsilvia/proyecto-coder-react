import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';//importando componente
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CartWidget/>
        <ItemListContainer greeting = "Productos"/>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
