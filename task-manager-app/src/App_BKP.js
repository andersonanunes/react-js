import './App.css';
import { useState } from 'react';


import Name from './components/Names';
import People from './components/People';
import Frase from './components/Frase';
import List from './components/List';
import Eventos from './components/Eventos';
import Forms from './components/Forms';
import Condicional from './components/Condicional';
import ListArray from './components/ListArray';
import StateLift from './components/StateLift';
import Saudacao from './components/Saudacao';

function App() {
  
  const url = 'https://via.placeholder.com/150'
  const nome = "Anderson Nunes"

  const [ nomeLift, setNome ] = useState()  
  
  const meusItens = [ 'react', 'vue', 'angular' ];

  return (
    <div className="App">

      <h1>Olá React!</h1>

      {/* <Frase />
      <Frase />
      <Frase />

      <Name nome={nome} />
      <People 
        nome="Anderson Nunes" 
        idade="50" 
        profissao="Engenheiro de Software" 
        foto={url} 
      />

      <List />

      <h1>TESTANDO EVENTOS!</h1>
      <Eventos />
      <Forms />

      <h1>RENDERIZAÇÃO CONDICIONAL</h1>
      <Condicional />

      <h1>RENDERIZAÇÃO DE LISTAS</h1>
      <ListArray itens = {meusItens} /> */}

      <h1>STATE LIFT</h1>
      <StateLift setNome = {setNome}/>
      <Saudacao nomeLift = {nomeLift} />


    </div>
  );
}

export default App;
