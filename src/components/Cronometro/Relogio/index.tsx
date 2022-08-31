interface Props {
    tempo: number | undefined
}

function Relogio({ tempo = 0}: Props) {
    const min = Math.floor(tempo / 60);
    const seg = tempo % 60;
    const [minDezena, minUnidade] = String(min).padStart(2, '0');
    const [segDezena, segUnidade] = String(seg).padStart(2, '0');

    return (
        <>
        <span>{minDezena}</span>
        <span>{minUnidade}</span>
        <span>:</span>
        <span>{segDezena}</span>
        <span>{segUnidade}</span>
        </>

    )

}

export default Relogio;