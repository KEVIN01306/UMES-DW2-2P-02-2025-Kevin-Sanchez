

export interface LuzProps{
    color: string,
    activo: boolean,
}

export const Luz = ({color = "bg-white", activo}: LuzProps) => {
    
    return (
        <>
            <div className={`border-2 ${activo == true ? color : "bg-white"} border-b-black`} style={{borderRadius: "50%", width: "100px",height: "100px"}}>
                
            </div>
        </>
    )
}
