import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const [number, setNumber] = useState(0);

    const increment = () => setNumber(number + 1);

    return (
        <View style={styles.container}>
            <Text style={{ color: "#000" }}>Eai Rapaziada!</Text>
            <StatusBar style="auto" />

            <TouchableOpacity onPress={increment} style={styles.button} >
                <Text>Opacidade</Text>
            </TouchableOpacity>

            <Text>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        backgroundColor: "#5eaef889",
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
});
