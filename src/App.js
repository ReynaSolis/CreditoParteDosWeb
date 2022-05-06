import React ,{useState} from 'react';
import { BrowserRouter, Router, Route } from "react-router-dom";


//importaciones de pantallas componentes
import ContextoUsuario from './context';
import Login from './login';
import Upin from './upin';
import Registro from './registro';




import Telefono from './components/componentsRegistro/telefono';
import ValidarTelefono from './components/componentsRegistro/validarTelefono';
import GeneraUpin from './components/componentsRegistro/generaUpin';
import CrearUpin from './components/componentsRegistro/crearUpin';
import ContinuarUpin from './components/componentsRegistro/continuarUpin';


import ConsultarUpin from './consultarUpin';
import NuevoUpin from './nuevoUpin';

import Menu from './components/componentsInbox/Menu';
import DocumentosRequeridos from './components/componentsInbox/DocumentosRequeridos';
import HomeScreen from './components/componentsInbox/inbox';
import ConfirmarIdentidad from './components/componentsInbox/ConfirmarIdentidad';


/*



*/



export default function App() {
  const [domicilio,setDomicilio]=useState(false);
  const [nomina,setNomina]=useState(false);
  const [identificacion,setIdentificacion]=useState(false);
  const [credito,setCredito]=useState(false);
  const [identidad,setIdentidad ]=useState(false);
  const [ confirmarDocumentos,setConfirmarDatos]=useState(false);


  const [mostrarCamara,setMostarCamara]=useState(false);

  const [capturaDomicilio,setCapturaDomicilio]=useState();
  const [capturaNomina,setCapturaNomina]=useState();
  const [capturaIdentificacion,setCapturaIdentificacion]=useState();
  const [capturaCredito,setCapturaCredito]=useState();
  const [capturaIdentidad,setCapturaIdentidad]=useState();
  //datosReyna
  const [curp,setCurp]=useState();
  const [tel,setTel]=useState();
  const [telefonoValido,setTelefonoValido]=useState()
  const [upin,setUpin]=useState()
  const [nombre,setNombre]=useState()
  const [telBase,setTelBase]=useState()
  const [identificadorJourney,setIdentificadorJourney]=useState();

  return (
    <ContextoUsuario.Provider value={{domicilio,setDomicilio,
      nomina,setNomina,
      identificacion,setIdentificacion,
      credito,setCredito,
      identidad,setIdentidad,
      confirmarDocumentos,setConfirmarDatos,
      mostrarCamara,setMostarCamara,   
      capturaCredito,setCapturaCredito,
      capturaNomina,setCapturaNomina,
      capturaIdentificacion,setCapturaIdentificacion,
      capturaDomicilio,setCapturaDomicilio,
      capturaIdentidad,setCapturaIdentidad,
      curp,setCurp,
      tel,setTel,
      telefonoValido,setTelefonoValido,
      upin,setUpin,
      nombre,setNombre,
      telBase,setTelBase,
      identificadorJourney,setIdentificadorJourney
                            }}>
     
      <BrowserRouter basename='/cpt'>
      <Route exact path="/" component={Login} />
      
      <Route exact path="/Upin" component={Upin} />
      <Route exact path="/Registro" component={Registro} />
      
      
      <Route exact path="/Telefono" component={Telefono} />
      <Route exact path="/ValidarTelefono" component={ValidarTelefono} />
      <Route exact path="/GeneraUpin" component={GeneraUpin} />
      <Route exact path="/CrearUpin" component={CrearUpin} />
      <Route exact path="/ContinuarUpin" component={ContinuarUpin} />

      <Route exact path="/NuevoUpin" component={NuevoUpin} />
      <Route exact path="/ConsultarUpin" component={ConsultarUpin} />

      <Route exact path="/Menu" component={Menu} />
      <Route exact path="/DocumentosRequeridos" component={DocumentosRequeridos} />
      <Route exact path="/Inbox" component={HomeScreen} />
      <Route exact path="/ConfirmarIdentidad" component={ConfirmarIdentidad} />

       </BrowserRouter>
  
      </ContextoUsuario.Provider>
      
  );
}


