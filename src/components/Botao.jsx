import { Button } from "react-native";




function Botao(props) {
    
    const executar = () => console.warn("Executando...");

    return ( 
        <>
            <Button title="Executar 1!" onPress={executar} />
            <Button title="Executar 2!" onPress={()=> console.warn("Executando 2...")} />
        </>
    );
}

export default Botao;