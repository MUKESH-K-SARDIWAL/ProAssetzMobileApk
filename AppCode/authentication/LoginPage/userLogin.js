import { Formik } from 'formik';
import React,{useContext,useState} from 'react'
import { Image,Text,  TouchableOpacity, View,Button,Pressable, KeyboardAvoidingView, Keyboard, Platform, SafeAreaView, ScrollView } from 'react-native'
import * as yup from 'yup'
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../constants/AuthenticationContext';
import { apiRoutes } from '../../constants/ApiRoutes';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import { colors } from '../../constants/colors';
import StyledText from '../../shared/StyleText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function LoginScreen() {
    const { setUserData } = useContext(AuthContext)
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const user = {
        email: email,
        password: pass,
        }
    const formSchema = yup.object({
        email: yup.string().email('Enter vaild email address').required('Email address Required'),
        password: yup.string().required('Password address Required'),
    });
      const navigation = useNavigation();
      const storeData = (user) => {
        try {
          AsyncStorage.setItem('Key', JSON.stringify(user))
        }
        catch (e) {
          console.log('Async error', e)
        }
      }
      const handleLogin = (formData) => {
        axios
          .post(apiRoutes.user_login, formData)
          .then(function (response) {
            console.log('response ==>', response.data);
            if (response?.data?.otp_type == 'google') {
              user.email = formData.email
              user.password = formData.password
            //   navigation.navigate('TwoFactorAuthQRScreen', { formData, response });
              setUserData({ email: formData.email, password: formData.password })
              storeData();
            } else if (response.data.otp_type == 'email') {
                console.log(response)
                storeData({ email: formData.email, password: formData.password });
                    navigation.navigate('EmailAuthenticationScreen', { formData });
                }
          })
          .catch(function (error) {
            alert(error)
            const { message } = error.response.data;
            let errm;
            if (message.english) {
              errm = JSON.stringify(message.english);
            } else {
              errm = JSON.stringify(message);
            }
            console.log(errm);
            alert(error.response.data.message, 'Verify email if not verified');
            console.log(error);
          });
      };
  return (
            <KeyboardAvoidingView style={[PAStyle.flex,PAStyle.backGround]}>
                {/* <ScrollView> */}
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={PAStyle.innerView1}>
                            <Image  
                                style={PAStyle.loginLogoWidth}
                                source={require('../../../assets/logoBig.png')}
                            />
                        </View>
                        <View style={PAStyle.innerView2}>
                            <View>
                                <Text style={[PAStyle.regularH,PAStyle.regularHeading]}>
                                    Login
                                </Text>
                            </View>
                            <Formik
                            initialValues={{
                            email: '',
                            password: '',
                            }}
                            validationSchema={formSchema}
                            onSubmit={(values) => {
                            console.log('login values', values);
                            handleLogin(values);
                            }}>
                            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue }) => (
                            <>
                                <View style={[PAStyle.inputWrapper]}>
                                <TextInput
                                    mode="flat"
                                    underlineColor="transparent"
                                    activeUnderlineColor="transparent"
                                    style={[PAStyle.input, touched.email && errors.email ? { borderWidth: 1, borderColor: '#DC3030' } : {}]}
                                    color="#fff"
                                    value={values.email}
                                    onChangeText={(val) => setFieldValue('email', val.trim())}
                                    onBlur={handleBlur('email')}
                                    label={<StyledText labelText="Email ID" />}
                                    placeholder='Email ID'
                                    theme={{ colors: { text: '#fff' } }}
                                // onChange={(val) => setval1(val)}
                            />
                                </View>
                                <Text style={{ color: '#DC3030', textAlign: 'left', marginLeft: 33, }}>{touched.email && errors.email}</Text>
                                <View
                                style={{ ...PAStyle.rowcon, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <View style={PAStyle.inputWrapper2}>
                                    <TextInput
                                    mode="flat"
                                    underlineColor="transparent"
                                    activeUnderlineColor="transparent"
                                    style={[PAStyle.input2, touched.password && errors.password ? { borderWidth: 1, borderColor: '#DC3030' } : {}]}
                                    color="#fff"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    label={<StyledText labelText="Password"/>}
                                    placeholder="Password"
                                    theme={{ colors: { text: '#fff' } }}
                                    //   onChange={(val) => setval2(val)}
                                    />
                                </View>
                                <View style={{width:50,height:50,backgroundColor:colors.grayDark,marginLeft:20,borderRadius:10,marginTop:2}}>
                                    <View >
                                        <Image 
                                        source={require('../../../assets/fingerPrint.png')}
                                        style={{...PAStyle.buttomStyle,marginTop:10}}
                                        />
                                    </View>
                                </View>
                                </View>
                                <Text style={{ color: '#DC3030', textAlign: 'left', marginLeft: 33, }}>{touched.password && errors.password}</Text>
                                <View style={{...PAStyle.rowcon,marginLeft:12}}>
                                <TouchableOpacity 
                                    // onPress={() => { 
                                    // navigation.navigate('ForgotPasswordScreen') 
                                    // }}
                                >
                                <Text
                                style={PAStyle.textStyle}>
                                Forgot Password ?
                                </Text>
                                </TouchableOpacity>   
                                <View style={{ width: '60%',alignItems:'center' }}>
                                    <Pressable style={{...PAStyle.Submitbutton,}} onPress={handleSubmit}>
                                    <Text
                                        style={[PAStyle.loginBtnStyle,PAStyle.textAlign]}>
                                        Login
                                    </Text>
                                    </Pressable>
                                </View>
                                </View>                 
                            </>
                            )}
                        </Formik>
                        </View>
                        <View style={PAStyle.innerView3}>
                                    <Text style={[PAStyle.textAlign,PAStyle.alreadyAcct]}>Dont’t have an account ?</Text>
                                <Pressable>
                                    <Text style={[PAStyle.login,PAStyle.textAlign]}>Create an Account</Text>
                                </Pressable>
                        </View>
                    </TouchableWithoutFeedback>
                {/* </ScrollView> */}
            </KeyboardAvoidingView>

        
  )
}

export default LoginScreen