/**
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BankDetailsConfirm from './AppCode/authentication/BankDetail/BankDetailForm';
import FillBankDetail from './AppCode/authentication/BankDetail/FillDetail';
import { EmailAuthentication } from './AppCode/authentication/BasicInformation/EmailAuthentication';
import { SplashScreen } from './AppCode/authentication/BasicInformation/GoTOProAssetz';
import { CreateAccountScreen } from './AppCode/authentication/CreateUserAccount/CreateAccount';
import { DeclerationScreen } from './AppCode/authentication/CreateUserAccount/Declearation';
import VerifyEmail from './AppCode/authentication/CreateUserAccount/VerifyEmail';
import { KYCWelcome } from './AppCode/authentication/KYC/KYCWelcome';
import { KYCWizard } from './AppCode/authentication/KYC/KYCWizard';
import TextDatePicer from './AppCode/authentication/KYC/text';
import LoginScreen from './AppCode/authentication/LoginPage/userLogin';
import  WelcomeSplash  from './AppCode/authentication/SplashScreen/Splash';
import { colors } from './AppCode/constants/colors';
import { Provider as PaperProvider } from 'react-native-paper';
import { BankDocumentUpload } from './AppCode/authentication/BankDetail/BankDetailUpload';
const Stack=createNativeStackNavigator()

export default function FirstPage(){
    
    return(
            <PaperProvider>
                <NavigationContainer>
                    <StatusBar animated={true}  backgroundColor={colors.darkOrange} barStyle='light-content' hidden={false} />
                    <Stack.Navigator initialRouteName='Welcome'>
                        {/* <Stack.Screen
                            name="Welcome"
                            component={WelcomeSplash}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="NextSplash"
                            component={SplashScreen}
                            options={{ headerShown: false }}
                        /> */}
                        {/* <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        /> */}
                        {/* <Stack.Screen
                            name="EmailAuthenticationScreen"
                            component={EmailAuthentication}
                            options={{ headerShown: false }}
                        /> */}
                        {/* <Stack.Screen
                            name="CreateAccountScreen"
                            component={CreateAccountScreen}
                            options={{ headerShown: false }}
                        /> */}
                        {/* <Stack.Screen
                            name="DeclerationScreen"
                            component={DeclerationScreen}
                            options={{ headerShown: false }}
                        /> */}
                        {/* <Stack.Screen
                            name='VerifyEmailScreen'
                            component={VerifyEmail}
                            options={{ headerShown: false }}
                        />  */}
                        {/* <Stack.Screen
                            name='KYCWelcomeScreen'
                            component={KYCWelcome}
                            options={{ headerShown: false }}
                        /> */}
                        {/* <Stack.Screen
                            name='KYCWizardScreen'
                            component={KYCWizard}
                            options={{ headerShown: false }}
                        />  */}
                        {/* <Stack.Screen
                            name='FillBankDetailScreen'
                            component={FillBankDetail}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='BankDetailsConfirmScreen'
                            component={BankDetailsConfirm}
                            options={{ headerShown: false }}
                        />  */}
                        <Stack.Screen
                            name='BankDocumentUploadScreen'
                            component={BankDocumentUpload}
                            options={{ headerShown: false }}
                        />
                        {/* <Stack.Screen
                            name='TextDatePicker'
                            component={TextDatePicer}
                            options={{ headerShown: false }}
                        />  */}
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>


    )
}

AppRegistry.registerComponent(appName, () => FirstPage);
