import React, { useState } from 'react';
// import Button from '../components/Button';
import Crono from '../components/Cronometro';
import Form from '../components/Form';
import Lista from '../components/List';
import ITarefa from '../types/tarefa';


function App() {

  
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className="App">
      <Form setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Crono />
    </div>
  );
}

export default App;
// function useState(arg0: { tarefa: string; tempo: string; }[]): [any, any] {
//   throw new Error('Function not implemented.');
// }

