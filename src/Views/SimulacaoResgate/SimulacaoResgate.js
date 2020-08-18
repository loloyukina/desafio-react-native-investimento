import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    TextInput,
    Button
} from "react-native";
import { Cabecalho } from '../../Components/Cabecalho';
import estilo_padrao from '../EstiloPadrao/estilo';
import formataNumero from '../../util/FormataNumero';



const SimulacaoResgate = ({ navigation }) => {

    const [errorMessages, setErrorMessages] = useState([]);
    const [valoresDisponiveis, setValoresDisponiveis] = useState([]);
    const [acoes, setAcoes] = useState([]);

    const investimento = navigation.getParam("investimento");

    useEffect(() => {
        let acoes = [];
        investimento.acoes.map((acao => {
            let a = acao;
            a.valorDisponivel = investimento.saldoTotalDisponivel * (acao.percentual / 100);
            a.valorResgate = a.valorDisponivel;
            acoes.push(a);
        }));
        
        setAcoes(acoes);
      }, [])

        const atualiza = (item, vr) => {
            let vrS = vr.split(',').join('');
            vrS = vrS.split('.').join('');
            const valorResgate = vrS.substr(0, vrS.length-3) + vrS.charAt(vrS.length-3) + '.' + vrS.substr(vrS.length-3 + '.'.length);

            if(acoes){
                let acs = [];

                acoes.map((acao => {
                    if(acao.id === item.id) {
                        acao.valorResgate = valorResgate;
                    }
                    acs.push(acao);
                }));

                setAcoes(acs);
            }
                   
        }


            const chamaModal = async ()=> {

            }

    
    
    return (
        <SafeAreaView  style={{flex: 1}}> 
            <Cabecalho />

            <View style={estilo_padrao.linha}>
                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.fonte_titulo]}>
                    DADOS DO INVESTIMENTO
                </Text>
            </View>

            <View style={[estilo_padrao.listagem, estilo_padrao.bkgSemCarencia]}>
                <View style={[estilo_padrao.linha, estilo_padrao.borda,  estilo_padrao.paddingBottom_padrao]}>
                    <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                        Nome
                    </Text>
                    <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia]}>
                        {investimento.nome}
                    </Text>
                </View>

                <View style={[estilo_padrao.linha, estilo_padrao.paddingTop_padrao]}>
                    <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                        Saldo total disponível
                    </Text>
                    <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia]}>
                        {formataNumero(investimento.saldoTotalDisponivel)}
                    </Text>
                </View>
            </View>

            <View style={estilo_padrao.linha}>
                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.fonte_titulo, estilo_padrao.paddingTop_maior]}>
                    RESGATE DO SEU JEITO
                </Text>
            </View>


            <FlatList style={{flex: 1}}
                data={acoes}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={[estilo_padrao.listagem, estilo_padrao.bkgSemCarencia,  estilo_padrao.paddingBottom_padrao]}>
                            <View style={[estilo_padrao.linha, estilo_padrao.borda, estilo_padrao.paddingTop_padrao]}>
                                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                                    Ação 
                                </Text>
                                <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia]}>
                                    {item.nome}
                                </Text>
                            </View>

                            <View style={[estilo_padrao.linha, estilo_padrao.borda, estilo_padrao.paddingTop_padrao]}>
                                <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                                    Saldo acumulado
                                </Text>
                                <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.nome_valorComCarencia,  estilo_padrao.paddingBottom_padrao, {marginBottom:20}]}>
                                    {formataNumero(item.valorDisponivel)}
                                </Text>
                            </View>

                          <TextInput 
                                style={[estilo_padrao.nome_valor, estilo_padrao.paddingTop_padrao, estilo_padrao.borda]}
                                placeholder="Valor a resgatar"
                                onChangeText={valorResgate => atualiza(item, valorResgate)}
                                defaultValue={formataNumero(item.valorResgate)}
                                value={formataNumero(item.valorResgate)}
                                
                          />
                            
                            <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor, { color: 'red' }]}>
                                {item.valorResgate <= 0 ? 'Digite um número maior que zero' : ''}
                                {item.valorResgate > item.valorDisponivel ? 'Valor não pode ser maior que '+formataNumero(item.valorDisponivel) : ''}
                            </Text>

                            
                        </View>                      
                      )
                  }
                }
             />
            {/*<View style={[estilo_padrao.listagem, estilo_padrao.bkgSemCarencia, {marginTop:20}]}>
                <View style={[estilo_padrao.linha]}>
                    <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.nome_valor]}>
                        Valor Total a resgatar
                    </Text>
                    <Text style={estilo_padrao.nome_valorComCarencia}>
                        R$ 19.000,00
                    </Text>
                </View>
                </View>*/}

            {/*<View style={estilo_padrao.button_resgaste}>
                <Button style={estilo_padrao.button_texto} title="CONFIRMAR REGASTE" onPress={chamaModal}/>
            </View>*/}
    
    
    
    
    
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
