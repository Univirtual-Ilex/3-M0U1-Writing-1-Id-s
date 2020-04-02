import React from 'react';
import Fondo from './components/Fondo'
import {HashRouter, Route} from 'react-router-dom'

// eslint-disable-next-line
import Modal from './components/Generales/Modal'
import Gstyle from './App/gstyle' // Estilos globales
import Ilex from './App/variables' //Variables

// Actividades
// Actividad 1

// eslint-disable-next-line
import Home from './components/Home'
// eslint-disable-next-line
import Actividad1 from './components/Actividad1'


/**
 * Ruta /home
Fondo
	Contenedor
		//bloque1
		  Titulo-app color
		  Resumen /Resumen
		  Boton-inicio /Boton-inicio
		//bloque2
      imagen-cabecera *** animada con GSAP
    
 */

/* 
Props del modal:
  ok = muestra el modal con un feedback base,
  err = muestra el modal con un feeback base
  visible = true o false // mustra u oculta el modal
  w= define el ancho en porcentaje
  // si se incluye contenido con la prop err se renderiza con el modal error
  // si se incluye contenido con la prop ok se renderiza con el modal ok
  // si se incluye contenido sin las prop (ok y err) se renderiza el modal base

*/

const App = () => {
  return(
    <>
      <Gstyle/>
      <Fondo degradado={Ilex.degradado('-30deg',Ilex.color_amarilloClaro,Ilex.color_amarilloClaro,Ilex.color_amarilloOscuro)}>
        <HashRouter>
        <Route path='/' exact component={Home} />
        <Route path='/actividad1' exact component={Actividad1} />
        </HashRouter>
      </Fondo>
      <Modal w='30'>
      </Modal>

    </>

  ) // La etiqueta <> </> Hace referencia a los fragments en react
}

export default App;
