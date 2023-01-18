import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, Text, TextInput,ScrollView, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Platform, Dimensions,} from 'react-native'
import { Button } from 'react-native-paper';
import { Pressable } from 'react-native';
import { CodeField ,useClearByFocusCell, useBlurOnFulfill,Cursor,isLastFilledCell} from 'react-native-confirmation-code-field';
import axios from 'axios';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';

const CELL_COUNT = 6;
export const EmailAuthentication=(props)=> {
  const navigation=useNavigation();
  const [value,setValue]=useState('')
  const [timerCount, setTimer] = React.useState(5);
  const [otpDone, setOtpDone] = useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleVerifyOtp = (otp) => {
    console.log('propssss',props)
    console.log('otp',otp)
    const reqBody = {
      ...props.route.params.formData,
      email_otp: otp,
    };
    // console.warn('weiruhiweuhwer',...props?.route?.params?.formData,)
    console.log('make req with', reqBody);
    axios
      .post('https://www.proassetz.com/api/v1/user-login/', reqBody)
      .then(function (response) {
        console.log(response);
        if (response.data.otp_type === 'google') {
          let qrData = { ...response.data, ...reqBody };
          navigation.navigate('TwoFactorAutheticationScreen', { qrData });
        }
      })
      .catch(function (error) {
        alert(error.response.data.message, 'Verify email if not verified');
        console.log(error);
      });
  };
  useEffect(()=>{
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    
    return () =>{ clearInterval(interval)};
  },[ ]);
  useEffect(()=>{
    if(timerCount===0){
      setDisabled(false)
    }
  });
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = null;
   
    if (symbol) {
      textChild = <Text isLastFilledCell={isLastFilledCell({ index, value })}>{symbol}</Text>;
      if (index === 5 && symbol !== '') {
        setOtpDone(true);
      }
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[PAStyle.cell, isFocused && PAStyle.focusCell]}
        onLayout={getCellOnLayout(index)}>
        {textChild}
      </Text>
    );
  };
  const width = Dimensions.get('window').width;
  return (
    
    <KeyboardAvoidingView style={{...PAStyle.outerContainer}}>
        <View style={{...PAStyle.backGround,display:'flex',flexDirection: 'row',width:width,marginTop:19}}>
          <Pressable onPress={()=> navigation.navigate('LoginScreen')}>
            <Image style={PAStyle.EmaillogoWidth}
                   source={require('../../../assets/backButton.png')}
                   
                  />
          </Pressable>
          <Text style={{...PAStyle.AccountText,marginLeft:25}}>Email Authentication</Text>
          
        </View>
        <View style={{width:width}}>
            <View style={{...PAStyle.otpStyle,paddingTop:80}}>
              <Text style={PAStyle.emailStyle}>
                  An OTP has been sent to {'\n'} your email
              </Text>
            </View>
        </View>
        <View style={{width:width}}>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={{ color: '#6E6E6E', textAlign: 'center', marginTop: 80 }}>Type your OTP</Text>
                <CodeField
                    ref={ref}
                    {...codeFieldProps}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={PAStyle.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={renderCell}
                   
                />
                <Text style={{ color: '#E29224', textAlign: 'center' }}>
                  0.{timerCount} <Text style={{ color: '#6E6E6E' }}>min</Text>
                </Text>
              </View>
        </View>
        <View style={{width:width}}>
            <Pressable
            style={PAStyle.VerifyButton}
            onPress={() => {
              // if (otpDone) {
                // console.log(value)
                handleVerifyOtp(value);
              // } else {
              //   alert('OTP invalid');
              // }
            }}>
            <Text style={{ color:'white', textAlign: 'center' }}>Verify</Text>
          </Pressable>
              <Button
                        disabled={disabled}
                        dark={false}
                        style={disabled ? PAStyle.resendDisabledButton : PAStyle.resendButton}
                        // onPress={}
                        compact={false}
                        contentStyle={{
                          alignSelf: 'stretch',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          padding: 0,
                          margin: 0,
                        }}
                        mode="contained">
                        <Text
                          style={
                            disabled
                              ? {
                                fontSize: 20,
                                textAlign: 'center',
                                color: 'lightgray',
                                textTransform: 'capitalize',
                              }
                              : {
                                fontSize: 20,
                                textAlign: 'center',
                                textTransform: 'capitalize',
                                color: '#473200',
                              }
                          }>
                          Resend
                        </Text>
              </Button>
        </View>
    </KeyboardAvoidingView>
  );
}



 

