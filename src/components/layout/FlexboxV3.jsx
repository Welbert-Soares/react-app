import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
    return (
        <View style={styles.FlexV2}>
            <Quadrado cor={"#00ca00"}  lado={20}/>
            <Quadrado cor={"#f00"}  lado={30}/>
            <Quadrado cor={"#ff0"}  lado={40}/>
            <Quadrado cor={"#02f5f5"}  lado={50}/>
            <Quadrado cor={"#ddd"}  lado={60}/>
        </View>
    );
};

const styles = StyleSheet.create({
    FlexV2: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 350,
        width: "100%",
        backgroundColor: "#000",
    },
});
