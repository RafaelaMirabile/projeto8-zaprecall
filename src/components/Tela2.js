import FlashCard from "./Flashcard"
import Status from "./Status";
import React from "react";

export default function Tela2({deck}){
    
    const [answersStatus, setAnswersStatus] = React.useState([]);

    function addAnswerStatus(status) {
        setAnswersStatus([...answersStatus, status]);
    }

    return (
    <div className="tela-2">
        <div className="logo">
            <img src = "./img/image 1.png"/>
            <h1>ZapRecall</h1>
        </div>
        <div className="flashCards">
            
            {deck.map((deck,index) => (
                <FlashCard deck={deck} key={index} addAnswerStatus={addAnswerStatus} index={index}/>
            ))}     
        </div>
        <Resultado deck ={deck} answersStatus={answersStatus} />
    </div>    
    )
}

function Resultado({deck,answersStatus}){
    
    const zapCounter = answersStatus.filter(status => status === "opcaoVermelha");
    const Resultado = answersStatus.length === deck.length;
    const Counter = zapCounter.length < 1;

    return(
        <footer>
            <div className={Resultado ? "result" : "display"}>
                {!Counter ? <div className="resultado">
                    <span>
                    <img src="./img/sad 7.png" alt=""></img>
                    <span>Putz..</span>
                    </span>
                    <div>Ainda faltam alguns...Mas não desanime!</div> 
                    </div> 
                : 
                <div className="resultado" >
                    <span>
                    <img src="./img/party 2.png" alt=""></img>
                    <span>Parabéns!</span>
                    </span>
                    <div>Você não esqueceu de nenhum flashcard!</div>
                </div>
                }
            </div>
           {answersStatus.length}/{deck.length} CONCLUÍDOS
           <div className="icones">{answersStatus.map((status, index) =><Status key={index} status={status} /> )}</div>
        </footer>
    )
}