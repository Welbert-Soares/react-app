import { Text } from "react-native";
import Style from "./estilo";

function ValorAleatorio(props) {
    const delta = props.max - props.min + 1;
    const aleatorio = parseInt(Math.random() * delta) + props.min;
    return ( 
        <Text style={Style.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
     );
}

export default ValorAleatorio;

