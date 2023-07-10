
import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';


import Header from './components/Header';
import Formulario from './components/Formulario';


const App = () => {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);

  useEffect(() => {

  }, [consultarAPI])


  return (
    <>
      <View style={styles.espacio}>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  espacio: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  contenido: {
    marginHorizontal: '2.5%',
  }
});

export default App;
