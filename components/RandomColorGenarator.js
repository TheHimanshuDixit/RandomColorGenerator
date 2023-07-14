import { useState } from 'react'
import { Button, FlatList, StyleSheet } from 'react-native'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'

const RandomColorGenarator = () => {

    const [color, setColor] = useState([])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setColor([...color, `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`])}
            >
                <Text style={styles.btn}>
                    Random Color Genarator
                </Text>
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 200, backgroundColor: item, justifyContent: 'center', borderWidth: 2, margin: 10, borderRadius: 10 }} >
                        <TouchableOpacity
                            style={{ position: 'absolute', right: 0, top: 0, backgroundColor: 'black', width: 25, height: 25, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => setColor(color.filter((color) => color !== item))} >
                            <Text style={{ color: 'white'}}>
                                X
                            </Text>
                        </TouchableOpacity>
                        <Text key={item} style={{ alignSelf: 'center', fontWeight: 'bold' }}>{item}</Text>
                    </View>
                }}
/>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center', // horizontal
        paddingTop: 100,
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
    },
    btn: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: 'black',
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: 'bold',
        width: 200,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },

})

export default RandomColorGenarator