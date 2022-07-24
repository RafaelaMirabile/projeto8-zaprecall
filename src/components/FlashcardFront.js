import React from "react";
import Resposta from "./Resposta";



export default function FlashcardFront(deck){


    
    
    const [resposta1, setResposta]= React.useState(true);
    
    return(
        <>
        <div className="front">
            {resposta1 ?
            <div>
                <div>{deck.deck.pergunta}</div>
                <ion-icon name="repeat-outline" onClick={()=> setResposta(!resposta1)} ></ion-icon> 
            </div>
                :
                 <div>
                    <Resposta deck={deck}/>   
                </div>}

        </div>
        </>

    )
}
