import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
    return (
        <View style={styles.FlexV2}>
            <Quadrado cor={"#00ca00"} />
            <Quadrado cor={"#f00"} />
            <Quadrado cor={"#ff0"} />
            <Quadrado cor={"#02f5f5"} />
            <Quadrado cor={"#ddd"} />
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        backgroundColor: "#000",
    },
});
