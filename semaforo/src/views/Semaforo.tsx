import { useEffect, useState } from "react";
import Button from "../components/button";
import Contador from "../components/Contador";
import { Luz } from "../components/Luz";

type lucesType = {
    luzRoja: boolean;
    luzAmarilla: boolean;
    luzVerde: boolean;
};

type Color = 'rojo' | 'amarillo' | 'verde';

const Semaforo = () => {
    const [duracionCiclo, setDuracionCiclo] = useState(5);
    const [contador, setContador] = useState(duracionCiclo);
    const [colorActivo, setColorActivo] = useState<Color>('rojo');

    const luces: lucesType = {
        luzRoja: colorActivo === 'rojo',
        luzAmarilla: colorActivo === 'amarillo',
        luzVerde: colorActivo === 'verde',
    };

    const cambiarColor = () => {
        setColorActivo((prevColor) => {
            switch (prevColor) {
                case 'rojo':
                    return 'verde';
                case 'verde':
                    return 'amarillo';
                case 'amarillo':
                    return 'rojo';
                default:
                    return 'rojo';
            }
        });
    };

    const reiniciarSemaforo = (nuevaDuracion: number) => {
        setDuracionCiclo(nuevaDuracion);
        setContador(nuevaDuracion);
        setColorActivo('rojo');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setContador((prev) => {
                if (prev === 0) {
                    cambiarColor();
                    return duracionCiclo; 
                } else {
                    return prev - 1;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [duracionCiclo]); 

    return (
        <>
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
                <div className="w-48 flex flex-col bg-gray-400 items-center gap-1 p-4 md:flex-column md:gap-8 border-2 rounded-2xl border-b-black">
                    <Contador contador={contador} />
                    <Luz color={"bg-red-600"} activo={luces.luzRoja} />
                    <Luz color={"bg-yellow-300"} activo={luces.luzAmarilla} />
                    <Luz color={"bg-green-600"} activo={luces.luzVerde} />
                </div>
                <div className="flex flex-col items-center gap-6 p-7 md:flex-column md:gap-8 rounded-2xl">
                    <Button 
                        text="5 segundos" 
                        action={() => reiniciarSemaforo(5)} 
                    />
                    <Button 
                        text={"10 segundos"} 
                        action={() => reiniciarSemaforo(10)}
                    />
                </div>
            </div>
        </>
    );
};

export default Semaforo;