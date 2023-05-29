import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const Navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        Navigation.replace('Login')
        console.log('Logout bem-sucedido');
      })
      .catch(error => {
        console.log('Erro durante o logout:', error.message);
      });
  };






  return (
    <View style={styles.comtainer}>
      <Text style = {styles.Text}>Bem Vindo!!</Text>
      <Text style = {styles.Text}>Seja um mestre Pokemon!!!</Text>
      <Text style = {styles.Text}>{auth.currentUser.email }</Text>
      <Image source={require('./logo/poke.png')} style={{ width: 200, height: 200 }} />
      
      <TouchableOpacity 
        onPress={handleSignOut}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen



const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1c1c1c',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  Text: {
    color: '#1c1c1c',
    fontWeight: 'bold',
    fontSize: 20
  }
})
  