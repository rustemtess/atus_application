import { Pressable, StatusBar, Text, TextInput, View } from "react-native";
import { Stack } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@/components/Logo";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { KeyboardAwareScrollView, KeyboardProvider } from "react-native-keyboard-controller";

const Index = () => {

    return (
        <SafeAreaView style={{
            backgroundColor: 'light',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <StatusBar backgroundColor={'black'} />
            <KeyboardAwareScrollView style={{
                flex: 1
            }}>
                <Stack.Screen options={ {
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    statusBarStyle: 'light',
                    headerTitle(props) {
                        return <View>
                            <Logo />
                        </View>
                    },
                } } />
                <View style={{
                    
                }}>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 8,
                            flexDirection: 'row',
                        }}>
                            <MaterialIcons name="login" size={20} color="rgba(0,0,0,0.8)" />
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'VKSansMedium',
                                color: 'rgba(0,0,0,0.8)',
                                paddingVertical: 15
                            }}>
                                Вход в учетную запись
                            </Text>
                        </View>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Введите ИИН"
                            style={{
                                width: '86%',
                                paddingHorizontal: 20,
                                paddingVertical: 12,
                                backgroundColor: '#EFEFEF',
                                borderRadius: 8,
                                fontSize: 15.5,
                                fontFamily: 'GoogleSansRegular',
                            }}
                        />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Введите пароль"
                            style={{
                                width: '86%',
                                paddingHorizontal: 20,
                                paddingVertical: 12,
                                backgroundColor: '#EFEFEF',
                                borderRadius: 8,
                                fontSize: 15.5,
                                fontFamily: 'GoogleSansRegular'
                            }}
                        />
                        <Pressable style={{
                            backgroundColor: 'black',
                            width: '86%',
                            borderRadius: 8,
                            paddingHorizontal: 20,display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 8,
                            flexDirection: 'row',
                        }}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontFamily: 'VKSansMedium',
                                fontSize: 16,
                                paddingVertical: 12
                            }}>Войти</Text>
                        </Pressable>
                    </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );

}

export default Index;