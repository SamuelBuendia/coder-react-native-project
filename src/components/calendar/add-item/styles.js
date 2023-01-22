import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants/themes/colors'

export const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 70
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: '100%',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black
  }
})
