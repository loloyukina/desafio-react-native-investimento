const buscaInvestimentos = async (callback) => {  
    const response = await fetch("http://www.mocky.io/v2/5e76797e2f0000f057986099");
    const investimentosJson = await response.json();
    callback(investimentosJson.response.data.listaInvestimentos);
}

export default buscaInvestimentos