import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, SectionList, Image } from 'react-native';
import HeaderSouza from '../../components/HeaderSouza'

export default function Venda(){
    return(
        <View style={styles.container}>
            <Text>Teste</Text>
            <HeaderSouza />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue'
    }
})