import Cartas from "./Cartas"

export default function Tela2({deck}){
    return (
    <div className="tela-2">
        <div>
            <img src = "./img/image 1.png"/>
            <h1>ZapRecall</h1>
        </div>
        <Cartas deck={deck}/>
    </div>    
    )
}