
import FlashCardBack from "./FlashcardBack";


export default function FlashcardsList({deck}){
    
    
    return(
        <div className="flashCards">
            
            {deck.map((deck,index) => (
                <FlashCardBack deck={deck} key={index}/>
            ))}
        </div>
        
            );
}