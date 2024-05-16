import { SafeAreaView, StyleSheet } from "react-native";
import Primeiro from "./components/Primeiro";
import Comp, { Comp1, Comp2 } from "./components/Mult";
import MinMax from "./components/MinMax";
import ValorAleatorio from "./components/Aleatorio";

function App() {
    return (
        <SafeAreaView style={styles.App}>
            <ValorAleatorio min={1} max={60} />
            
            
            {/*
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
        backgroundColor: "#0af",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});
