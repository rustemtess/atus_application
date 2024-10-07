import { 
    KeyboardProvider, 
    KeyboardAwareScrollView 
} from "react-native-keyboard-controller";
import { 
    Pressable, 
    SafeAreaView,
    Text,
    View
} from "react-native";
import { Stack } from "expo-router";
import QRCamera from "@/components/QRCamera";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from "../ScreenTypes";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

type QRScreenScreenProps = NativeStackScreenProps<RootStackParamList, 'QRScanner'>;

const QRScanner = ({ navigation }: QRScreenScreenProps) => {

    return (
        <KeyboardProvider>
            <Stack.Screen options={{
                headerLeft(props) {
                    return null;
                },
                headerTitle: 'Atus QR',
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: 'GoogleSansMedium'
                },
                headerRight(props) {
                    return <Pressable 
                        style={{
                            padding: 5,
                            backgroundColor: 'rgba(0,0,0,0.15)',
                            borderRadius: 10,
                            marginHorizontal: 10,
                            marginBottom: 10
                        }}
                        onPress={() => navigation.goBack()}
                        >
                        <MaterialCommunityIcons name="close" size={24} color="white" />
                    </Pressable>
                },
            }} />
            <StatusBar backgroundColor="white" style="dark" />
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <QRCamera />
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </KeyboardProvider>
    );

};

export default QRScanner;