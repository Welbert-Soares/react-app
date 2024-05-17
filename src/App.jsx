import { SafeAreaView, StyleSheet } from "react-native";
import Mega from "./components/mega/Mega";
// import FlexboxV4 from "./components/layout/FlexboxV4";
// import FlexboxV3 from "./components/layout/FlexboxV3";
// import FlexboxV2 from "./components/layout/FlexboxV2";
// import Flexbox from "./components/layout/Flexbox";
// import DigiteSeuNome from "./components/DigiteSeuNome";
// import Quadrado from "./components/layout/Quadrado";
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Titulo from "./components/Titulol";
// import Primeiro from "./components/Primeiro";
// import Comp, { Comp1, Comp2 } from "./components/Mult";
// import MinMax from "./components/MinMax";
// import ValorAleatorio from "./components/Aleatorio";

function App() {
    return (
        <SafeAreaView style={styles.App}>

            <Mega qtdNumeros={7} />

            {/*
            <FlexboxV4 />
            <FlexboxV3 />
            <FlexboxV2 />
            <Flexbox />
            <DigiteSeuNome />
            <Contador inicial={100} passo={13} />
            <Botao />
            <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
            <ValorAleatorio min={1} max={60} />
            <MinMax min={3} max={20} ></MinMax>
            <MinMax min={1} max={20} ></MinMax>            
            <Comp1 />
            <Comp2 />
            <Comp />
            <Primeiro /> */}
            
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: "#1cb3ff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});
