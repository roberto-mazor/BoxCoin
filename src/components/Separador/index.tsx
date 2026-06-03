import { View, ColorValue } from 'react-native'

import { styles } from './style';

export function Separador({ color }: { color: ColorValue }) {
    return (
        <View style={[styles.separador, { backgroundColor: color }]} />
    )
}
