import { View, Image, Text } from "react-native";

export function FruitListItem({ item }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 200, height: 200, margin: 20 }} />

            <Text style={{ fontWeight: 'bold',fontSize: 20 }}>{item.name}</Text>
        </View>
    );
}