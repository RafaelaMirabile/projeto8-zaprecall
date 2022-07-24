import React,{useState} from "react";
import FlashcardFront from "./FlashcardFront";

export default function FlashCardBack({deck}){
    
    const [flip, setFlip] = useState(true);

   
    return(
        <div className={`card ${flip ? `flip` : ''}`} 
        >
            {flip ? 
            <div className="back" onClick={()=> setFlip(!flip)}>
                <p>Pergunta</p>
                <ion-icon name="play-outline"></ion-icon>
            </div> : 
                <FlashcardFront deck={deck}/>
            }
        </div>
    )
}



