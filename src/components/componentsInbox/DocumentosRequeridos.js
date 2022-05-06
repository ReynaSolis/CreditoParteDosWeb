import React, {useState, useContext} from 'react';
import logo from "../../assets/img/logo.png"
import Footer from '../../Footer/Footer';
import MediaQuery from 'react-responsive'
import ContextoUsuario from '../../context';

//importar componentes que podriamos usar de react
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Modal,
    Pressable
  } from 'react-native';




  const DocumentosRequeridos = ({ history }) => {
     const [nombreUsuario,setNombreUsuario]=useState("Jose Antonio Santos Cruz");
     const {nombre}=useContext(ContextoUsuario)
     const cargarDocumentos=()=>{
      history.push("Inbox");
    }

      return (
          <ScrollView  style={{backgroundColor:"white"}}>

            <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
              <MediaQuery minDeviceWidth={530}>
              <View style={styles.container_530}>
                 <Image style={styles.logo_530} source={logo} />
                 <Text style={styles.textTitle_530}>Bienvenido {nombre}</Text> 
                 <View style={styles.menu_530}>

                     <View style={{flexDirection: "row",justifyContent:"flex-start",}} >                  
                          <View >
                              <View style={styles.redondo_530}>
                                 <Text style={{position:"absolute",top:12,left:4}}>CPT</Text>
                               </View>
                             
                          </View>
                          <View style={{ marginLeft:5,marginTop:12 }}>
                               <Text style={styles.textContenido_530}>Crédito Para Ti: Solicitud de Envío de Documentos</Text>
                          </View>
                      </View>

                      <View style={{marginTop:40}}>
                           <Text style={styles.textSiguientePaso_530}>El siguiente paso para la Solicitud de tu Crédito
                            Para Ti es enviarnos los siguientes documentos:</Text>
                            <View style={{marginLeft:20,marginTop:20}}>
                                 <Text style={styles.textDocumento_530}>{'\u2022'} Comprobante de domicilio no mayor a 2 meses.</Text>
                                 <Text style={styles.textDocumento_530}>{'\u2022'} Recibo de nómina no mayor a 2 meses.</Text>
                                 <Text style={styles.textDocumento_530}>{'\u2022'} Identificación Oficial</Text>
                                 <Text style={styles.textDocumento_530}>{'\u2022'} Solicitud de crédito firmada</Text>
                            </View>
                            <Text style={styles.textEnvianos_530}>Favor de dar clik en el siguiente link para enviárnos tu documentación.</Text>
                           <TouchableOpacity onPress={()=>cargarDocumentos()}>
                                <Text style={styles.textEnviar_530}>Enviar mi documentación</Text>
                           </TouchableOpacity>

                      </View>           
                </View>
                </View> 
                  <View style={{position:'relative',top:"70%"}}>
                      <Footer></Footer>
                  </View>   
              </MediaQuery>
            </MediaQuery>

            <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
               <MediaQuery maxDeviceWidth={529}>  
               <View style={styles.container}>
                 <Image style={styles.logo} source={logo} />
                 <Text style={styles.textTitle}>Bienvenido {nombre}</Text> 
                 <View style={styles.menu}>

                     <View style={{flexDirection: "row",justifyContent:"flex-start",}} >                  
                          <View >
                              <View style={styles.redondo}>
                                 <Text style={{position:"absolute",top:12,left:4}}>CPT</Text>
                               </View>
                             
                          </View>
                          <View style={{ marginLeft:5,marginTop:12 }}>
                               <Text style={styles.textContenido}>Crédito Para Ti: Solicitud de Envío de Documentos</Text>
                          </View>
                      </View>

                      <View style={{marginTop:40}}>
                           <Text style={styles.textSiguientePaso}>El siguiente paso para la Solicitud de tu Crédito
                            Para Ti es enviarnos los siguientes documentos:</Text>
                            <View style={{marginLeft:20,marginTop:20}}>
                                 <Text style={styles.textDocumento}>{'\u2022'} Comprobante de domicilio no mayor a 2 meses.</Text>
                                 <Text style={styles.textDocumento}>{'\u2022'} Recibo de nómina no mayor a 2 meses.</Text>
                                 <Text style={styles.textDocumento}>{'\u2022'} Identificación Oficial</Text>
                                 <Text style={styles.textDocumento}>{'\u2022'} Solicitud de crédito firmada</Text>
                            </View>
                            <Text style={styles.textEnvianos}>Favor de dar clik en el siguiente link para enviárnos tu documentación.</Text>
                           <TouchableOpacity onPress={()=>cargarDocumentos()}>
                                <Text style={styles.textEnviar}>Enviar mi documentación</Text>
                           </TouchableOpacity>

                      </View>           
                </View>
                </View> 
                  <View style={{position:'relative',top:"70%"}}>
                      <Footer></Footer>
                  </View>    
              </MediaQuery>
              </MediaQuery>
                   
          </ScrollView>
      )
  }

  export default DocumentosRequeridos;

  

