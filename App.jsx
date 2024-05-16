import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


function TextButton(props) {
    return <Text style={{color:"#fff"}}>{props.title}</Text>
}

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{color:"#fff"}}>Eai Rapaziada!</Text>
            <StatusBar style="light" />
            <TextButton title="Hello World!" />
            <TextButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        backgroundColor: "blue",
    },
});
