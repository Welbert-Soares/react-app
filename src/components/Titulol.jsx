import { Text } from "react-native";
import Style from "./estilo";

function Titulo(props) {
    return (
        <>
            <Text style={Style.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    );
}

export default Titulo;
