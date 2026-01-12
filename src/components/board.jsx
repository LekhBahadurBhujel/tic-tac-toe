import { useState } from "react"
import Box from "./box"

const Board =() => {
    const boxes = [1,2,3,4,5,6,7,8,9]
    const [boxtext, setBoxText] = useState([null,null,null,null,null,null,null,null,null])
    const [isXnext, setIsXnext] = useState(true)

    const calculateWinner =(boxtext)=>{
        const Winconditions =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (let index=0; index < Winconditions.length; index++){
            const [a,b,c] = Winconditions[index];
            if (boxtext[a] && boxtext[a] === boxtext[b] && boxtext[a] === boxtext[c]){
                console.log("Winner is", boxtext[a])
                return boxtext[a];
            }
           
        }
         return null;
    }
    
    const handleClick = (boxIndex) => {
        setBoxText(prev=>{

            if (prev[boxIndex]) return prev 

            const newarr = [...prev]
            newarr[boxIndex] = isXnext ? "X" : "O"


        const winner = calculateWinner(newarr)
        if(winner) alert (`The winner is ${winner}`)

            setIsXnext(!isXnext)
            return newarr
        })

    }

    return(
            <div className="">
                
           <p className="font-medium text-lg">{isXnext? "Player X":"Player O"}</p>

        <div className="grid grid-cols-3">
            {boxes.map((box, i)=>(
                <Box onClick={()=>handleClick(i)}text={boxtext[i]} />
            ))}
</div>
        </div>
    )
}

export default Board