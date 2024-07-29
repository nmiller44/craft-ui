export type ButtonProps = {
    id?: string;
    type?: "button" | "submit" | "reset";
    color?: string;                             //"green" | "red" | "yellow" | "white";
    className?: string;
    form?: string;
    btnRef?: React.RefObject<HTMLButtonElement>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const id = props.id || 'button-base-undefined';
    const type = props.type || 'button';
    const btnRef = props.btnRef;
    const className = props.className ? ` ${props.className}` : "";
    const form = props.form;
    
    const colorStyle = () => {
        switch(props.color) {
            case "green":     return "border-transparent text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 ";
            case "red":       return "border-transparent text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 ";
            case "yellow":    return "border-transparent text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-yellow-300 ";
            case "white":     return "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500 ";
            default:          return "border-transparent text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 ";
        }
    }
    
    return (
        <button 
            type={type}   
            className={`${colorStyle()}inline-flex justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2${className}`}
            id={id}
            name={id}
            onClick={props.onClick}
            ref={btnRef}
            { ...(form && {form: form})}
        >
                { props.children }
        </button>    
    )
}