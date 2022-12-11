import { useFonts } from 'expo-font'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AppNavigator from './navigation'

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf')
  })

  if (!loaded) {
    return (
      <View styles={styles.containerLoad}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
