import React, { useState, useContext } from "react";
import aprobarEnable from "../../assets/img/aprobarEnable.png";
import aprobarDisable from "../../assets/img/aprobarDisable.png";
import upload from "../../assets/img/upload.png";
import logo from "../../assets/img/logo.png"
//import WebcamComponent from "../componentesDocs/WebcamComponent";
import MediaQuery from 'react-responsive';
//aqui
import ContextoUsuario from '../../context';
import Footer from '../../Footer/Footer';
//import { NavigationContainer, CommonActions } from '@react-navigation/native';


//importar componentes que podriamos usar de react
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";

const HomeScreen = ({ history }) => {
  //usar el contexto
  const { domicilio, setDomicilio } = useContext(ContextoUsuario);
  const { nomina, setNomina } = useContext(ContextoUsuario);
  const { identificacion, setIdentificacion } = useContext(ContextoUsuario);
  const { credito, setCredito } = useContext(ContextoUsuario);
  const { confirmarDocumentos, setConfirmarDatos } =useContext(ContextoUsuario);
  const { mostrarCamara, setMostarCamara } = useContext(ContextoUsuario);

  const { capturaIdentificacion } = useContext(ContextoUsuario);

  const {curp}=useContext(ContextoUsuario)
  const {nombre}=useContext(ContextoUsuario)
  
  const [domicilioFile, setDomicilioFile] = useState();
  const [nominaFile, setNominaFile] = useState();
  const [indentificacionFile, setIdentificacionFile] = useState();
  const [creditoFile, setCreditoFile] = useState();

  const [variableGuardado, setVariableGuardado] = useState();
  const [cargarDocumentos,setCargarDocumentos]=useState(false);
  /*const Confirmar = async (e) => {
    e.preventDefault();

    //const form = new FormData(e.target);
    const form = new FormData();
    form.append("credito", creditoFile);
    form.append("nomina", nominaFile);
    form.append("domicilio", domicilioFile);
    await fetch("http://localhost:4000/asd", {
      method: "post",
      body: form,
    });

    const data = new FormData();
    data.append("foto", capturaIdentificacion.uri);
    await fetch("http://localhost:4000/foto/asd/identificacion", {
      method: "post",
      body: data,
    })
    navigation.navigate("confirmarIdentidad");
  };*/
  function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
  
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ia], {type:mimeString});
  }

  const Confirmar = async (e) => {
    e.preventDefault();
   
    let conversion= dataURItoBlob(capturaIdentificacion.uri)
    //const form = new FormData(e.target);
    const form = new FormData();
    form.append("files", creditoFile);
    form.append("files", nominaFile);
    form.append("files", domicilioFile);
    form.append("folder", curp);
 
   
    //await fetch("http://18.237.203.56/folder/upload", {
      await fetch(" https://labsdsmooi.execute-api.us-west-2.amazonaws.com/folder/upload", {
      method: "post",
      body: form,
    })
   
    

    const data = new FormData();
    data.append("file", conversion);
    data.append("fileName",curp+"/identificacion.png")
    
    //await fetch("http://18.237.203.56/file/upload", {
    await fetch("https://labsdsmooi.execute-api.us-west-2.amazonaws.com/file/upload", {
      method: "post",
      body: data,
    })
    .then(()=>{
       setCargarDocumentos(false)
    })

    history.dispatch('ConfirmarIdentidad')

    //navigation.navigate("ConfirmarIdentidad");
  }

  const subirCredito = (event) => {
    setCreditoFile(event.target.files[0]);
    setCredito(true);
  };

  const subirNomina = (event) => {
    setNominaFile(event.target.files[0]);
    setNomina(true);
  };

  const subirDomicilio = (event) => {
    setDomicilioFile(event.target.files[0]);
    setDomicilio(true);
  };

  const abrir = (variable) => {
    //obtenemos el valor del id segun el doumento que queramos subir y con la funcion click
    //lo abrimos para seleccionar el documento
    if (variable == "domicilio") {
      document.getElementById("domicilio").click();
    } else if (variable == "nomina") {
      document.getElementById("nomina").click();
    } else if (variable == "identificacion") {
      document.getElementById("identificacion").click();
    } else if (variable == "credito") {
      document.getElementById("credito").click();
    }
  };

  React.useEffect(() => {
    if (domicilio && credito && nomina && identificacion) {
      setConfirmarDatos(true);
    }
  });

  return (
   

    <ScrollView style={{backgroundColor:"white"}}>

       <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
              <MediaQuery minDeviceWidth={530}>
              {mostrarCamara && (
               <View style={styles.container}>
                 <Image source={logo} style={styles.logo_530} />
                 {/** 
                 <WebcamComponent variableGuardado={variableGuardado}></WebcamComponent>
                 */}
               </View>
               
            )}

            {!mostrarCamara && (

              <View style={styles.container}>
                <Image source={logo} style={styles.logo_530} />
                <Text style={styles.header_530}>Sube tus Documentos{"\n"}{"\n"}</Text>
                <Text style={styles.header2_530}>Procura que tus documentos sean legibles{"\n"}{"\n"}</Text>
                <form onSubmit={Confirmar} method="post" encType="multipart/form-data">
                  
            
                  <View style={{ top: "5%" }}>
                    <Text style={styles.text_530}>Comprobante de domicilio</Text>
                      <View style={{flexDirection: "row",justifyContent: "space-between",}}>
                        <TouchableOpacity style={{alignSelf: "flex-start"}} disabled={domicilio} onPress={() => abrir("domicilio")}>
                          <input id="domicilio" type="file" style={{ display:"none"}} name="domicilio" onChange={subirDomicilio}/>
                          <View style={{ flexDirection: "row" }}>
                             <Image source={upload} style={styles.logoUpload} />
                             <Text style={styles.text_subirDocumento}>Subir documento (recuerda subir un pdf)</Text>
                          </View>
                        </TouchableOpacity>

                        <View style={{ alignSelf: "flex-end" }}>
                           {domicilio ? (
                               <Image source={aprobarEnable} style={styles.logoCheck} />
                                ) : (
                               <Image source={aprobarDisable} style={styles.logoCheck} />
                           )}
                        </View>
                      </View>

                    <Text style={styles.text_530}>{"\n"}{"\n"}Recibo de nómina</Text>
                    <View style={{flexDirection: "row",justifyContent: "space-between",}}>
                       <TouchableOpacity style={{ alignSelf: "flex-start" }} disabled={nomina} onPress={() => abrir("nomina")}>
                          <input id="nomina" type="file" style={{ display: "none" }} name="nomina" onChange={subirNomina}/>
                          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                             <Image source={upload} style={styles.logoUpload} />
                             <Text style={styles.text_subirDocumento}>Subir documento (recuerda subir un pdf)</Text>
                          </View>
                       </TouchableOpacity>

                       <View style={{ alignSelf: "flex-end" }}>
                         {nomina ? (
                            <Image source={aprobarEnable} style={styles.logoCheck} />
                            ) : (
                            <Image source={aprobarDisable} style={styles.logoCheck} />
                          )}
                       </View>
                    </View>

                    <Text style={styles.text_530}>{"\n"}{"\n"}Identificación oficial</Text>
                    <View style={{flexDirection: "row",justifyContent: "space-between",}}>
                       <TouchableOpacity style={{ alignSelf: "flex-start" }} disabled={identificacion} onPress={() => {setMostarCamara(true);
                                                                                                                       setVariableGuardado("identificacion");}}>
                          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                             <Image source={upload} style={styles.logoUpload} />
                             <Text style={styles.text_subirDocumento}>Subir documento (escanea tu identificación)</Text>
                          </View>
                       </TouchableOpacity>

                       <View style={{ alignSelf: "flex-end" }}>
                        {identificacion ? (
                    <Image source={aprobarEnable} style={styles.logoCheck} />
                  ) : (
                    <Image source={aprobarDisable} style={styles.logoCheck} />
                  )}
                </View>
              </View>

              <Text style={styles.text_530}>
                {"\n"}
                {"\n"}Solicitud de crédito firmada
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{ alignSelf: "flex-start" }}
                  disabled={credito}
                  onPress={() => abrir("credito")}
                >
                  <input
                    id="credito"
                    type="file"
                    style={{ display: "none" }}
                    name="credito"
                    onChange={subirCredito}
                  />
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Image source={upload} style={styles.logoUpload} />
                    <Text style={styles.text_subirDocumento}>Subir documento (recuerda subir un pdf)</Text>
                  </View>
                </TouchableOpacity>
                <View style={{ alignSelf: "flex-end" }}>
                  {credito ? (
                    <Image source={aprobarEnable} style={styles.logoCheck} />
                  ) : (
                    <Image source={aprobarDisable} style={styles.logoCheck} />
                  )}
                </View>
              </View>
                  </View>

                  {cargarDocumentos&&
                      <>
                         <View style={{marginTop:40,marginBottom:5}}>
                         <ActivityIndicator size="large" color="rgba(206, 31, 40, 1)" />
                         <Text style={styles.textSpinner}>Subiendo archivos</Text>
                         </View>
                         
                      </>
                      
                  }

            <View style={{ marginTop: "10%", bottom: "5%",alignItems:"center" }}>
              <button disabled={!confirmarDocumentos}
                style={{
                  height: "30%",
                  background: "none",
                  outline: "none",
                  border: "none",
                }}
                type="submit"
                >
                <View style={styles.vista_530}>
                  <Text style={styles.buttonText_530}>CONFIRMAR DOCUMENTOS</Text>
                </View>
              </button>
            </View>

                </form>
              </View>

             )}
            
           

             <View style={{position:'absolute',top:"100%",width:"100%",marginTop:10}}>
               <Footer></Footer>
             </View> 

            </MediaQuery>
        </MediaQuery>    

        <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
          <MediaQuery maxDeviceWidth={529}>  

            {mostrarCamara && (
              <>
                  <View style={styles.container}>
                 <Image source={logo} style={styles.logo} />
                 {
                   /* 
                 <WebcamComponent variableGuardado={variableGuardado}></WebcamComponent>
                 */
                }
               </View>
               <View style={{position:'absolute',top:"100%",width:"100%",marginTop:10}}>
                 <Footer></Footer>
               </View> 
             
              </>
             
            )}

            {!mostrarCamara && (
                <>
                 <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <form onSubmit={Confirmar} method="post" encType="multipart/form-data">
                  <Text style={styles.header}>Sube tus Documentos{"\n"}{"\n"}{" "}</Text>
                  <Text style={styles.header2}>Procura que tus documentos sean legibles{"\n"}{"\n"}</Text>
            
                  <View style={{ top: "5%" }}>
                    <Text style={styles.text}>Comprobante de domicilio</Text>
                      <View style={{flexDirection: "row",justifyContent: "space-between",}}>
                        <TouchableOpacity style={{alignSelf: "flex-start"}} disabled={domicilio} onPress={() => abrir("domicilio")}>
                          <input id="domicilio" type="file" style={{ display:"none"}} name="domicilio" onChange={subirDomicilio}/>
                          <View style={{ flexDirection: "row" }}>
                             <Image source={upload} style={styles.logoUpload} />
                             <Text style={{ marginTop: 2 }}>Subir documento (recuerda subir un pdf)</Text>
                          </View>
                        </TouchableOpacity>

                        <View style={{ alignSelf: "flex-end" }}>
                           {domicilio ? (
                               <Image source={aprobarEnable} style={styles.logoCheck} />
                                ) : (
                               <Image source={aprobarDisable} style={styles.logoCheck} />
                           )}
                        </View>
                      </View>

                    <Text style={styles.text}>{"\n"}{"\n"}Recibo de nómina</Text>
                    <View style={{flexDirection: "row",justifyContent: "space-between",}}>
                       <TouchableOpacity style={{ alignSelf: "flex-start" }} disabled={nomina} onPress={() => abrir("nomina")}>
                          <input id="nomina" type="file" style={{ display: "none" }} name="nomina" onChange={subirNomina}/>
                          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                             <Image source={upload} style={styles.logoUpload} />
                             <Text style={{ marginTop: 2 }}>Subir documento (recuerda subir un pdf)</Text>
                          </View>
                       </TouchableOpacity>

                       <View style={{ alignSelf: "flex-end" }}>
                         {nomina ? (
                            <Image source={aprobarEnable} style={styles.logoCheck} />
                            ) : (
                            <Image source={aprobarDisable} style={styles.logoCheck} />
                          )}
                       </View>
                    </View>

                    <Text style={styles.text}>{"\n"}{"\n"}Identificación oficial</Text>
                    <View style={{flexDirection: "row",justifyContent: "space-between",}}>
                       <TouchableOpacity style={{ alignSelf: "flex-start" }} disabled={identificacion} onPress={() => {setMostarCamara(true);
                                                                                                                       setVariableGuardado("identificacion");}}>
                          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                             <Image source={upload} style={styles.logoUpload} />
                             <Text style={{ marginTop: 2 }}>Subir documento (escanea tu identificación)</Text>
                          </View>
                       </TouchableOpacity>

                       <View style={{ alignSelf: "flex-end" }}>
                        {identificacion ? (
                    <Image source={aprobarEnable} style={styles.logoCheck} />
                  ) : (
                    <Image source={aprobarDisable} style={styles.logoCheck} />
                  )}
                </View>
              </View>

              <Text style={styles.text}>
                {"\n"}
                {"\n"}Solicitud de crédito firmada
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{ alignSelf: "flex-start" }}
                  disabled={credito}
                  onPress={() => abrir("credito")}
                >
                  <input
                    id="credito"
                    type="file"
                    style={{ display: "none" }}
                    name="credito"
                    onChange={subirCredito}
                  />
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Image source={upload} style={styles.logoUpload} />
                    <Text style={{ marginTop: 2 }}>Subir documento (recuerda subir un pdf)</Text>
                  </View>
                </TouchableOpacity>
                <View style={{ alignSelf: "flex-end" }}>
                  {credito ? (
                    <Image source={aprobarEnable} style={styles.logoCheck} />
                  ) : (
                    <Image source={aprobarDisable} style={styles.logoCheck} />
                  )}
                </View>
              </View>
                  </View>

               
                  {cargarDocumentos&&
                      <>
                         <View style={{marginTop:40,marginBottom:5}}>
                         <ActivityIndicator size="large" color="rgba(206, 31, 40, 1)" />
                         <Text style={styles.textSpinner}>Subiendo archivos</Text>
                         </View>
                         
                      </>
                      
                  }

            <View style={{ marginTop: "15%", height: "20%", bottom: "5%" }}>
              <button
                disabled={!confirmarDocumentos}
                style={{
                  height: "100%",
                  background: "none",
                  outline: "none",
                  border: "none",
                }}
                type="submit"
                onClick={()=>{
                  setCargarDocumentos(true)
                }}
              >
                <View style={styles.vista}>
                  <Text style={styles.buttonText}>CONFIRMAR DOCUMENTOS</Text>
                </View>
              </button>
            </View>

                </form>
              </View>
              
            
              <View style={{position:'relative',top:"10%"}}>
              <Footer></Footer>
            </View> 
                </>
             

             )}

            

          </MediaQuery>
        </MediaQuery>         
      
        

    </ScrollView>
    
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
  container: {
    paddingLeft: "6%",
    paddingRight: "6%",
    backgroundColor:"white",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginBottom: "5%",
    alignSelf: "flex-start",
    "fontFamily": "Helvetica Neue LT Std",
  },
  header2: {
    fontSize: 18,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
  },
  header_530: {
    fontWeight: "bold",
    fontSize: 23,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
    alignSelf: "flex-start",
  },
  header2_530: {
    fontSize: 21,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
  },
  text: {
    fontSize: 15,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
  },
  textSpinner:{
    fontSize: 15,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
    marginTop:5,
    alignSelf:"center"
  },
  text_530: {
    fontSize: 18,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
  },
  text_subirDocumento:{
    marginTop: "2%",
    fontSize: 15,
    color: "black",
    "fontFamily": "Helvetica Neue LT Std",
  },
  vista: {
    backgroundColor: `rgba(206, 31, 40, 1)`,
    borderRadius: 40,
    borderColor: "black",
    borderWidth: 2,
    height: "45%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    paddingLeft: "18%",
    paddingRight: "18%",
    paddingTop: "4%",
    paddingBottom: "4%",
    color: "white",
    fontWeight: "bold",
  },
  vista_530: {
    backgroundColor: `rgba(206, 31, 40, 1)`,
    borderRadius: 40,
    borderColor: "black",
    borderWidth: 2,
    height: 50,
    width: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText_530: {
    paddingLeft: "18%",
    paddingRight: "18%",
    paddingTop: "4%",
    paddingBottom: "4%",
    color: "white",
    fontWeight: "bold",
  },
  logoCheck: {
    width: 30,
    height: 30,
  },
  logoUpload: {
    width: 30,
    height: 30,
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
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  },
});
