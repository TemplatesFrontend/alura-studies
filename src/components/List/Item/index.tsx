import ITarefa from "../../../types/tarefa";

function Item ({ tarefa, tempo, selecionado, completado, id}: ITarefa) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id});
    return (
        <li>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item;