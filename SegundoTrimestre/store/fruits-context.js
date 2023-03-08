import { useState, createContext } from 'react';

const FRUITS_LIST = [
    {
      id: Math.random(),
      name: "Strawberry",
      imageUrl: "https://static.wikia.nocookie.net/esharrypotter/images/7/76/Fresa.jpg/revision/latest?cb=20200713112301",
    },
    {
      id: Math.random(),
      name: "Kiwi",
      imageUrl: "https://img.freepik.com/vector-gratis/vector-entero-medio-kiwi-cortado-aislado-sobre-fondo-blanco_1284-45467.jpg?w=2000",
    },
    {
      id: Math.random(),
      name: "Banana",
      imageUrl: "https://images.heb.com/is/image/HEBGrocery/000377497?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
    },
  ];

export const FruitsContext = createContext({
    fruitsList: FRUITS_LIST,
    addFruit: (name) => {},
    removeFruit: (id) => {},
})

export function FruitsContextProvider({ children }) {
    const [fruitsList, setFruitList] = useState(FRUITS_LIST)

    function addFruit(name) {
        setFruitList((prevState) => {
          const newFruit = {
            id: Math.random(),
            name,
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
          }

          prevState.push(newFruit)
          return prevState;
          return newFruitsList;
        });
    }

    function removeFruit(id) {
        setFruitList((prevState) => {
            const newFruitsList = prevState.filter(iFruit => iFruit.id !== id);
            return newFruitsList;
        })
    }

    const value = {
        fruitsList,
        addFruit,
        removeFruit,
    }

    return <FruitsContext.Provider value={value}>{ children }</FruitsContext.Provider>
}
