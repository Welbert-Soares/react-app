import { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../estilo";

import MegaNumero from "./MegaNumero";

export default class Mega extends Component {
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: [],
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         qtdNumeros: props.qtdNumeros,
    //     };
    // }

    alterarQtdNumeros = (qtd) => this.setState({ qtdNumeros: +qtd });

    gerarNumerosNaoContidos = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo;
    };

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdNumeros)
    //         .fill()
    //         .reduce((n) => [...n, this.gerarNumerosNaoContidos(n)], [])
    //         .sort((a, b) => a - b);
    //     this.setState({ numeros})
    // }

    gerarNumeros = () => {
        const { qtdNumeros } = this.state;
        const numeros = [];

        for (let i = 0; i < qtdNumeros; i++) {
            numeros.push(this.gerarNumerosNaoContidos(numeros));
        }

        numeros.sort((a, b) => a - b);
        this.setState({ numeros });
    };

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map((num) => {
            return <MegaNumero key={num} num={num} />;
        });
    };

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
                <TextInput
                    keyboardType="numeric"
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de Números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumeros}
                />
                <Button title="Gerar" onPress={this.gerarNumeros} />
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                    {this.exibirNumeros()}
                </View>
            </>
        );
    }
}
