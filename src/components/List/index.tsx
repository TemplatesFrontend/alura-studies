import React from "react";

function Lista() {
    const tarefas =[
        {   id: 12, tarefa: 'React', tempo: '02:54:24' },
        { tarefa: 'PHP', tempo: '01:24:14' },
        { tarefa: 'javascript', tempo: '05:54:12' }
    ]

    const skills = [
        { skill: 'php', tempo: '3 anos', level: 'júnior' },
        { skill: 'js', tempo: '2 anos', level: 'pleno' }
    ]
    return (
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={ index }>
                        <h3>{ item.tarefa }</h3>
                        <span>{ item.tempo }</span>
                    </li>
                ))}

            </ul>

            
           

                {skills.map((k, index) => ( 
                <div key={index}>
                    <h3> { k.skill } </h3>
                    <p> { k.tempo }  { k.level } </p>
                </div>
                 ))}
                
           

        </aside>
    )
}

export default Lista;