import { View, TextInput, Text, Button } from "react-native";
import React, { useContext, useState } from 'react';
import { FruitsContext } from "../store/fruits-context";

export function PostScreen({ onAdd }) {
    const fruitsContext = useContext(FruitsContext);

    const { addFruit } = fruitsContext;

    const [value, setValue] = useState('');

    function onAddFruit() {
        addFruit(value);

        setValue('');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
            <Text style={{ marginBottom: 15, fontWeight: "bold" }}>Add your new fruit here.</Text>
            <Text style={{ marginBottom: 25 }}>We will add a generic image for it.</Text>
            <TextInput
                style={{ borderWidth: 1, borderColor: 'grey', height: 50, width: 200, textAlign: "center", borderRadius: 4, marginBottom: 20 }} 
                placeholder="Fruit name"
                onChangeText={(newValue) => setValue(newValue)}
                value={value}
            />
            <Button title="Add fruit" disabled={value.length === 0} onPress={onAddFruit}></Button>
        </View>
    )
}