import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImagePicker }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const onHandleTakeImage = async () => {
    const isCameraPermissions = await verifyPermissions();
    if (!isCameraPermissions) return;
    const image = await ImagePicker.launchCameraAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.warn("image", image);
    // setImage(result.assets[0].uri);
    console.log("image", image);
    setPickedUrl(image.assets[0].uri);
    onImagePicker(image.assets[0].uri);
  };

  useEffect(() => {
    console.log("pickedUrl", pickedUrl);
  }, [pickedUrl]);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara", [
        { text: "Ok" },
      ]);

      return false;
    }
    return true;
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text style={styles.title}>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: "https://samuelbuendia.com/assets/images/about/about-8.jpg" }} />
        )}
      </View>
      <Button title="Tomar Foto" color={colors.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;