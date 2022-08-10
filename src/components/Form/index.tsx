import React from 'react';
import ITarefa from '../../types/tarefa';
import Button from '../Button';

class Form extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>

}>{
    state = {
        tarefa:"xx",
        tempo: "00:00"
    }
    
    adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {... this.state }]);
        // console.log('state: ', this.state);
    }

    render() {
        return (
            <form onSubmit={this.adicionarTarefa.bind(this)}>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name='tarefa'
                        id='tarefa'
                        value={this.state.tarefa}
                        onChange={e => this.setState({ ...this.state, tarefa: e.target.value})}
                        placeholder='o que vc deseja estudar'
                        required
                    />

                </div>

                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step='1'
                        name='tempo'
                        value={this.state.tempo}
                        onChange={e => this.setState({ ...this.state, tempo: e.target.value})}
                        id='tempo'
                        min='00:00:00'
                        max='01:30:00'
                        required  
                    />
                    
                </div>

                <Button type="submit">
                    Adicionar
                </Button>      

            </form>
        )         
     }
}

export default Form;