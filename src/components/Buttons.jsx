const Buttons =({text, handleClick, icon})=>{
    return(
        <button style={styles} onClick={handleClick}>{text} {icon}</button>
    )
}


export default Buttons