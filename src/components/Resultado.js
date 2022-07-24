import IonIcon from "./Ionicons";

export default function Resultado({deck}){
    console.log(deck);
    let array =[...deck];
    
    
    return(
        <footer>
           Resultado 0/{array.length}
           <IonIcon />
        </footer>
    )
}