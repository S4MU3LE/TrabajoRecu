import { useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { FruitListItem } from '../components/FruitListItem';
import { FruitsContext } from '../store/fruits-context';

export function ListScreen() {
    const fruitsContext = useContext(FruitsContext);

    const fruits = fruitsContext.fruitsList;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {fruits.length > 0 &&
                <FlatList
                    style={{ flex: 1 }}
                    data={fruits}
                    renderItem={({ item }) => <FruitListItem item={item} />}
                    keyExtractor={item => item.id}
                />
            }
            {
                fruits.length === 0 && <Text>No fruits on your list. Please add one!</Text>
            }
        </View>
    )
}
