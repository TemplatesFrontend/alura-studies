import React, { useState } from 'react';
// import Button from '../components/Button';
import Crono from '../components/Cronometro';
import Form from '../components/Form';
import Lista from '../components/List';
import ITarefa from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa (tarefaSelecionda: ITarefa) {
    setSelecionado(tarefaSelecionda);
  }

  return (
    <div className="App">
      <Form setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}       
      />
      <Crono />
    </div>
  );
}

export default App;


