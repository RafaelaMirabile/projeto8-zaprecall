

export default function IonIcon(props) {
    const {status} = props;


    switch (status) {
        case "opcaoVermelha":
            return <ion-icon name="close-circle"></ion-icon>;
        case "opcaoLaranja":
            return <ion-icon name="help-circle"></ion-icon>;
        case "opcaoVerde":
            return <ion-icon name="checkmark-circle"></ion-icon>;
        default:
            return null;
    }
}