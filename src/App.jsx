import { SafeAreaView } from "react-native";
import Primeiro from "./components/Primeiro";
import Comp, { Comp1, Comp2 } from "./components/Mult";

function App() {
    return (
        <SafeAreaView>
            <Comp1 />
            <Comp2 />
            <Comp />
            <Primeiro />
        </SafeAreaView>
    );
}

export default App;
