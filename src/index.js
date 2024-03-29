import { useFonts } from 'expo-font'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { init } from './db'
import AppNavigator from './navigation'
import store from './store'

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
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    )
  }

  init()
    .then(() => {
      console.log('Database is ready')
    })
    .catch((error) => {
      console.log('Error initialized Database')
      console.log(error)
    })

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
