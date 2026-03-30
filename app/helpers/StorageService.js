import AsyncStorage from '@react-native-async-storage/async-storage';
import SecureStorage from 'expo-secure-storage';

class StorageService {
    //REGEX 
    //Common paterns
    static patterns = {
        Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    };

    static validate(type, value) {
        return this.patterns[type] ? this.patterns[type].test(value) : false;
    }

    //ASYNC STORAGE - DATA no sensible
    static async setItem(key, value) {
        try {
            const StringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
            await AsyncStorage.setItem(key, StringValue);
        } catch (error) {
            console.error('Error guardando en AsyncStorage', error);
        }
    }

    static async getItem(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            //parsear
            try {
                return JSON.parse(value);} catch { return value; }
        } catch(error) {
        console.error('Error obteniendo de AsyncStorage', error);
        return null;
    }
}

    //SecureStore - Sensible data
    static async saveCredentials(key, token) {
    try {
        //securestorage solo acepta string
        await SecureStorage.setItemAsync(key, token);
        return true;
    } catch (error) {
        console.error('Error en SecureStorage', error);
    }
}

    //Conseguir Credenciales Guardadas
    static async getToken(key) {
    try {
        return await SecureStorage.getItemAsync(key);
    } catch (error) {
        console.error('Error no se pudieron recuperar las credenciales', error);
        return null;
    }
}
    static async resetToken(key){
    await SecureStorage.deleteItemAsync('key');
}
}

export default StorageService;