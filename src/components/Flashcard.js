import React,{useState} from "react";

export default function FlashCard({deck, addAnswerStatus, index}){

    const[selecionado, setEscolha]= React.useState(true);
    const[cor,setCor]= React.useState("");
    const[icon, setIcon]=React.useState("");

    function updateResposta(status){
        addAnswerStatus(status);
   }
    
    const [flip, setFlip] = useState(true);
    const [resposta1, setResposta]= React.useState(true);

    return(
        <div className={`card ${flip ? `flip` : ''}`} 
        >
            {flip ? 
            <div className="back" onClick={()=> setFlip(!flip)}>
                <p>Pergunta {index+1} </p>
                <ion-icon className="play" name="play-outline"></ion-icon>
            </div> : 
                 <div className="front">
                 {resposta1 ?
                 <div className="deckPergunta">
                 
                     <div>{deck.pergunta}</div>
                 
                 <img className="vector" onClick={()=> setResposta(!resposta1)} src="./img/Vector.png"/>
                 </div>
                     :
                      <div>
                             {selecionado ? 
                                <div>
                                
                                    {deck.resposta}
                                    <div className="botoes" onClick={()=> {setEscolha(!selecionado);}}>
                                        <button onClick={()=>{setCor("vermelho-selecionado");setIcon("close-circle");updateResposta("opcaoVermelha"); }} className="opcao vermelho">
                                            Não lembrei
                                        </button>
                                        <button onClick={()=> {setCor("laranja-selecionado"); setIcon("help-circle");updateResposta("opcaoLaranja");}} className="opcao laranja">
                                            Quase não lembrei
                                        </button>
                                        <button onClick={()=> {setCor("verde-selecionado");setIcon("checkmark-circle");updateResposta("opcaoVerde");}} className="opcao verde">
                                            Zap!
                                        </button>
                                    </div> 
                                </div> :
                                <div className="frontface">
                                    <p className={cor}>Pergunta{index+1}</p>
                                   <div className={cor}><ion-icon name={icon}></ion-icon></div>
                                    </div>
                                }</div>}</div>}</div>
)
}



