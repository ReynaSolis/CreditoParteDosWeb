import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, Alert, TouchableOpacity,ScrollView } from "react-native";
import logo from "../../assets/img/logo.png";
import Footer from '../../Footer/Footer';
import MediaQuery from 'react-responsive';

export default class GeneraUpin extends React.Component{


async  validandoObj(){
  //const ojbM={telefono:this.props.route.params.telefono,curp:this.props.route.params.curp};
  //console.log(ojbM);
  //this.props.navigation.navigate('CrearUpin',ojbM)
  this.props.history.push('CrearUpin')
}

render(){
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
          <View >
        <Image style={styles.logo} source={logo}/>
         <Text style={styles.title}>A continuación genera tu uPIN de 6 números secretos y no lo compartas con nadie</Text>
         <Image style={styles.logo2} source={logo}/>

        <View style={styles.btn}>
        <TouchableOpacity style={styles.btn2}
            onPress={() =>
              this.validandoObj()
            } 
            >
          <Text style={{color:'white'}}>ENTENDIDO</Text>
          </TouchableOpacity>
        
        </View>
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
   
  );}
}

const styles = StyleSheet.create({
    title: {
     color: "black",
     marginLeft: '10',
     marginRight: '10',
     textAlign: 'center',
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
 
 });