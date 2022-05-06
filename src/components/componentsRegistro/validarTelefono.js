import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableOpacity  } from "react-native";
import logo from "../../assets/img/logo.png";
import { validaCodigoTelefono } from '../../api/validaCodigoTelefono';
import { validacionTelefono } from '../../api/validacionTelefono';

import Footer from '../../Footer/Footer';
import MediaQuery from 'react-responsive';
import ContextoUsuario from '../../context';
import Modal from "react-modal";

//validacion telefono
export default class ValidarTelefono extends React.Component{
  static contextType=ContextoUsuario;
  
  constructor(){
    super()
    this.state={
      telva: '',
      show: false,
      reenviado: false
    }
  }
  hidden(){
    this.setState({show:false})
  }

  hidden2(){
    this.setState({reenviado:false})
  }
  
  changetelva(telva){
  this.setState({telva})
  }
  
  async reenviar(tel){
    const obj={numero: tel}
    const telefono = await validacionTelefono(obj);
    
    //console.log(obj);
    console.log(tel);
    
    if(telefono.respuesta==="000"){
      this.setState({reenviado:true})
    }
  }
  
async validado(telefonoValido,tel,curp){
 
  if(telefonoValido.length==4){
   // const objModel={telefono:this.props.route.params.telefono,curp:this.props.route.params.curp};
    //console.log(objModel);
    const obj={codigo:telefonoValido, numero:tel,curp:curp }
    const valCode= await validaCodigoTelefono(obj);
    //console.log(obj);
    //console.log(valCode);
    if(valCode.respuesta==="000"){
      this.props.history.push('GeneraUpin')
    }else{this.setState({show:true})}
  }else{
    this.setState({show:true})
  }
  }
  render(){
    const {  telefonoValido,setTelefonoValido,tel,curp} = this.context;

  return (
    
        <View style={{backgroundColor: 'white'}}>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Ingresar código de validación</Text>
         <Text style={styles.instruccion}>Ingresa el código de números que enviamos a tu celular vía SMS:</Text>
         

         <TextInput style={styles.input} 
         placeholder=" codigo 4 dígitos"
         maxLength={4}
         keyboardType="numeric"
         onChangeText={(telva)=>{
          setTelefonoValido(telva)
         }}
        //this.changetelva(telva)}
        // value={this.state.telva}
         
         />

      
                  <View style={styles.btn}>
                  <TouchableOpacity style={styles.btn2}
                  onPress={() => this.validado(telefonoValido,tel,curp)}
                  >
                    <Text style={{color:'white'}}>VALIDAR CELULAR </Text>
                  </TouchableOpacity>
                  </View>

        <Text style={styles.advertencia}>Tu código expira en 90 segundos</Text>
        <Text style={styles.advertencia}>Si no lo recibes haz clic aquí para reenviar.</Text>

        <Text onPress={() => this.reenviar(tel)}
        style={styles.reenviar}>ENVIARMELO DE NUEVO</Text>

        <Modal
        isOpen={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Código de validación incorrecto</Text>
              <Text style={styles.modaltext2}>Revisa tus SMS para ingresar correctamente el código. 
              De no haber recibido el código favor de seleccionar "ENVIÁRMELO DE NUEVO".</Text>

              <View style={styles.btn}>
                  <TouchableOpacity style={styles.btn2}
                  onPress={() => this.hidden()}
                  >
                    <Text style={{color:'white'}}>ENTENDIDO</Text>
                  </TouchableOpacity>
                  </View>
            </View>
            </View>

        </Modal>


        <Modal
        isOpen={this.state.reenviado}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Código de verificación reenviado</Text>
              

              <View style={styles.btn}>
                  <TouchableOpacity style={styles.btn2}
                  onPress={() => this.hidden2()}
                  >
                    <Text style={{color:'white'}}>ENTENDIDO</Text>
                  </TouchableOpacity>
                  </View>
            </View>
            </View>

        </Modal>
        <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
              <MediaQuery minDeviceWidth={530}>
                  <Footer></Footer>
              </MediaQuery>
          </MediaQuery>  

           <MediaQuery minDeviceWidth={400} device={{ deviceWidth: 1500 }}>
             <MediaQuery maxDeviceWidth={529}> 
                <View style={{position:"fixed",bottom:0, width:'100%'}}>
                  <Footer></Footer>
                </View>
             </MediaQuery>
           </MediaQuery> 
         </View>
        
        

         
     
  );
}
}






const styles = StyleSheet.create({
   title: {
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
    fontSize:20,
    fontWeight:'bold',
    
   },
   logo: {
    width: 150,
    height: 150,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
   },
   input: {
    height:40, 
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
    borderWidth: 1,
   

    borderColor:'rgba(164, 167, 169, 1)',
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.47058823529411764,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    
   },
   btn: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor:'rgba(206, 31, 40, 1)',
  
    alignItems:'center'

  },
  btn2: {
    marginLeft: 20,
    marginRight: 20,
    marginTop:10,
    marginBottom:10,
    backgroundColor:'rgba(206, 31, 40, 1)',

    alignItems:'center'

  },
  instruccion: {
    color: "black",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    
    fontSize:20,
   },
   advertencia: {
    color: "black",
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',

    fontSize:20
   },
   reenviar: {
    color: "black",
    marginTop:30,
    marginBottom:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
 
    fontSize:15
   },
         //modal
  modalcontainer: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    
  },
  modaltextcontainer: {
    alignItems: 'center',
    backgroundColor:'white',
    borderWidth:3,
    margin:30,
    padding:20,
    
    
  },
  modaltext: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

    
  },
  modaltext2: {
    fontSize:20,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    
    
  },


});
