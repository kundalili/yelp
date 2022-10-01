
export function ButtonSearch({onClick, className, text}) {

    return <button 
        onClick={onClick} 
        className={className}>
            {text || 'Suscribe'}
    </button>

}
export function Button({onClick, className, text}) {

    return <button 
        onClick={onClick} 
        className={className}>
            {text || 'Send'}
    </button>

}