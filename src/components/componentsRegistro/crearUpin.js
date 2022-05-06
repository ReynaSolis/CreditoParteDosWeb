import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableOpacity } from "react-native";
import logo from "../../assets/img/logo.png";
import { insertarUser } from '../../api/insertUser';

import Footer from '../../Footer/Footer';
import MediaQuery from 'react-responsive';
import ContextoUsuario from '../../context';
import Modal from "react-modal";
//crear upin
export default class CrearUpin extends React.Component{
  constructor(props){
    super(props)
    this.state={
      upinew1: '',
      upinew2: '',
      show: false,
      identificadorJourney: '',
    }
  }
  hidden(){
    this.setState({show:false})
  }
  
  changeupinew1(upinew1){
    this.setState({upinew1})
    }

  changeupinew2(upinew2){
  this.setState({upinew2})
  }
  
  static contextType=ContextoUsuario;
  
 async  validado(upin,tel,curp){
  
  if(upin.length==6 && this.state.upinew2.length==6 &&
    upin=== this.state.upinew2){
      
     /* const objM={
        telefono:this.props.route.params.telefono,
        curp:this.props.route.params.curp
      };

      const objInt= {
        curp: objM.curp,
        telefono: objM.telefono, 
        upin: this.state.upinew1,
        identificadorJourney: "501"
      };*/
      //console.log(curp + tel + upin)
      const objInt2= {
        curp: curp,
        telefono: tel, 
        upin: upin,
        identificadorJourney: "501"
      };

      //console.log(objM);
      //console.log(objInt);
      const resgistrar=await insertarUser(objInt2);

      if(resgistrar.codigo==="000"){
        //console.log("registrado")
        this.props.history.push('ContinuarUpin')
      }else{
        console.log("Algo falló");
      }

    
    
  }else{
    this.setState({show:true})
  }
  }

  
  
  
  

  render(){
  const {upin,setUpin,tel,curp} = this.context;
  
    
  return (
    
        <View >
         
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>Crear uPIN</Text>
         <Text style={styles.instruccion}>Establece tu uPIN de 6 números y confírmalo</Text>

         <Text style={styles.instruccion}>uPIN:</Text>

         <TextInput style={styles.input} 
         placeholder=" uPIN 6 dígitos"
         maxLength={6}
         secureTextEntry={true}
         keyboardType="numeric"
         password={true}
         onChangeText={(upinew1)=> {
          setUpin(upinew1)
         }}
         //this.changeupinew1(upinew1)}
         //value={this.state.upinew1}
         />

        <Text style={styles.instruccion}>Confirmar uPIN:</Text>

        <TextInput style={styles.input} 
        placeholder=" Confirmar uPIN"
        maxLength={6}
        secureTextEntry={true}
        keyboardType="numeric"
        password={true}
        onChangeText={(upinew2)=>this.changeupinew2(upinew2)}
        value={this.state.upinew2}
       

        />

      <View style={styles.btn}>
                  <TouchableOpacity style={styles.btn2}
                  onPress={() => this.validado(upin,tel,curp)}
                  >
                    <Text style={{color:'white'}}>ESTABLECER UPIN</Text>
                  </TouchableOpacity>
                  </View>

        <Modal
        isOpen={this.state.show}
        >
          
            <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
            <Text style={styles.modaltext}>uPIN incorrecto/No coincide</Text>
              <Text style={styles.modaltext2}>Recuerda que tu uPIN tiene 6 números y debe coincidir en ambos recuadros.</Text>
            
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
    marginBottom: 30,
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
    marginBottom: 20,
   
    fontSize: 20
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
    
    fontSize: 20
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
    
    fontSize: 20
    
  },
  modaltext: {
    fontSize:15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  
    fontSize: 20
    
  },
  modaltext2: {
    fontSize:10,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
 
    fontSize: 20
    
  },


});
