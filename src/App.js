import logo from './logo.svg';
import './App.css';

//aqui eu importei meu componente do HelloWorld ver a div
import HelloWorld from './components/HelloWorld'

//aqui e so para inportar coisas

function App() {
//aqui dentro nos usa nossa logica ou function

  const name = 'gabriel'

//processando tambem 
  const newName = name.toUpperCase()

  //posso criar soma tambem
  //posso tambem criar uma function aqui dentro 
  function sum(a, b){
    return a + b//se quisesse retornar eu uso dentro da div
  }
//tambem temos os atributos que vem de outro lugar ou site

const url = 'https://via.placeholder.com/150'
//vou colocar essa imagem no meu codigo na div

  return (
    <div className="App">
     <h2>Alterando o jsx</h2>
     <p> Ola, {newName}</p>
     <p>soma: {2+2}</p>
     <p>soma: {sum(4,2)}</p>
     <img src={url} alt=""></img>
     <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
