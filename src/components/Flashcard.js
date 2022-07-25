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
                <ion-icon name="play-outline"></ion-icon>
            </div> : 
                 <div className="front">
                 {resposta1 ?
                 <div>
                     <div>{deck.pergunta}</div>
                     <ion-icon name="repeat-outline" onClick={()=> setResposta(!resposta1)} ></ion-icon> 
                 </div>
                     :
                      <div>
                             {selecionado ? 
                                <div>
                                
                                    {deck.resposta}
                                    <div className="botoes" onClick={()=> {setEscolha(!selecionado);}}>
                                        <button onClick={()=>{setCor("vermelho-selecionado");setIcon("close-circle-outline");updateResposta("opcaoVermelha"); }} className="opcao vermelho">
                                            Não lembrei
                                        </button>
                                        <button onClick={()=> {setCor("laranja-selecionado"); setIcon("help-circle-outline");updateResposta("opcaoLaranja");}} className="opcao laranja">
                                            Quase não lembrei
                                        </button>
                                        <button onClick={()=> {setCor("verde-selecionado");setIcon("checkmark-circle-outline");updateResposta("opcaoVerde");}} className="opcao verde">
                                            Zap!
                                        </button>
                                    </div> 
                                </div> :
                                <>
                                    <p className={cor}>Pergunta{index+1}</p>
                                    <ion-icon name={icon}></ion-icon>
                                </>
                                }</div>}</div>}</div>)
}



