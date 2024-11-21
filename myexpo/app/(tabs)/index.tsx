import React, {useState} from "react";
import {View, Text, TextInput, Button} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
//npm install firebase@latest

//Configurações do firebase(Substitui pelos seus valores)

const firebaseConfig = {
  apikey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

//Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () =>{
  const [email, setEmail]= useState('');
  const[password,setPassword]=useState('');

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //o usuario foi criado com sucesso
        const user = userCredential.user;
        console.log('Usuario criado com sucesso:', user);
      })
      .catch((error)=>{
        //tratar erros de casdastro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar usuario:', error);
      });
    }catch (error){
      console.error(error);
    }
  };
  return(
    <View>
      <TextInput
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
       />
       <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />
        <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
};

export  default App;
