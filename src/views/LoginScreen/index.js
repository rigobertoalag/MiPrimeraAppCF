import React, { useState } from 'react'

import { View, Button, TextInput, Image, StyleSheet, Alert } from 'react-native'

const LoginScreen = ({ navigation }) => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleUserChange = (text) => setUser(text)
    const handlePassChange = (text) => setPass(text)

    const handleSignInPress = () => {
        if (user.trim().length > 0 && pass.trim().length > 0) {
            if (user === 'user' && pass === '123') {
                navigation.navigate('Home')
            } else {
                Alert.alert(title = 'Error', 'Usuario o contraseña incorrectos')
                setPass("")
                setUser("")
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="user"
                    style={styles.textInput}
                    onChangeText={handleUserChange}
                    value={user}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={handlePassChange}
                    value={pass}
                />
            </View>
            <Button
                title='Sign In'
                style={styles.button}
                onPress={handleSignInPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        alignSelf: 'center'
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 10,

    },
    inputContainer: {

    },
    textInput: {
        backgroundColor: 'white',
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#1976d2'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 18,
        marginRight: 18
    }
})

export default LoginScreen