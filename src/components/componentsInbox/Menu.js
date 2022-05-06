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


  const Menu = ({ history }) => {
    //jalar este dato de la base de datos
    const {nombre}=useContext(ContextoUsuario)
    //const [nombreUsuario,setNombreUsuario]=useState("Jose Antonio Santos Cruz");

     const cargarDocumentos=()=>{
      history.push("DocumentosRequeridos");
    }
    
    const getNombre=async()=>{
      
    }

    React.useEffect(()=>{
        getNombre()
    },[])


      return (
          <ScrollView  style={{backgroundColor:"white"}}>
            <>
             <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
              <MediaQuery minDeviceWidth={530}>
               <View style={styles.container_530}>
               <Image style={styles.logo_530} source={logo} />
               <Text style={styles.textTitle_530}>Bienvenido {nombre}</Text> 
               <View style={styles.menu_530}>
                    
                      <TouchableOpacity style={{flexDirection: "row",justifyContent:"flex-start",marginRight:5}} >                  
                          <View  >
                           <View style={styles.redondo_530}>
                              <Text style={{position:"absolute",top:16,left:10}}>CPT</Text>
                           </View>
                             
                          </View>

                          <View style={{ marginLeft:10,marginTop:12 }}>
                               <Text style={styles.textContenido_530}>Descargar solicitud de crédito</Text>
                          </View>

                      </TouchableOpacity>



                      <TouchableOpacity style={{flexDirection: "row",justifyContent:"flex-start",marginTop:30}} onPress={()=>cargarDocumentos()} >                  
                   
                           <View style={styles.redondo_530}>
                              <Text style={{position:"absolute",top:16,left:10}}>CPT</Text>
                           </View>
                      
                          <View style={{ marginLeft:10,marginTop:12 }}>
                               <Text style={styles.textContenido_530}>Crédito Para Ti: Solicitud de Envío de Documentos</Text>
                          </View>
                      </TouchableOpacity>           
               </View>            
               </View> 
               
               <View style={{position:'relative',top:"25%"}}>
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
                    
                      <TouchableOpacity style={{flexDirection: "row",justifyContent:"flex-start",marginRight:5}} >                  
                          <View  >
                           <View style={styles.redondo}>
                              <Text style={{position:"absolute",top:12,left:4}}>CPT</Text>
                           </View>
                             
                          </View>

                          <View style={{ marginLeft:10,marginTop:12 }}>
                               <Text style={styles.textContenido}>Descargar solicitud de crédito</Text>
                          </View>

                      </TouchableOpacity>



                      <TouchableOpacity style={{flexDirection: "row",justifyContent:"flex-start",marginTop:30}} onPress={()=>cargarDocumentos()} >                  
                          <View>
                           <View style={styles.redondo}>
                              <Text style={{position:"absolute",top:12,left:4}}>CPT</Text>
                           </View>
                             
                          </View>
                          <View style={{ marginLeft:10,marginTop:12 }}>
                               <Text style={styles.textContenido}>Crédito Para Ti: Solicitud de Envío de Documentos</Text>
                          </View>
                      </TouchableOpacity>           
               </View>      
               <View style={{position:'relative',marginTop:"65%",height:"1%"}}>
                 <Footer></Footer>
               </View> 
                </View>  

                
              </MediaQuery>
            </MediaQuery>
       

          
  
            </>
          </ScrollView>
      )
  }

  export default Menu;

  const styles = StyleSheet.create({
    container:{
          
           marginTop:0,
           height:"100%"
    } , 
    container_530:{
      marginLeft:5,
      marginRight:5,
      marginTop:20,
      height:"25%"
    } , 
    logo: {
      width: 150,
      height: 150,
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 5
    },
    logo_530: {
      width: 300,
      height: 300,
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',

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
        alignSelf:"center"
     
      },
      textContenido_530: {
        color: "black",
        fontFamily: "Helvetica Neue LT Std",
        fontSize:18,
        fontWeight:"500",
        alignSelf:"center"
     
      },
       menu:{
       flex:1,
       marginTop:20,
       marginLeft:20,
       marginRight:20
    },
    menu_530:{
      flex:1,
      marginTop:40,
      marginLeft:20,
      marginRight:20
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
      width:50,
      height:50,
      borderColor: "black",
      borderWidth:2,
      
  },
})