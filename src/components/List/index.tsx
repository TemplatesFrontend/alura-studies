import React, { useState } from "react";
import Item from "./Item";

function Lista() {
  // let tarefas = [
  //   { id: 12, tarefa: "React", tempo: "02:54:24" },
  //   { tarefa: "PHP", tempo: "01:24:14" },
  //   { tarefa: "javascript", tempo: "05:54:12" },
  // ];

  let skills = [
    { skill: "php", tempo: "3 anos", level: "júnior" },
    { skill: "js", tempo: "2 anos", level: "pleno" },
  ];

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
    <aside>
        <h2 onClick={() => {
          setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}])
        }}> Estudos do dia </h2>

      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={ index }
            tarefa={ item.tarefa }
            tempo={ item.tempo }
          />
        ))}
      </ul>

      {skills.map((k, index) => (
        <div key={index}>
          <h3> {k.skill} </h3>
          <p>
            {" "}
            {k.tempo} {k.level}{" "}
          </p>
        </div>
      ))}
    </aside>
  );
}

export default Lista;
