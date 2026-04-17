import {Text, View} from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams, Stack } from "expo-router";
import Screen from "../components/screen";

export default function Detail() {
    const { id } = useLocalSearchParams();
    return(
        <Screen>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: "#97ce4c" },
                headerTintColor: "black",
                headerLeft: () => {},
                headerTitle: "Rick Sanchez",
                headerRight: () => {}
                }} />
        <View>
            <View>
                <Text className="text-white text-lg mb-4">ID del personaje: {id}</Text>
                <Link href="/">
                    <Text className="text-blue-500">Volver</Text>
                </Link>
            </View>
        </View>
        </Screen>
    )
}