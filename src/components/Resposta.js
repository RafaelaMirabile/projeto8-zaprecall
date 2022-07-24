import React from "react";

export default function Resposta(deck){
    
    const[selecionado, setEscolha]= React.useState(true);
    const[cor,setCor]= React.useState("");
    const[icon, setIcon]=React.useState("");
 

    //function updateResposta(status){
       // console.log(status)
   // }

    return(
        <>
        {selecionado ? 
        <div>
                {deck.deck.deck.resposta}
            <div className="botoes" onClick={()=> {
                setEscolha(!selecionado);
                }}>
                <button 
                onClick={()=>{ 
                    setCor("vermelho-selecionado"); 
                    setIcon("close-circle-outline");
                    //updateResposta("opcaoVermelha"); 

                    }} className="opcao vermelho">
                        Não lembrei
                </button>
                <button 
                onClick={()=> {
                    setCor("laranja-selecionado"); 
                    setIcon("help-circle-outline");
                    //updateResposta("opcaoLaranja");

                    }} className="opcao laranja">
                        Quase não lembrei
                </button>
                <button  
                onClick={()=> {
                    setCor("verde-selecionado"); 
                    setIcon("checkmark-circle-outline");
                    //updateResposta("opcaoVerde");          
                    }} className="opcao verde">
                        Zap!
                </button>
            </div> 

        </div> :
        <>
        <p className={cor}>Pergunta</p>
        <ion-icon name={icon}></ion-icon>
        </>
      }
    </>
    );
}






