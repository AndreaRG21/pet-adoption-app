import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import useFormulario from '../hooks/useFormulario';

const PantallaFormulario = () => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    Email,
    setEmail,
    handleBtnHello,
  } = useFormulario();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ingresa tus datos </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
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
  );
};

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
    color: '#000000'
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

export default PantallaFormulario;