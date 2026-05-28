import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HomeHeader } from '@/components/HomeHeader';


export default function Index() {
    const insets = useSafeAreaInsets()
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader />
        </View>
    )
}