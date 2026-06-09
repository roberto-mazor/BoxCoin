import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
  data: {
    atual: string,
    meta: string,
    porcentagem: number
  }
}

export default function Progresso({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor Guardado</Text>
      <View style={styles.status}>
        <Text style={styles.value}>
          {data.atual}
          <Text style={styles.meta}> de {data.meta} </Text>
        </Text>
        <Text style={styles.porcentagem}>{data.porcentagem.toFixed(2)}%</Text>
      </View>

      <View style={styles.progresso}>
        <View 
        style={[styles.progressoAtual,
         { width: `${data.porcentagem}%` }]} />
      </View>

    </View>
  )
}