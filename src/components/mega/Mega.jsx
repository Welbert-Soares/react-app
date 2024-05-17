import { Component } from "react";
import { Button, Text, TextInput } from "react-native";
import Estilo from "../estilo";

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

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce((n) => [...n, this.gerarNumerosNaoContidos(n)], [])
            .sort((a, b) => a - b);
        this.setState({ numeros})
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType="numeric"
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de Números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumeros}
                />
                <Button title="Gerar" onPress={this.gerarNumeros} />
                <Text>
                    {this.state.numeros.join(", ")}
                </Text>
            </>
        );
    }
}
