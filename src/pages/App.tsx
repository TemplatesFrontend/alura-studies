import React from 'react';
import Button from '../components/Button';
import Crono from '../components/Cronometro';
import Form from '../components/Form';
import Lista from '../components/List';


function App() {

  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, { 
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]);

  return (
    <div className="App">
      <Form setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Crono />
    </div>
  );
}

export default App;
function useState(arg0: { tarefa: string; tempo: string; }[]): [any, any] {
  throw new Error('Function not implemented.');
}

