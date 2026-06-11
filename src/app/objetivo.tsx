import { useState } from 'react'
import { Alert, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { InputCurrency } from '@/components/InputCurrency'

import { useBoxCoinDatabase } from '@/database/useBoxCoinDatabase'

export default function Objetivo() {
  const [nomeMeta, setNomeMeta] = useState("")
  const [valor, setValor] = useState<number | null>(0)

  const params = useLocalSearchParams<{ id?: string }>()
  const boxCoinDatabase = useBoxCoinDatabase()

  function fnUserSave() {
    if (!nomeMeta.trim() || valor === null || valor <= 0) {
      return Alert.alert("Atenção!", "Preencha os campos de nome da meta e valor alvo")
    }

    if (params.id) {
      // update
    } else {
      salvarDadosBanco()
    }

  }

  async function salvarDadosBanco() {
    try {
      boxCoinDatabase.create({
        name: nomeMeta,
        amount: Number(valor)
      })
      Alert.alert("Sucesso", "Meta criada com sucesso", [
        {
          text: "OK", onPress: () => router.back()
        }
      ])

    } catch (error) {
      Alert.alert("Erro", "Falha ao criar nova meta")
      console.log(error)
    }
  }

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        titulo='Meta'
        subtitulo='Economize para alcançar sua meta financeira.'
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input label="Nome da Meta"
          placeholder="Ex: Comprar um carro 0"
          value={nomeMeta}
          onChangeText={setNomeMeta}
        />

        <InputCurrency
          label='Valor alvo'
          value={valor}
          onChangeValue={setValor}
        />

        <Button
          titulo='Salvar'
          onPress={() => fnUserSave()}
        />

      </View>
    </View>
  )
}