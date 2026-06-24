import { Stack } from 'expo-router'
import { SQLiteProvider } from 'expo-sqlite'
import { Suspense } from 'react';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black_Italic, useFonts } from '@expo-google-fonts/inter'


import { colors } from '@/theme/colors';
import { migrate } from '@/database/migrate';
import { Loading } from '@/components/Loading';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black_Italic
  })

  if (!fontsLoaded) {
    return <Loading />
  }



  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider
        databaseName='boxcoin.db'
        onInit={migrate}
        useSuspense
      >
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.white }
        }} />
      </SQLiteProvider>
    </Suspense>
  )
}