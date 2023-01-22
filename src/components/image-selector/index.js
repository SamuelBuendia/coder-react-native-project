import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";
import { COLORS } from "../../constants/themes/colors";

import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImagePicker }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [15, 16],
      quality: 0.7,
    });

    setPickedUrl(image.assets[0].uri);
    onImagePicker(image.assets[0].uri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.preview}>
          {!pickedUrl ? (
            <Text>No Image Selected</Text>
          ) : (
            <Image style={styles.image} source={{ uri: pickedUrl }} />
          )}
        </View>
        <Button title="Take Photo" color={COLORS.success} onPress={onHandleTakeImage} />
      </View>
    </View>
  );
};

export default ImageSelector;
