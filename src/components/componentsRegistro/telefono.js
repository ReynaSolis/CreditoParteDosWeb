import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableOpacity } from "react-native";
import logo from "../../assets/img/logo.png";
import mexico from "../../assets/img/mexico.png";
import { validacionTelefono } from '../../api/validacionTelefono';

import Footer from '../../Footer/Footer';
import MediaQuery from 'react-responsive';
import ContextoUsuario from '../../context';
import Modal from "react-modal";
//telefono
export default class Telefono extends React.Component{

  constructor(){
    super()
    this.state={
      telv: '',
      show: false,
    }
  }
  //cambia input
  changetel(telv){
  this.setState({telv})
  }
  
  static contextType=ContextoUsuario;

  async validado(tel){
  if(tel.length==10){
    const obj={numero: tel}
    const telefono = await validacionTelefono(obj);
    //const objMod={curp: this.props.route.params.curp, telefono: this.state.telv}
    //console.log(obj);
    //console.log(telefono);
    //console.log(objMod);
    if(telefono.respuesta==="000"){
      this.props.history.push('ValidarTelefono');
    }
  }else{
    this.setState({show:true})
  }
  }
//oculta modal
  hidden(){
    this.setState({show:false})
  }
  render(){
    const { tel, setTel } = this.context;

  return (
    
        <View style={{backgroundColor: 'white'}}>
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Validar número telefónico</Text>
         <Text style={styles.title}>A continuación recibirás un SMS con un código de validación</Text>
         <Text style={styles.movil}>Número móvil:</Text>

        <View style={styles.container}>
        <Image style={styles.bandera} source={mexico}/>
        <Text style={styles.pais}>+52</Text>
         <TextInput style={styles.input} 
         placeholder=" 10 dígitos"
         maxLength={10}
         keyboardType="numeric"
         onChangeText={(telv)=>{
           setTel(telv)
         }}//this.changetel(telv)}
        // value={this.state.telv}
         />
        </View>
      
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btn2}
            onPress={() => this.validado(tel)}
            >
          <Text style={{color:'white'}}>OBTENER CÓDIGO</Text>
          </TouchableOpacity>
            
          </View>


        <Modal
        isOpen={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext2}>Introduce un número de celular válido</Text>
            
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
    marginRight: 20,
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
   movil: {
    color: "black",
    marginLeft:20,
    
    fontSize: 20
   },
   container: {
    marginBottom: 20,
    marginTop: 30,
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
   },
   bandera: {
    width: 50,
    height: 40,
    display: 'flex',
   },
   pais: {
    fontWeight:'bold',
    marginLeft: 10,
    marginRight: 10,
    

   },
   input: {
    height:40,
    width:250, 
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
        modaltext2: {
          fontSize:20,
          fontWeight:'bold',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          
          
        },

});
