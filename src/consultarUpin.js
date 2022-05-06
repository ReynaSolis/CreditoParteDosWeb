import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableOpacity } from "react-native";
import logo from "./assets/img/logo.png";
import {validacionCurp} from "./api/validacionCurp";
import { validacionTelefono } from './api/validacionTelefono';
import Footer from './Footer/Footer';
import ContextoUsuario from './context';
import MediaQuery from 'react-responsive';
import Modal from "react-modal";

//recuperacion uPIN

export default class ConsultarUpin extends React.Component{
  static contextType = ContextoUsuario;

    constructor(){
        super()
        this.state={
          emailv: '',
          show: false,
          identificadorJourney: '',
          telefono:''
        }
      }
      

//////////////// validacion email
        async validado () {
          //CONSULTA BASE DE DATOS PARA TELEFONO
          
          const obj= {
            curp: this.context.curp,
            identificadorJourney: "501"
          }
          
          const apiResponse=await validacionCurp(obj);
          if(apiResponse.codigo==="000"){
            const telefonoBase = apiResponse.respuesta;

            this.setState({telefono:telefonoBase})
            this.setState({identificadorJourney:"501"})
            this.context.setTel(telefonoBase)
            this.context.setIdentificadorJourney("501")
            //console.log(telefonoBase);

            //manda codigo a celular
            const obj={numero: this.state.telefono}
            const telefono = await validacionTelefono(obj);

            if(telefono.respuesta==="000"){
              this.setState({show:true})
            }else {
              console.log("Mensaje no enviado.")
            }
            
          }else {
            console.log("No registrado.")
          }

          
            }



          hidden(){
            this.setState({show:false})
            this.props.history.push('NuevoUpin')
          }



    render(){


    return (

        <View style={{backgroundColor: 'white'}}>
            
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Recuperación uPIN</Text>
            <Text style={styles.email}>Se te enviará un código a tu teléfono.</Text>

            <View style={styles.btn}>
          <TouchableOpacity style={styles.btn2}
            onPress={() => this.validado()}
            >
          <Text style={{color:'white'}}>ENVIAR CÓDIGO</Text>
          </TouchableOpacity>
            
          </View>
            

        <Modal
        isOpen={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Código enviado.</Text>
              <Text style={styles.modaltext2}>Revisa tu bandeja de mensajería.</Text>
        
              <View style={styles.btnmodal}>
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
        
        
    )
}
}

const styles = StyleSheet.create({
    title: {
     color: "black",
     marginLeft: 'auto',
     marginRight: 'auto',
     marginBottom:20,
     fontWeight:'bold',
  
    fontSize:20
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
        marginBottom:20,
        textTransform: 'lowercase',
        borderColor:'rgba(206, 31, 40, 1)',
        
       },
       email: {
        color: "black",
        marginLeft:20,
        marginBottom:20,
        fontSize:15,
      
       },
       btn: {
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 280,
        marginRight: 20,
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
    margin:50,
    padding:40,
  
    
  },
  modaltext: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  
    
  },
  modaltext2: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

    fontSize:20,
    
  },
  btnmodal: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor:'rgba(206, 31, 40, 1)',
    alignItems:'center'
  },
})