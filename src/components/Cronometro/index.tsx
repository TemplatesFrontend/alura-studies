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

    function regress(cont: number=0) {
        setTimeout(() => {
            
            if(cont > 0) {
                setTempo(cont -1);
                return regress(cont - 1);
            }

        }, 1000);
    }
    

    return (
        <div>
            <p>Escolha um card e inicie o cronomêtro</p>
            {/* Tempo: {tempo} Debug */}
            <div>
                <Relogio tempo={tempo}/>
        </div>
                <Button onClick={() => regress(tempo) }>
                    Começar
                </Button>
            </div>
    )
}

export default Crono;
