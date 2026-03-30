import { useState } from "react";
import { Alert } from "react-native";

const useFormulario = () => {
 
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');

  //Function to trigger btn
  const handleBtnHello = () => {
    if (name.trim() === '' || lastName.trim() === '' || Email.trim() === '') {
      Alert.alert('Error', 'Please fill every field');
      return;
    } else if (!Email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    } else if (lastName === 'Marco' || lastName === 'Garcia' || lastName === 'Tavares' || lastName === 'Martinez') {
      Alert.alert('Error', 'Please dont be gay');
    } else {
      Alert.alert('Welcome!', `Hello, ${name} ${lastName}, your email is ${Email}`);
      setName('');
      setLastName('');
      setEmail('');
    }
  };

  return {
    name,
    setName,
    lastName,
    setLastName,
    Email,
    setEmail,
    handleBtnHello,
  };
};

export default useFormulario;