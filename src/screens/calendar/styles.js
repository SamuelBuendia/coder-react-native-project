import { StyleSheet, StatusBar } from 'react-native'

import { COLORS } from '../../constants/themes/colors'
import { isAndroid } from '../../utils'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 59,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
    alignItems: 'center'
  },
  title: {
    marginVertical: 20,
    fontSize: 20
  },
  box: {
    width: '90%',
  },
  calendar: {
    width: '100%',
  }
})
