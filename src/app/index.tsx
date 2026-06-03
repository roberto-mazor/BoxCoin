import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HomeHeader } from '@/components/HomeHeader';

const resumo = {
    total: "R$ 9.745,00",
    input: {
        label: "Entrada",
        value: "R$ 9.854,00"
    },
    output: {
        label: "Saidas",
        value: "-R$ 1.754,00"
    }
}


export default function Index() {
    const insets = useSafeAreaInsets()
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={resumo} />
        </View>

    )
}