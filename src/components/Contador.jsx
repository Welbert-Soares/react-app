import { Button, Text } from "react-native";
import Style from "../components/estilo";
import { useState } from "react";


function Contador(props) {
    

    const [numero, setNumero] = useState(props.inicial);

    const incremento = () => setNumero(numero + props.passo);
    const decremento = () => setNumero(numero - props.passo);

    return (
        <>
            <Text style={Style.txtG}>{numero}</Text>
            <Button title="+" onPress={incremento} />
            <Button title="-" onPress={decremento} />
        </>
    );
}

export default Contador;
