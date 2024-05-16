import { SafeAreaView, StyleSheet } from "react-native";
import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Titulo from "./components/Titulol";
// import Primeiro from "./components/Primeiro";
// import Comp, { Comp1, Comp2 } from "./components/Mult";
// import MinMax from "./components/MinMax";
// import ValorAleatorio from "./components/Aleatorio";

function App() {
    return (
        <SafeAreaView style={styles.App}>
            
            <Contador inicial={100} passo={13} />

            {/*
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
