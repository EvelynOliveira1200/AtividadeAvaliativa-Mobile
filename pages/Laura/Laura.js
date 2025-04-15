import { Image } from 'expo-image'
import { SafeAreaView, View, Text, TextInput, FlatList } from 'react-native'

export default function Laura (){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        gap: 20,
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#5e3a27"
    }
})