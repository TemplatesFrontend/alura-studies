import ITarefa from "../../../types/tarefa";

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item (
    { tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    // console.log('item atual: ', {tarefa, tempo, selecionado, completado, id});
    return (
        <li 
            onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item;