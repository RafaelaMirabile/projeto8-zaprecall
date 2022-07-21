
export default function Pergunta({deck}){
    console.log(deck);
    
    return(

      <div className="flashCards">
            {deck.map((deck,index) =>
            (
            <div key={index} className="card" >
                <p>{deck.pergunta}</p>
                <ion-icon name="play-outline"></ion-icon>
                </div>
            )
            )}
    </div>


    )
}