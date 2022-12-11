import { StyleSheet, StatusBar } from 'react-native'

import { COLORS } from '../../constants/themes/colors'
import { isAndroid } from '../../utils'

export const styles = StyleSheet.create({
  container: {
    marginTop: 59,
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    marginTop: isAndroid ? StatusBar.currentHeight : 0
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    color: COLORS.text,
    marginTop: 25,
    marginVertical: 20,
    marginHorizontal: 25
  },
  containerList: {
    flex: 1
  }
})
