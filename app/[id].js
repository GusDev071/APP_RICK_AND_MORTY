import {Text, View, ActivityIndicator, ScrollView, Image} from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams, Stack } from "expo-router";
import Screen from "../components/screen";
import { getCharacterDetails } from "../lib/rickandmorty";
import { useEffect, useState } from "react";


export default function Detail() {
    const { id } = useLocalSearchParams();
    const [character, setCharacter] = useState(null);

    useEffect(()=>{
        getCharacterDetails(id).then((data) => {
            setCharacter(data);
        });
    }, [id]);

    return(
        <Screen>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: "#97ce4c" },
                headerTintColor: "black",
                headerLeft: () => {},
                headerTitle: character ? character.name : "Detalles del personaje",
                headerRight: () => {}
                }} />
        <View>
            {character === null ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : (
                <ScrollView className="p-4">
                    <Image
                        source={{ uri: character.image }}
                        className="w-full h-80 rounded-2xl mb-4"
                    />
                    <Text className="text-white text-3xl font-bold mb-2">{character.name}</Text>
                    <Text className="text-gray-300 text-base mb-2">{character.description}</Text>
                    <Text className="text-green-400 text-base mb-2">Episodes: {character.episode}</Text>
                    <Text className="text-gray-400 text-sm mb-1">
                        {`Created: ${new Date(character.releaseDate).toLocaleDateString()}`}
                    </Text>
                    <Text className="text-gray-400 text-sm mb-4">Origin: {character.origin}</Text>

                    <Text className="text-white text-xl font-bold mb-3">Recent episode references</Text>
                    {character.reviews.map((review, index) => (
                        <View key={`${character.id}-${index}`} className="bg-zinc-900 rounded-xl p-3 mb-3">
                            <Text className="text-white font-semibold mb-1">{review.quote}</Text>
                            <Text className="text-gray-400 text-sm">Origin: {review.publicationName}</Text>
                            <Text className="text-gray-400 text-sm">Location: {review.author}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
        </Screen>
    )
}