import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient"


import { styles } from './style';
import { colors } from "@/theme/colors";


export function HomeHeader() {
    return (
        <LinearGradient
            colors={[colors.blue[500], colors.blue[800]]}
            style={styles.container}
        >

            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>R$ 2.680,00 </Text>
            </View>

        </LinearGradient>
    )
}