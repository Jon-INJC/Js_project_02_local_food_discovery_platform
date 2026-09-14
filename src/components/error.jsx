function Error(props){
    const { text } = props
    return(
        <p className="text-xs text-error font-bold">{text}</p>
    );
}

export default Error;