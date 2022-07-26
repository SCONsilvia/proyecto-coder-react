import './App.css';
import Header from './components/Header/Header';//importando componente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos`);
  };

  return (
    <div className="App">
      <Header/>
      <ItemListContainer greeting = "Productos"/>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
