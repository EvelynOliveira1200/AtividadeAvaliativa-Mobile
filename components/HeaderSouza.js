
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../assets/Logo.jpg'

export default function HeaderSouza() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={Logo}/>
            <Text style={styles.title}>La Douceur</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {

    },
    logo:{

    },
    title:{

    }
})