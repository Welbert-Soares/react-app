import { Text } from "react-native";
import Style from "./estilo";

export default function Comp() {
    return <Text style={Style.fontG}>Comp padrao</Text>;
}
function Comp1() {
    return <Text style={Style.fontG}>Comp 01</Text>;
}
function Comp2() {
    return <Text style={Style.fontG}>Comp 02</Text>;
}

export { Comp1, Comp2 };
