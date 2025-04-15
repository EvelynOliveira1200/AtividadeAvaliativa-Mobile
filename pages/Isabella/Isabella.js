import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Isabella() {
    return (
        <View>
            <Text style={styles.title}>Olá</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "black",
    },
})