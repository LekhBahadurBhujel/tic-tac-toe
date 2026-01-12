
const Box = ({ text, onClick }) => {
    return(
        <button onClick={onClick} className ="flex justify-center items-center border size-12">{text}</button>
    )
}

export default Box