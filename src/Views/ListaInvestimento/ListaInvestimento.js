import React, { Fragment, useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Cabecalho } from '../../Components/Cabecalho';
import buscaInvestimentos from '../../api/BuscaInvestimentos';
import estilo_padrao from '../EstiloPadrao/estilo';
import formataNumero from '../../util/FormataNumero';

const ListaInvestimento = ({navigation}) => {
  const [investimentos, setInvestimentos] = useState({});

  useEffect(() => {
    buscaInvestimentos(setInvestimentos);
  }, [])


  return (
    <SafeAreaView>
      <Cabecalho />

      <View style={estilo_padrao.linha}>
        <Text style={[estilo_padrao.alinhamento_esquerda, estilo_padrao.fonte_titulo]}>
          INVESTIMENTOS
        </Text>
        <Text style={[estilo_padrao.alinhamento_direta, estilo_padrao.fonte_titulo]}>R$</Text>
      </View>

      <FlatList
        data={investimentos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => {
          const isCarencia = item.indicadorCarencia == "S";
          return (
            <TouchableOpacity disabled={isCarencia} onPress={() => navigation.push('SimulacaoResgate')}>
              <View style={[estilo_padrao.listagem, isCarencia ? estilo_padrao.bkgComCarencia : estilo_padrao.bkgSemCarencia]}>
                <View style={estilo_padrao.linha}>
                  <Text style={[estilo_padrao.alinhamento_esquerda, isCarencia ? estilo_padrao.nome_valorComCarencia : estilo_padrao.nome_valor]}>
                    {item.nome}
                  </Text>
                  <Text style={[estilo_padrao.alinhamento_direta, isCarencia ? estilo_padrao.nome_valorComCarencia : estilo_padrao.nome_valor]}>
                    {formataNumero(item.saldoTotalDisponivel)}
                  </Text>
                </View>
                <Text style={[estilo_padrao.objetivo]}>{item.objetivo}</Text>
              </View>
            </TouchableOpacity>
          )
        }

        }

      />

    </SafeAreaView>

  )
};
export default ListaInvestimento;
