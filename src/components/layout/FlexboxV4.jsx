import React from "react";
import { StyleSheet, View } from "react-native";

export default (props) => {
    return (
        <View style={styles.FlexV4}>
            <View style={styles.V0}></View>
            <View style={styles.V1}></View>
            <View style={styles.V2}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV4: {
        flex: 1,
        width: 100,
        backgroundColor: "#000",
    },

    V0: {
        
        height: 300,
        backgroundColor: "#a00",
    },

    V1: {
        flex: 9,
        backgroundColor: "#ff801a",
    },

    V2: {
        flex: 1,
        backgroundColor: "#50d1f6",
    },
});
