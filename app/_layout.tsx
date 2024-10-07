import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Index from './Index'
import QRScanner from './QRScanner';
import { RootStackParamList } from './ScreenTypes';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    VKSans: require('../assets/fonts/vksans/VK_Sans_Display_Regular.ttf'),
    VKSansMedium: require('../assets/fonts/vksans/VKSansDisplay-Medium.ttf'),
    GoogleSansRegular: require('../assets/fonts/googlesans/GoogleSans-Regular.ttf'),
    GoogleSansMedium: require('../assets/fonts/googlesans/GoogleSans-Medium.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Index} />
        <Stack.Screen name='QRScanner' component={QRScanner} />
        { /* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" /> */ }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
