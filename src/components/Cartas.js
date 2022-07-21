import react from "react";


export default function Cartas({deck}){
console.log(deck);
let contador =1;

    return(
        <div className="flashCards">
            {deck.map((index) =>
            (
            <div key={index} className="card">
                <p>Pergunta {contador++}</p>
                <ion-icon name="play-outline"></ion-icon>
                </div>
            )
            )}
        </div>
    );
}