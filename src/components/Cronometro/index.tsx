import Button from "../Button";
import Relogio from "./Relogio";

function Crono() {
    return (
        <div>
            <p>Escolha um card e inicie o cronomêtro</p>
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
