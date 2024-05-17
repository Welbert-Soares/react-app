import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado cor={"#00ca00"} />
            <Quadrado cor={"#f00"} />
            <Quadrado cor={"#ff0"} />
            <Quadrado cor={"#02f5f5"} />
            <Quadrado cor={"#ddd"} />
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#000",
    },
});
