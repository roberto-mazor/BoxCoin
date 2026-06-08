import { View, Text } from 'react-native'

import Input, { CurrencyInputProps } from 'react-native-currency-input'

import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = CurrencyInputProps & {
  label: string
}

export function InputCurrency({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        prefix='R$ '
        separator=','
        delimiter='.'
        precision={2}
        minValue={0}
        {...rest}

      />
    </View>
  )
}