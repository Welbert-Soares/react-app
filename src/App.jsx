import { SafeAreaView, StyleSheet } from "react-native";
import Primeiro from "./components/Primeiro";
import Comp, { Comp1, Comp2 } from "./components/Mult";

function App() {
    return (
        <SafeAreaView style={styles.App}>
            <Comp1 />
            <Comp2 />
            <Comp />
            <Primeiro />
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
    }
})