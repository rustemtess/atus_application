import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);

  useEffect(() => {
    if (permission?.granted) {
      setScanned(false);
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // Обработчик QR-кодов
  const handleQRCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    Alert.alert('QR Code Scanned!', `Data: ${data}`);
    WebBrowser.openBrowserAsync(data); // Открытие URL в браузере
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} onBarcodeScanned={scanned ? undefined : handleQRCodeScanned}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
