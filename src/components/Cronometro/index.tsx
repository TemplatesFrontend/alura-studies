import { useEffect, useState } from "react";
import { tempoParaSegundo } from "../../common/utils/time";
import ITarefa from "../../types/tarefa";
import Button from "../Button";
import Relogio from "./Relogio";

interface Props {
    selecionado: ITarefa | undefined
}

function Crono({selecionado}: Props) {
    // console.log('Conversao', tempoParaSegundo('01:01:01'))
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) 
        {
            setTempo(tempoParaSegundo(selecionado.tempo)); 
        }
    }, [selecionado]);
    

    return (
        <div>
            <p>Escolha um card e inicie o cronomêtro</p>
            Tempo: {tempo}
            <div>
                <Relogio />
        </div>
                <Button>
                    Começar
                </Button>
            </div>
    )
}

export default Crono;
