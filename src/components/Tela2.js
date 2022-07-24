import FlashcardsList from "./FlashcardsList"
import Resultado from "./Resultado"


export default function Tela2({deck}){

    

    
    return (
    
    
    <div className="tela-2">
        <div className="logo">
            <img src = "./img/image 1.png"/>
            <h1>ZapRecall</h1>
        </div>
        <FlashcardsList deck={deck}/>
        <Resultado deck = {deck}/>
    </div>    
    )
}