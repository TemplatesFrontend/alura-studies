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

  function finalizarTarefa() {
    if (selecionado)
    { 
      setSelecionado(undefined);
        setTarefas(tarefasAnteriores => 
          tarefasAnteriores.map(tarefa => {
            if (tarefa.id === selecionado.id) 
            {
              return {
                ...tarefa,
                selecionado: false,
                completado: true
              }
            }
            return tarefa;
          }));

    }
  }


  return (
    <div className="App">
      <Form setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}       
      />
      <Crono 
        selecionado={ selecionado }
        finalizarTarefa={finalizarTarefa} 
      />
    </div>
  );
}

export default App;


