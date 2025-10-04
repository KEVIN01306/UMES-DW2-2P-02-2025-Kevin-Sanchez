

interface ButtonProps{
    action: () => void,
    text: string
}

const Button = ({action,text}: ButtonProps) => {


    return (
        <>
            <button onClick={action} className="rounded-none bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
                {text}
            </button>
        </>
    )
}


export default Button;