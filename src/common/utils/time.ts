export function tempoParaSegundo(tempo: string){
    const [horas ="0", min="0", seg="0"] = tempo.split(":");

    const horasSegundos = Number(horas) * 3600;
    const minSegundos = Number(min) * 60;
    
    return horasSegundos + minSegundos +Number(seg);
}