import React from 'react';
import ListaInvestimento from './src/Views/ListaInvestimento/ListaInvestimento';
import SimulacaoResgate from './src/Views/SimulacaoResgate/SimulacaoResgate';
import { createStackNavigator } from "react-navigation-stack";
import {  createAppContainer } from "react-navigation";

const navigator = createStackNavigator({
  ListaInvestimento : {screen: ListaInvestimento},
  SimulacaoResgate : {screen: SimulacaoResgate}
})

const AppContainer = createAppContainer(navigator)

const App = () => {
   
  return (
    <AppContainer />
  )
};

export default App;
