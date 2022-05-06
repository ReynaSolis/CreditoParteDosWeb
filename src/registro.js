import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableOpacity,ScrollView } from "react-native";
import logo from "./assets/img/logo.png";
import { validacionCurp } from './api/validacionCurp';
import Footer from './Footer/Footer';
import MediaQuery from 'react-responsive';
import ContextoUsuario from './context';
import Modal from "react-modal";
//registro login
export default class Registro extends React.Component {
 
  static contextType = ContextoUsuario;

  constructor(){
    super()
    this.state={
      show: true,
    }
  }

  hidden(){
  
    this.setState({show:false})
  }

  async validaCurp(){
    //const curpG= {curp: this.props.route.params.curp.toUpperCase()}
  const curpG={curp: this.context.curp.toUpperCase()}
   const apiResponse=await validacionCurp(curpG);
   //console.log(curpG);
   //console.log(apiResponse);
   if(apiResponse.codigo!="000"){
    //this.props.navigation.navigate('Telefono', {curp: this.props.route.params.curp})
    this.props.history.push('Telefono')
   }else{
    this.props.history.push('Login')
   }
  }

  render(){
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
          <View >
     
     <Image style={styles.logo} source={logo}/>
      <Text style={styles.title}>A continuación crearas tu cuenta IDe</Text>
      <Image style={styles.logo2} source={logo}/>
      <Text style={styles.title}>Tus documentos de identidad Electronica estaran cifrados y seguros</Text>

      <View style={styles.btn}>
               <TouchableOpacity style={styles.btn2}
               onPress={() => this.validaCurp()}
               >
                 <Text style={{color:'white'}}>ENTENDIDO</Text>
               </TouchableOpacity>
               </View>

     <Modal
     isOpen={this.state.show}
     >
       
         <View style={styles.modalcontainer}>
         <View style={styles.modaltextcontainer}>
           <Text style={styles.modaltext}>Teléfono celular propio</Text>
           <Text style={styles.modaltext2}>Recuerda que por fines de privacidad es importante que lo realices desde tu teléfono celular propio</Text>




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
    </ScrollView>
 
  );
}
}

const styles = StyleSheet.create({
    title: {
    color: "black",
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    logo2: {
        width: 250,
        height: 150,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: 30,
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