import { useContext } from "react";
import { Text, View, Pressable } from "react-native";
import { FruitsContext } from "../store/fruits-context";

export function DeletePage() {
    const fruitsContext = useContext(FruitsContext);

    const {fruitsList, removeFruit } = fruitsContext;

    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 50 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>Click on the fruit name to delete it: </Text>

            {fruitsList.map((iFruit) => {
                return (
                    <View style={{ flexDirection: 'row', alignItems: 'center'}} key={iFruit.id}>
                        <Pressable onPress={() => removeFruit(iFruit.id)} style={{ marginVertical: 10 }}>
                            <Text>{iFruit.name}</Text>
                        </Pressable>
                    </View>
                )
            })}
        </View>
    );
}