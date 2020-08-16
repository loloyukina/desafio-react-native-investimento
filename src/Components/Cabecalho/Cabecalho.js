import React from 'react';
import {
    Text,
    View,
    StatusBar
} from "react-native";
import estilo from "./estilo"

const Cabecalho = () => {
    return (
        <View style={estilo.cabecalho}>
            <StatusBar
                backgroundColor="#005aa5"
                barStyle="default"
            />
            <Text style={estilo.titulo}>Resgaste</Text>
        </View>
    );
}

export default Cabecalho;