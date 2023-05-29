import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';




const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Se o usuário estiver logado, navegue para a tela Home
        
        Navigation.replace('Home');
      }
    })
    return unsubscribe;
   }, []);
  




  const handleSignUp = () => {
    
       createUserWithEmailAndPassword(auth,email, password)
      .then(() => {
       
        console.log('Registro bem-sucedido:', email);
        // Aqui você pode salvar os dados do usuário no banco de dados ou fazer outras ações necessárias
      })
      .catch(error => {
        console.log('Erro durante o registro:', error.message);
        alert(error.message);
      });
  };
  

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Login bem-sucedido:', email);
        // Aqui você pode salvar os dados do usuário no banco de dados ou fazer outras ações necessárias
      })
      .catch(error => {
        console.log('Erro durante o login:', error.message);
        alert(error.message);
      });
  };

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('./logo/nome.png')} />
      <View style={styles.inputContainer}>
        
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Conectar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>Registrar</Text>
      </TouchableOpacity>


      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonOutlineText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default LoginScreen;
