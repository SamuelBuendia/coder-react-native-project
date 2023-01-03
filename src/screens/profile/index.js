import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ImageSelector } from '../../components'
import { FAMILY } from '../../constants/data'
import { styles } from './styles'

const Profile = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const onImagePicker = (uri) => {
    setImage(uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Este es el perfil</Text>
      <ImageSelector onImagePicker={onImagePicker} />
    </View>
  )
}

export default Profile
