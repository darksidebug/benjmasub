const Button = ( props ) => {
    return (  
        <button
        onClick={ props.onClick }
        className={`block py-2 px-2.5 border ${props.selected ? 'border-blue4' : 'border-gray-300'} hover:border-blue4 ${ props.selected ? 'dark:border border-blue4' : 'dark:border-0'} rounded-md ${props.selected ? 'text-white' : 'text-gray-500'} dark:text-white 
        hover:text-white ${props.selected ? 'dark:md:text-blue4' : 'dark:hover:md:text-blue4'} text-sm font-medium tracking-[0.03rem] ${props.selected ? 'bg-blue4' : 'bg-white'} dark:bg-gray-600 hover:bg-blue4`}>
            { props.children } 
        </button>
    );
}
 
export default Button;