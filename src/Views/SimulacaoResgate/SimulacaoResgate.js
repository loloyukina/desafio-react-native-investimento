import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList
} from "react-native";
import { Cabecalho } from '../../Components/Cabecalho';
import estilo_padrao from '../EstiloPadrao/estilo';
import formataNumero from '../../util/FormataNumero';



const SimulacaoResgate = ({ navigation }) => {

    const investimento = navigation.getParam("investimento");

    return (
        <SafeAreaView  style={{flex: 1}}> 
            <Cabecalho />

            <View style={estilo_padrao.linha}>
                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.fonte_titulo]}>
                    DADOS DO INVESTIMENTO
                </Text>
            </View>

            <View style={[estilo_padrao.listagem, estilo_padrao.bkgSemCarencia]}>
                <View style={[estilo_padrao.linha, estilo_padrao.borda, { paddingBottom: 15 }]}>
                    <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                        Nome
                    </Text>
                    <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia]}>
                        {investimento.nome}
                    </Text>
                </View>

                <View style={[estilo_padrao.linha, { paddingTop: 15 }]}>
                    <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                        Saldo total disponível
                    </Text>
                    <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia]}>
                        {formataNumero(investimento.saldoTotalDisponivel)}
                    </Text>
                </View>
            </View>

            <View style={estilo_padrao.linha}>
                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.fonte_titulo, { paddingTop: 20 }]}>
                    RESGATE DO SEU JEITO
                </Text>
            </View>


            <FlatList style={{flex: 1}}
                data={investimento.acoes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    
                    const saldoAcumulado = investimento.saldoTotalDisponivel * (item.percentual / 100);
                    

                    return (
                        <View style={[estilo_padrao.listagem, estilo_padrao.bkgSemCarencia, { marginBottom: 15 }]}>
                            <View style={[estilo_padrao.linha, estilo_padrao.borda, { paddingBottom: 15 }]}>
                                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                                    Ação 
                                </Text>
                                <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia]}>
                                    {item.nome}
                                </Text>
                            </View>

                            <View style={[estilo_padrao.linha, estilo_padrao.borda, { paddingTop: 15 }]}>
                                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                                    Saldo acumulado
                                </Text>
                                <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia, { marginBottom: 15 }]}>
                                    {formataNumero(saldoAcumulado)}
                                </Text>
                            </View>

                            
                        </View>
                    )
                }

            }
            />
    
    </SafeAreaView>

  )
};

SimulacaoResgate.navigationOptions = ({ navigation}) => {
    const opcoes = {
                headerShown: false
      }
    return opcoes;
  }
export default SimulacaoResgate;
