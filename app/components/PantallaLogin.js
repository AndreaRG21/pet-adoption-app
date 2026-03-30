import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';

const PantallaLogin = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        
        handleLogin,
    } = useLogin();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                title="Iniciar Sesión"
                onPress={handleLogin}
                color="#28a745"
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        fontSize: 16,
    }

});
export default PantallaLogin;