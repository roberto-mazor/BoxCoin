import { useCallback, useState } from 'react';
import { View, Alert } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router, useFocusEffect } from 'expo-router'

import { HomeHeader } from '@/components/HomeHeader';
import { Objetivo, ObjetivoProps } from '@/components/Objetivo';
import { Lista } from '@/components/Lista';
import { Button } from '@/components/Button';

import { useBoxCoinDatabase } from '@/database/useBoxCoinDatabase';

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
  const boxCoinDatabase = useBoxCoinDatabase()
  const [objetivos, setObjetivos] = useState<ObjetivoProps[]>([])

  async function fetchMetas(): Promise<ObjetivoProps[]> {
    try {
      const response = await boxCoinDatabase.listBySavedValue()
      console.log(response)
      return response.map((item) => ({
        id: String(item.id),
        nome: item.name,
        porcentagem: item.percentage.toFixed(0) + "%",
        meta: String(item.amount),
        atual: String(item.current)
      }))

    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar as metas")
      console.log(error)
      return []
    }

  }

  async function fetchData() {
    const boxCoinPromise = await fetchMetas()
    const [boxCoinData] = await Promise.all([boxCoinPromise])

    setObjetivos(boxCoinData)
  }

  useFocusEffect(
    useCallback(() => { fetchData() }, [])
  )

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={resumo} />

      <Lista
        titulo='Metas'
        data={objetivos}
        renderItem={({ item }) =>
          <Objetivo
            data={item}
            onPress={() =>
              router.navigate(`/em-progresso/${item.id}`)
            }
          />
        }
        emptyMensagem='Nenhuma meta encontrada'
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, marginBottom: 32 }}>
        <Button titulo='Nova Meta' onPress={() => router.navigate("/objetivo")} />
      </View>
    </View>

  )
}