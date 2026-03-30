import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const GeneradorSaludos = () => {
  //Definicion de estados
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
   const [Email, setEmail] = useState('')

  //Function to trigger btn
  const handleBtnHello = () => {
    if (name.trim() === '' || lastName.trim() === '' || Email.trim() === '') {
      Alert.alert('Error', 'Please fill every field');
      return;
    }
    //Show alert with hello message
    Alert.alert('Welcome!', `Hello, ${name} ${lastName}, your email is ${Email}`)

    //Clear
    setName('');
    setLastName('');
    setEmail('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ingresa tus datos </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName} //Marca un cambio cada que un caracter es agregado
        autoCapitalize="words" //Hace mayuscula cada palabra tras un espacio
      />
      <TextInput
        style={styles.input}
        placeholder="lastName"
        value={lastName}
        onChangeText={setLastName} 
        keyboardType="default" 
      />
<TextInput
        style={styles.input}
        placeholder="Email"
        value={Email}
        onChangeText={setEmail} 
        keyboardType="email-address" 
      />

      <Button
        title="Saludar"
        onPress={handleBtnHello}
        color='#007bbf'
      />
    </View>
  )
}

export default function Index() {
  return (
    <GeneradorSaludos />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000' // Cambiado de '#0000' a '#000000'
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontSize: 16
  }
});

