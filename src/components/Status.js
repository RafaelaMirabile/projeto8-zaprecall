export default function Status(props) {
    const {status} = props;

    switch (status) {
        case "opcaoVermelha":
            return <img src ="./img/Vectorvermelho.png"className="status"/>;
        case "opcaoLaranja":
            return <img src ="./img/Vector (2).png"className="status"/>;
        case "opcaoVerde":
            return <img src ="./img/Vectorverde (1).png"className="status"/>;
        default:
            return null;
    }
}