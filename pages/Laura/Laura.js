import { Image } from 'expo-image'
import { View, Text, TextInput, FlatList } from 'react-native'

export default function Laura (){
    return(
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        gap: 20,
    },
})