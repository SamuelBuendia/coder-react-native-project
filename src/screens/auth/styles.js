import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    minHeight: 320,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    marginVertical: 5,
  },
  promptButton: {
    width: '100%',
    backgroundColor: COLORS.gray,
    borderColor: COLORS.white,
    borderWidth: 1,
    color: COLORS.white,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    marginTop:50
  },
  promptMessage: {
    fontSize: 14,
    color: COLORS.gar,
    fontFamily: 'Lato-Regular',
  },
});
