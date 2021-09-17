import React from 'react'

import { Text, StyleSheet, SafeAreaView, Image, View } from 'react-native'

const HomeScreen = () => {
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>Welcome back, user</Text>
            </View>
        </View>
    </SafeAreaView>
}

styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#63A4FF",
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 12,
        paddingRight: 12
    },
    image: {
        width: 35,
        height: 35
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40
    }
})

export default HomeScreen