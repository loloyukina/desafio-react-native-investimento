import {StyleSheet} from "react-native"

const estilo_padrao = StyleSheet.create({
    linha:{
        flexDirection: "row",
        marginLeft: 15,
        marginRight:15,
    },
    alinhamento_esquerda:{
        textAlign: "left",
        flex: 1
    },
    alinhamento_direta:{
        textAlign: "right"
    },
    fonte_titulo:{
        color: "#585858",
        fontFamily: "Montserrat-SemiBold",
        fontSize: 15,
        marginBottom:17,
        marginTop:-5,
        
    },
    listagem:{
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 2,
        paddingTop: 15,
        paddingBottom: 15,
    },
    objetivo:{
        marginLeft: 15,
        marginRight:15,
        color: "#585858",
        fontSize: 16
    },
    nome_valor:{
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Lato-Regular",
    },
    nome_valorComCarencia:{
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Lato-Regular",
        color: "#585858"
    },
    bkgSemCarencia:{
        backgroundColor: "white",
    },
    bkgComCarencia:{
        backgroundColor: "#fcfcfc",
    },
    borda:{
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 2,
    },
    borda_extra:{
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 5,
    },
    paddingTop_padrao:{
        paddingTop: 15
    },
    paddingBottom_padrao:{
        paddingBottom: 15
    },
    paddingTop_maior:{
        paddingTop: 20
    },
    button_resgaste:{
        backgroundColor: "#fae128",
        paddingTop:15,
        paddingBottom:15
    },
    button_texto:{
        backgroundColor: "#fae128",
        color: "#005aa5",
        fontWeight: "bold",
        fontSize: 18,
    }



})


export default estilo_padrao;