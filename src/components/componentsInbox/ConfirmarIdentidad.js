import React, {useState, useContext} from 'react';
import  drp from '../../assets/img/drp.png';
import logo from "../../assets/img/logo.png"
//import WebcamComponent from "../componentesDocs/WebcamComponent";
import MediaQuery from 'react-responsive';
import ContextoUsuario from '../../context';
import Footer from '../../Footer/Footer';


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
    Pressable,
    ActivityIndicator
  } from 'react-native';


const ConfirmarIdentidad = () => {
     //usar el contexto 
     const {domicilio,setDomicilio}=useContext(ContextoUsuario)
     const {nomina,setNomina}=useContext(ContextoUsuario)
     const {identificacion,setIdentificacion}=useContext(ContextoUsuario)
     const {credito,setCredito}=useContext(ContextoUsuario)
     const {identidad,setIdentidad}=useContext(ContextoUsuario)
     const {confirmarDocumentos,setConfirmarDatos}=useContext(ContextoUsuario)
     const {mostrarCamara,setMostarCamara}=useContext(ContextoUsuario)
     
 
     const [variableGuardado,setVariableGuardado]=useState()
     const [cargarDocumentos,setCargarDocumentos]=useState(false);

     const Datos=()=>{
         alert("Proceso finalizado");
     }



return (
 

     <ScrollView style={{backgroundColor:"white"}}>

     <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
        <MediaQuery minDeviceWidth={530}>
              {mostrarCamara  && 
             <View style={styles.container}>
                <Image source={logo} style={styles.logo_530} />
                {
                  /**
                <WebcamComponent variableGuardado={variableGuardado} ></WebcamComponent>   
                 */
              }  
             </View>
           }

          {!mostrarCamara && !identidad &&
             <View style={styles.container}>
               <Image source={logo} style={styles.logo_530} />
               <Text style={styles.header_530}>Tus documentos de Identidad Electrónica estarán cifrados y seguros.</Text>
    
               <View style={{alignSelf:"center",marginTop:"1%"}}>
                 <TouchableOpacity   disabled={identidad} onPress={() => { setMostarCamara(true)
                                                                      setVariableGuardado("identidad")
                                                                      setCargarDocumentos(true)
                                                                      }}  > 
                       <View style={{  flexDirection: "row"}}>
                         <Image source={drp} style={styles.logoUser_530}></Image>
                       </View>           
                 </TouchableOpacity>        
               </View>
    
               <Text style={styles.text_530}>Para finalizar favor de confirmar su identidad con Face ID presione el ícono de arriba.</Text>
    
               {cargarDocumentos&&!identidad&&
                      <>
                         <View style={{marginTop:40,marginBottom:5}}>
                         <ActivityIndicator size="large" color="rgba(206, 31, 40, 1)" />
                         <Text style={styles.textSpinner}>Subiendo archivos</Text>
                         </View>
                         
                      </>                    
                  }
               
               <View style={{marginTop:"5%",height:"20%",bottom:"5%"}}>
                  <TouchableOpacity disabled={!identidad} style={{height:"100%", padding:"0%"}}  onPress={Datos}>
                     <View style={styles.vista_530}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                     </View>
                  </TouchableOpacity>
               </View>   
             </View>   
           }


          {!mostrarCamara && identidad &&
            <View style={styles.container}>
                <Image source={logo} style={styles.logo_530} />
                <Text style={styles.header_530}>Tus documentos de Identidad Electrónica estarán cifrados y seguros.</Text>
    
               
    
                 <Text style={styles.textAgradecemos_530}>Agradecemos mucho la información que nos ha proporcionado, recibirá un correo en cuanto terminemos de validar sus datos.</Text>
    
                 <View style={{marginTop:"10%",height:"20%",bottom:"5%"}}>
                    <TouchableOpacity disabled={!identidad} style={{height:"100%", padding:"0%"}}  onPress={Datos}>
                       <View style={styles.vistaFinalizar_530}>
                          <Text style={styles.buttonText}>FINALIZAR</Text>
                       </View>
                   </TouchableOpacity>
                 </View>   
            </View>   
          }

             <View style={{position:'absolute',top:"100%",width:"100%",marginTop:10}}>
               <Footer></Footer>
             </View> 
            </MediaQuery>
     </MediaQuery>    

       <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
          <MediaQuery maxDeviceWidth={529}>  
          {mostrarCamara  && 
             <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                {
                  /**
                <WebcamComponent variableGuardado={variableGuardado} ></WebcamComponent>  
                 */
              }   
             </View>
           }

          {!mostrarCamara && !identidad &&
             <View style={styles.container}>
               <Image source={logo} style={styles.logo} />
               <Text style={styles.header}>Tus documentos de Identidad Electrónica estarán cifrados y seguros.</Text>
    
               <View style={{alignSelf:"center",marginTop:"10%"}}>
                 <TouchableOpacity   disabled={identidad} onPress={() => { setMostarCamara(true)
                                                                      setVariableGuardado("identidad")}}  > 
                       <View style={{  flexDirection: "row"}}>
                         <Image source={drp} style={styles.logoUser}></Image>
                       </View>           
                 </TouchableOpacity>        
               </View>
    
               <Text style={styles.text}>Para finalizar favor de confirmar su identidad con Face ID presione el ícono de arriba.</Text>
    
               {cargarDocumentos&&
                      <>
                         <View style={{marginTop:40,marginBottom:5}}>
                         <ActivityIndicator size="large" color="rgba(206, 31, 40, 1)" />
                         <Text style={styles.textSpinner}>Subiendo archivos</Text>
                         </View>
                         
                      </>
                      
                  }
               
               <View style={{marginTop:"55%",height:"20%",bottom:"5%"}}>
                  <TouchableOpacity disabled={!identidad} style={{height:"100%", padding:"0%"}}  onPress={Datos}>
                     <View style={styles.vista}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                     </View>
                  </TouchableOpacity>
               </View>   
             </View>   
           }


          {!mostrarCamara && identidad &&
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.header}>Tus documentos de Identidad Electrónica estarán cifrados y seguros.</Text>
    
                <View style={{alignSelf:"center",marginTop:"10%"}}>
                  <TouchableOpacity> 
                     <View style={{  flexDirection: "row"}}>
                  
                     </View>           
                  </TouchableOpacity>        
                </View>
    
                 <Text style={styles.textAgradecemos}>Agradecemos mucho la información que nos ha proporcionado, recibirá un correo en cuanto terminemos de validar sus datos.</Text>
    
                 <View style={{marginTop:"40%",height:"20%",bottom:"5%"}}>
                    <TouchableOpacity disabled={!identidad} style={{height:"100%", padding:"0%"}}  onPress={Datos}>
                       <View style={styles.vista}>
                          <Text style={styles.buttonText}>FINALIZAR</Text>
                       </View>
                   </TouchableOpacity>
                 </View>   
            </View>   
          }



<View style={{position:'absolute',top:"100%",width:"100%",marginTop:10}}>
               <Footer></Footer>
             </View> 
       </MediaQuery>
     </MediaQuery>  

     </ScrollView>


   )

}

