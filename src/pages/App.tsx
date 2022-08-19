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
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(
      tarefa=>({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionda.id ? true : false
      })
    ));
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


