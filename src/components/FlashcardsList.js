
import FlashCardPergunta from "./FlashcardPergunta";
import FlashCard from "./FlashcardPergunta";


export default function FlashcardsList({deck}){



    return(
<div className="flashCards">
    
    {deck.map(deck => (
        <FlashCardPergunta deck={deck} key={deck.id}/>
    ))}

</div>

    );

}