export default ConfirmarIdentidad;

const styles = StyleSheet.create({
    container: {
    
     paddingLeft:"6%",
     paddingRight:"6%"
    },
    header:{
      fontWeight:'bold',
      fontSize: 17,
      color:'black',
      marginBottom:"5%",
      alignSelf:'center',
      textAlign:"center",
      "fontFamily": "Helvetica Neue LT Std",

    },
    header_530:{
      fontWeight:'bold',
      fontSize: 20,
      color:'black',
      marginBottom:"5%",
      alignSelf:'center',
      textAlign:"center",
      "fontFamily": "Helvetica Neue LT Std",
    },
    header2:{        
        fontSize: 18,
        color:'black',
        textAlign:"center",
        "fontFamily": "Helvetica Neue LT Std",
      },
      textSpinner:{
        fontSize: 15,
        color: "black",
        "fontFamily": "Helvetica Neue LT Std",
        marginTop:5,
        alignSelf:"center"
      },
    text:{
        marginTop:"15%",
        fontSize: 15,
        color:'black',
        textAlign:"center",
        "fontFamily": "Helvetica Neue LT Std",
    },

    text_530:{
      marginTop:"5%",
      fontSize: 18,
      color:'black',
      textAlign:"center",
      "fontFamily": "Helvetica Neue LT Std",
  },
    textAgradecemos:{
        marginTop:"10%",
        fontSize: 15,
        color:'black',
        textAlign:"center",
        "fontFamily": "Helvetica Neue LT Std",
    },
    textAgradecemos_530:{
      marginTop:"5%",
      fontSize: 18,
      color:'black',
      textAlign:"center",
      "fontFamily": "Helvetica Neue LT Std",
  },
    vista:{
         backgroundColor:`rgba(206, 31, 40, 1)`,
         borderRadius:40,
         borderColor: "black",
         borderWidth:2,
         height:"40%",
         width:"100%",
         display:"flex",
         justifyContent:"center",
         alignItems:"center"
    },
    vista_530:{
      backgroundColor:`rgba(206, 31, 40, 1)`,
      borderRadius:40,
      borderColor: "black",
      borderWidth:2,
      height:"35%",
      width:"55%",
      display:"flex",
      alignSelf:"center",
      justifyContent:"center",
      alignItems:"center"
 },
 vistaFinalizar_530:{
  backgroundColor:`rgba(206, 31, 40, 1)`,
  borderRadius:40,
  borderColor: "black",
  borderWidth:2,
  height:"35%",
  width:"55%",
  display:"flex",
  alignSelf:"center",
  justifyContent:"center",
  alignItems:"center"
},
    buttonText: {
       
        paddingTop:"5%",
        paddingBottom:"5%",
        color: 'white',
        fontWeight:'bold',
      },
      logoUser:{
         
          alignSelf:"center",
           width:100,
           height:100,         
      },  
      logoUser_530:{
        alignSelf:"center",
         width:150,
         height:150,         
    }, 
      logoUpload:{
        width:30,
        height:30,
   },
   logo: {
    width: 150,
    height: 150,
    alignSelf:"center"
  },
  logo_530: {
    width: 300,
    height: 300,
    alignSelf:"center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    "fontFamily": "Helvetica Neue LT Std",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    "fontFamily": "Helvetica Neue LT Std",
  }   
  });