const styles = StyleSheet.create({
  container:{
         marginLeft:10,
         marginRight:10,
         marginTop:20,
         marginBottom:"10%",
        height:"10%"
  } , 
  container_530:{
    marginLeft:10,
    marginRight:10,
    marginTop:20,
     height:"1%",
     alignSelf:"center"
} , 
  logo: {
    width: 150,
    height: 150,
    alignSelf:"center",
    marginBottom: 5
  },
  logo_530: {
    width: 300,
    height: 300,
    alignSelf:"center",
    marginBottom: 5
  },
  textSiguientePaso:{
    color: "black",
   
    fontFamily: "Helvetica Neue LT Std",
    fontSize:17,
    fontWeight:"500",
    marginTop:20,
  },
  textSiguientePaso_530:{
    color: "black",
   
    fontFamily: "Helvetica Neue LT Std",
    fontSize:20,
    fontWeight:"500",
    marginTop:20,
  },
  textDocumento:{
    color: "black",
  
    fontFamily: "Helvetica Neue LT Std",
    fontSize:17,
    
    marginTop:20,
    
  },
  textDocumento_530:{
    color: "black",
   
    fontFamily: "Helvetica Neue LT Std",
    fontSize:20,
    
    marginTop:20,
    
  },
  textEnviar:{
    color: "blue",
    alignSelf:"center",
    fontFamily: "Helvetica Neue LT Std",
    fontSize:17,
    fontWeight:"500",
    marginTop:20,
    textDecorationLine: 'underline'

  },
  textEnviar_530:{
    color: "blue",
    alignSelf:"center",
    fontFamily: "Helvetica Neue LT Std",
    fontSize:20,
    fontWeight:"500",
    marginTop:20,
    textDecorationLine: 'underline'

  },
  textEnvianos:{
    color: "black",
 
    fontFamily: "Helvetica Neue LT Std",
    fontSize:18,
    marginTop:30
  },
  textEnvianos_530:{
    color: "black",

    fontFamily: "Helvetica Neue LT Std",
    fontSize:21,
    marginTop:30
  },
  textTitle: {
    color: "black",
    alignSelf:"center",
    fontFamily: "Helvetica Neue LT Std",
    fontSize:18,
    fontWeight:"bold",
    
  },
  textTitle_530: {
    color: "black",
    alignSelf:"center",
    fontFamily: "Helvetica Neue LT Std",
    fontSize:21,
    fontWeight:"bold",
    
  },
  textContenido: {
      color: "black",
      fontFamily: "Helvetica Neue LT Std",
      fontSize:12,
      fontWeight:"500",
      textAlign:"justify"
    },
    textContenido_530: {
      color: "black",
      fontFamily: "Helvetica Neue LT Std",
      fontSize:18,
      fontWeight:"500",
      textAlign:"justify"
    },
  menu:{
     flex:1,
     marginTop:40,
     marginLeft:5,
     marginRight:5
  },
  menu_530:{
    flex:1,
    marginTop:40,
    marginLeft:5,
    marginRight:5
 },
 redondo:{
  borderRadius:50,
  width:40,
  height:40,
  borderColor: "black",
  borderWidth:2,
  
},
  redondo_530:{
      borderRadius:50,
      width:40,
      height:40,
      borderColor: "black",
      borderWidth:2,
      
  },
})