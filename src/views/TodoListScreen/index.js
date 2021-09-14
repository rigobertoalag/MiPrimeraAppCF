import React, { useState } from 'react'
import { ScollView, View, StyleSheet, TextInput, Button, SafeAreaView, FlatList, Text } from 'react-native'

const TodoListScreen = () => {

    const [todoList, setTodoList] = useState([])
    const [todoText, setTodoText] = useState("")

    const handleChangeText = (text) => {
        setTodoText(text)
    }

    const handleButtonPress = () => {
        if (todoText.trim().length > 0) { //trim() es una funcion para eliminar espacios vacios al inicio y al final
            setTodoList((value) => value.concat({ text: todoText }))
            setTodoText("")
        }
    }

    const handleRenderListItem = ({ item }) => {
        return <Text>{item.text}</Text>
    }

    return (
        <SafeAreaView style={styles.container}> {/* Exclusivo para IOS*/}
            <View style={styles.viewContainer}>
                <View>
                    <TextInput
                        placeholder='Ingresa la tarea'
                        placeholderTextColor='#c4c4c4'
                        style={styles.textInput}
                        value={todoText}
                        onChangeText={handleChangeText}
                    />

                    <Button
                        title='Enter'
                        onPress={handleButtonPress}
                    />
                </View>
                <View>
                    <FlatList
                        data={todoList}
                        renderItem={handleRenderListItem}
                        keyExtractor={(item) => item.text}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        backgroundColor: '#f5f5f5',
        color: '#212121',
        fontSize: 16,
        marginBottom: 16
    },
    viewContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    }
})

export default TodoListScreen