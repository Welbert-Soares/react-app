import { Text } from "react-native";
import Style from "./estilo";

function MinMax(props) {
    console.warn(props);
    return ( 
        <Text style={Style.txtG}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
     );
}

export default MinMax;