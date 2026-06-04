import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './style'

export type ObjetivoProps = {
  id: string,
  nome: string,
  porcentagem: string,
  meta: string,
  atual: string
}

type Props = TouchableOpacityProps & {
  data: ObjetivoProps
}

export function Objetivo({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.nome} numberOfLines={1}>
          {data.nome}
        </Text>
        <Text style={styles.status} >
          {data.porcentagem} • {data.atual} de {data.meta}
        </Text>
      </View>
      <MaterialIcons name='chevron-right' size={20} />
    </TouchableOpacity>
  )
}