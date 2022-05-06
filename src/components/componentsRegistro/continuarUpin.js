import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, TouchableOpacity} from "react-native";
import logo from "../../assets/img/logo.png";
import {validacionCuenta } from "../../api/auth";
//import { CheckBox } from 'react-native-elements';
import Footer from '../../Footer/Footer';
import MediaQuery from 'react-responsive';
import ContextoUsuario from '../../context';
import Modal from "react-modal";

export default class ContinuarUpin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      check: false,
      aviso: true,
      avisop: false,
      color: 'red',
      colorv:'green'
    }
  }
  static contextType=ContextoUsuario;
  
  async continuar() {
 
    if (this.state.check == false) {
        this.setState( {show:true});
    } else {
      //const obj = { curp: this.props.route.params.curp, upin: this.props.route.params.upin }
      const obj = { curp: this.context.curp, upin: this.context.upin}
      const apiResponse = await validacionCuenta(obj);
      if (apiResponse.codigo === "000") {

        this.props.history.push('Menu')
      }else{
        console.log("no inicio sesion.")
      }
    }
  }

  checked() {
    this.setState({ check: true })
  }

  inbox() {
    if (this.state.check == true) {
      this.setState({ show: false })
      this.setState({ aviso: false })
      this.setState({ avisop: false })
      this.props.navigation.navigate('Menu')
    } else {
      this.setState({ show: false })
      this.setState({ avisop: true })
    }

  }

  hidden() {
    this.setState({ aviso: false })
  }

  hidden2() {
    this.setState({ avisop: false })
    this.setState({ show: true })
  }


  render() {
    const { upin } = this.context;
    return (
     
         <View style={{height:"100%"}} >
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Acceso con uPIN</Text>
        <Text style={styles.upin}>uPIN:</Text>

        <TextInput style={styles.input}
          placeholder=""
          maxLength={6}
          secureTextEntry={true}
          keyboardType="numeric"
          password={true}
          value={upin}
        />

        <View style={styles.btn}>
          <TouchableOpacity style={styles.btn2}
                  onPress={() => this.continuar()}
                  >
                    <Text style={{color:'white'}}>CONTINUAR</Text>
                  </TouchableOpacity>
        </View>


        <Modal
          //modal si no se acepta la politica de privacidad
          isOpen={this.state.avisop}
        >

          <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Acepta la Política de Privacidad</Text>

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

        <Modal
        isOpen={this.state.aviso}
        >

          <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Tu uPIN se ha registrado con éxito</Text>

              <View style={styles.btn}>
              <TouchableOpacity style={styles.btn2}
                  onPress={() => this.hidden()}
                  >
                    <Text style={{color:'white'}}>ACEPTAR</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>

        </Modal>

        <Modal
          isOpen={this.state.show}
        >

          <View style={styles.modalcontainer}>
            <View style={styles.modaltextcontainer}>
              <Text style={styles.modaltext}>Términos y Condiciones</Text>
              <Text style={styles.modaltext2}>El aviso de privacidad y protección de los datos de DPR es para proteger los datos personales
                de sus Clientes y de los interesados receptores de información del cliente, por lo que los datos recabados en la plataforma,
                estarán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de los Sujetos
                Obligados.</Text>
              <View>

              <div  className="form-check">
                <input onChange={() => this.checked()} className="form-check-input" type="radio" name="mancomunado" id="flexRadioDefault1" />
                <label className="form-check-label" htmlfor="flexRadioDefault1">
                  <Text style={{fontSize:8, fontWeight:'bold'}}>Aceptar Política de Privacidad</Text>
                </label>
                
              </div>

              </View>
              <View style={styles.checked}>
              <TouchableOpacity style={styles.btn2}
                  onPress={() => this.inbox()}
                  >
                    <Text style={{color:'white'}}>ACEPTAR</Text>
                  </TouchableOpacity>
                
              </View>

              <Text onPress={() => Linking.openURL('https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf')}
                style={styles.ley}>CONSULTAR POLÍTICA DE PRIVACIDAD</Text>
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
  upin: {
    color: "black",
    marginLeft: 20,
    fontSize:20
  },
  input: {
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,

  },
  btn: {
    marginTop: 20,
    marginLeft: 20,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',

  },
  modaltextcontainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    margin: 50,
    padding: 40,


  },
  modaltext: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  

  },
  modaltext2: {
    fontSize: 10,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  

  },
  ley: {
    fontSize: 10,
    textDecorationLine: 'underline',
    marginTop: 20,
    textAlign:'center'
  },
  checked:{
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor:'rgba(206, 31, 40, 1)',
    alignItems:'center'
  }
});
