
interface ContadorProps{
    contador: number
}


const Contador = ({contador}: ContadorProps) => {


    return (
        <>
            <div className="rounded-none w-30 bg-black px-4 py-2 text-sm font-semibold text-orange-400">
                <h2>{contador < 9 ? "0" : ""}{contador}</h2>
            </div>
        </>
    )
}



export default Contador;