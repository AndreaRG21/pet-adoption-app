import { Alert, Button, StyleSheet, View } from 'react-native';
import StorageService from '../helpers/StorageService';

const LoginScreen = () => {
    const handleLogin = async (email, password, token) => {
        //validate con regex true/ false
        // En LoginScreen.js, cambia 'email' por 'Email'
        if (!StorageService.validate('Email', email)) {
            Alert.alert('Error', 'Email no valido');
            return;
         }
        //Guardar datos sensibles 
        await StorageService.saveCredentials(email, token);

        //Guardar datos no sensibles
        await StorageService.setItem('last-login', new Date().toISOString());
        Alert.alert('Sesion iniciada y protegidad');
    }

    return (
        <View style={styles.container}>
            <Button 
                title='Simular Login'
                onPress={() => handleLogin('dev@Correo', 'pass123', 'SecretToken123')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    }
});

export default LoginScreen;