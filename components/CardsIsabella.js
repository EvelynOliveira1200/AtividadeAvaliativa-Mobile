import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CardsIsabella({ food, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}
    )
}

const styles = StyleSheet.create({
    card: {
        color: "#DACEC2",
    }
})