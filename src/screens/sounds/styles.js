import { StyleSheet, StatusBar } from 'react-native'

import { COLORS } from '../../constants/themes/colors'
import { isAndroid } from '../../utils'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 200,
    marginTop: 20
  },
  button: {
    paddingTop: 50,
    width: 100
  }
})
