import { useState } from "react"

export function UseStaComp(){
    const[set ,getSet]=useState(0)
    function sec(){

       getSet(set+2)
    }
    console.warn("------------------")
    return(
        <div>
            <h1>{set}</h1>
            <button onClick={sec}>press hhere</button>

        </div>
    )
}