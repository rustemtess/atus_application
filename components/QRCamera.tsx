import { RootStackParamList } from '@/app/ScreenTypes';
import { 
  CameraView, 
  CameraType, 
  useCameraPermissions
} from 'expo-camera';
import { useNavigation } from 'expo-router';
import { 
  useState, 
  useEffect 
} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Alert, 
  Linking, 
  Pressable
} from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

type QRCameraType = NativeStackScreenProps<RootStackParamList, 'QRScanner'>;

export default function QRCamera() {

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [flashEnabled, setFlashEnabled] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const navigation = useNavigation<QRCameraType['navigation']>();

  useEffect(() => {
    const checkPermissions = async () => {
      if (!permission) {
        const { status } = await requestPermission();
        if (status !== 'granted') {
          Alert.alert(
            'Необходим доступ к камере',
            'Для сканирования QR-кодов требуется доступ к камере.',
            [
              { text: 'Настройки', onPress: () => Linking.openSettings() },
              { text: 'Отмена', onPress: () => navigation.goBack() },
            ]
          );
        }
      }
    };

    checkPermissions();
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleQRCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    Alert.alert('QR Code Scanned!', `Data: ${data}`);
  };

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing} 
        onBarcodeScanned={scanned ? undefined : handleQRCodeScanned}
        flash={ (flashEnabled) ? 'on' : 'off' }
      >
        <View style={styles.overlay}>
          <View style={styles.topOverlay} />
          <View style={styles.middleRow}>
            <View style={styles.sideOverlay} />
            <View style={styles.transparentSquare}>
            <Text style={{
              marginTop: -50,
              width: '100%',
              textAlign: 'center',
              color: 'white',
              zIndex: 2,
              fontSize: 20,
              fontWeight: 500
            }}>Сканируйте QR-код</Text>
              <View style={[styles.transparentSquareBlock, {
                borderTopWidth: 4,
                borderLeftWidth: 4,
              }]} />
              <View style={[styles.transparentSquareBlock, {
                borderRightWidth: 4,
                borderTopWidth: 4,
                right: 0,
                top: 0
              }]} />
              <View style={[styles.transparentSquareBlock, {
                borderLeftWidth: 4,
                borderBottomWidth: 4,
                bottom: 0,
                left: 0
              }]} />
              <View style={[styles.transparentSquareBlock, {
                borderRightWidth: 4,
                borderBottomWidth: 4,
                bottom: 0,
                right: 0
              }]} />
            </View>
            <View style={styles.sideOverlay} />
          </View>
          <View style={styles.bottomOverlay} />
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 12,
            position: 'absolute',
            width: '100%',
            bottom: '32%'
          }}>
            <Pressable 
              style={{
                backgroundColor: (facing === 'front') ? 'white' : 'rgba(255, 255, 255, 0.3)',
                padding: 12,
                borderRadius: 50
              }}
              onPress={() => toggleCameraFacing()}
            >
              <MaterialIcons name="cameraswitch" size={24} color="rgba(0,0,0,0.8)" />
            </Pressable>
            <Pressable 
              style={{
                backgroundColor: (flashEnabled) ? 'white' : 'rgba(255, 255, 255, 0.3)',
                padding: 12,
                borderRadius: 50
              }}
              onPress={() => setFlashEnabled(prev => !prev)}
            >
              <Entypo name="flash" size={24} color="rgba(0,0,0,0.8)" />
            </Pressable>
          </View>
          <View style={{
            width: '100%',
            height: 180,
            zIndex: 2,
            backgroundColor: 'white',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: 10
          }}>
            <Text>Information</Text>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  message: {
    width: '100%',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '500'
  },
  description: {
    fontSize: 18,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Легкое затемнение
    justifyContent: 'center',
    alignItems: 'center',
  },
  topOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Затемнение сверху
  },
  middleRow: {
    flexDirection: 'row',
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Затемнение с боков
  },
  transparentSquare: {
    width: '100%',
    maxWidth: 280,
    height: 280,
    backgroundColor: 'transparent', // Прозрачный квадрат в центре
    borderRadius: 20, // Скругленные углы
    borderColor: 'white', // Цвет границы
    position: 'relative',
  },
  transparentSquareBlock: {
    width: 50,
    height: 50,
    borderColor: 'red',
    position: 'absolute'
  },
  bottomOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Затемнение снизу
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
