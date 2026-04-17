import {Text, View} from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/screen";

export default function Detail() {
    const { id } = useLocalSearchParams();
    return(
        <Screen>
        <View>
            <View>
                <Text className="text-white text-2xl font-bold mb-8">Detalle del juego</Text>
                <Text className="text-white text-lg mb-4">ID del juego: {id}</Text>
                <Link href="/">
                    <Text className="text-blue-500">Volver</Text>
                </Link>
            </View>
        </View>
        </Screen>
    )
}