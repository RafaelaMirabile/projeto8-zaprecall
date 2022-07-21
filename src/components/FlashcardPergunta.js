import React, { useState } from "react";

export default function FlashCardPergunta({deck}){
    
    const [flip, setFlip] = useState(true);

   
    return(
        <div className={`card ${flip ? `flip` : ''}`} 
        onClick={()=> setFlip(!flip)}>
            {flip ? <div className="back">
                <p>Pergunta</p>
                <ion-icon name="play-outline"></ion-icon>
            </div> : <div className="front">
                <div>{deck.pergunta}</div>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
            }
        </div>
    )
}