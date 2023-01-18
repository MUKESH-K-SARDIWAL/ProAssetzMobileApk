import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Pressable } from 'react-native'
import {  Button, } from 'react-native-paper'
import { Image, ScrollView, Text, View } from 'react-native'
import { colors } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss'
import { apiRoutes } from '../../constants/ApiRoutes'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
export const DeclerationScreen = (props) => {
    const [checked1 ,setChecked1]=useState(false)
    const [checked2 ,setChecked2]=useState(false)
    const [checked3 ,setChecked3]=useState(false)
    const [disabled ,setDisabled]=useState(true)
    const navigation =useNavigation();
    useEffect(()=>
    {if (checked1 && checked2 && checked3) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }, [checked1, checked2, checked3])
    const handleAccept = async() => {
        createAccoutDetail(props.route.params.formData);
      };
    const createAccoutDetail = async(formData) => {
        await axios
          .post(`${apiRoutes.create_user}?referral_code=${formData.referral_code}`, {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
            terms_and_condition: 1,
          })
          .then(function (response) {
            console.log(response);
              //navigation.navigate('VerifyEmailScreen', { formData });
          })
          .catch(function (error) {
              alert(JSON.stringify(error.response?.data?.message))
            // if(error.response?.data?.message?.email){
            //   // alert(JSON.stringify(error.response?.data?.message?.email[0]))
            //   setSnackMssg(JSON.stringify(error.response?.data?.message?.email[0]))
            //   onToggleSnackBar();
            // }else{
              
            //   setSnackMssg("Somethings went wrong....")
            //   onToggleSnackBar();
            // }
          });
      };  
  return (
    <View style={[PAStyle.outerContainer,PAStyle.backGround,PAStyle.width]}>
        <View style={{...PAStyle.backGround,display:'flex',flexDirection: 'row',marginTop:19}}>
          <Pressable 
               onPress={()=> 
               navigation.navigate('CreateAccountScreen')}
            >
            <Image style={PAStyle.EmaillogoWidth}
                  source={require('../../../assets/backButton.png')}
                  />
          </Pressable>
          <Text style={{...PAStyle.AccountText,marginLeft:'auto',marginRight:'auto'}}>Decleration</Text>
        </View>
        
            <View style={{ flexDirection: 'column', }}>
                    <View style={{ flexDirection: 'row', paddingLeft:0,paddingTop:30 }}>
                            <View >
                            <BouncyCheckbox
                                size={16}
                                fillColor={colors.darkOrange}
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: colors.yellowDark,borderRadius:2,marginTop:10,marginLeft:10 }}
                                innerIconStyle={{ borderWidth: 0 }}
                                onPress={() => {
                                    setChecked1(!checked1);
                                }}
                                />
                            
                            </View>
                            <View style={{paddingHorizontal: 10, marginHorizontal: 0}}>
                                    <Text
                                        style={{ color: colors.white, fontSize: 16,  textAlign: 'left',marginTop: 6, }}>
                                        I declare that I became acquainted {'\n'} with
                                        <Text
                                        style={{
                                            color: colors.yellowDark,
                                            textAlign: 'center',
                                            fontSize: 16,
                                        }}>
                                        Privacy policy
                                        </Text>{''}
                                        for Indian users,
                                        <Text
                                        style={{
                                            color: colors.yellowDark,
                                            textAlign: 'center',
                                            fontSize: 16,
                                        }}>{'\n'}
                                        Terms of use
                                        </Text>{''}
                                        and{' '}
                                        <Text
                                        style={{
                                            color: colors.yellowDark,
                                            textAlign: 'center',
                                            fontSize: 16,
                                        }}>{' '}
                                        Terms of condition
                                        </Text>{'\n'}
                                        for Indian users.
                                    </Text>
                            </View>
                            </View>
                    <View style={{ flexDirection: 'row', paddingLeft:0,paddingTop:20 }}>
                            <View >
                            <BouncyCheckbox
                                size={16}
                                fillColor={colors.darkOrange}
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: colors.yellowDark,borderRadius:2,marginTop:10,marginLeft:10 }}
                                innerIconStyle={{ borderWidth: 0 }}
                                onPress={() => {
                                    setChecked2(!checked2);
                                }}
                                />
                            </View>
                            <View style={{paddingHorizontal: 10, marginHorizontal: 0}}>
                            <Text
                                    style={{ color: colors.white, marginLeft: 0, fontSize: 16, textAlign: 'left' }}>
                                    I consent to the processing of my
                                    personal{'\n'} data provided by me during
                                    registration{'\n'} and collected during the  use of{'\n'}
                                    <Text
                                    style={{
                                        color: colors.yellowDark,
                                        textAlign: 'center',
                                        fontSize: 16,
                                    }}>
                                    proassetz.com
                                    </Text>
                                    , collected in
                                    order to{'\n'}  provide services offered on the Website,{'\n'} in particular the sale
                                    and purchase{'\n'} of Crypto Assets.
                                </Text>
                                </View>
                            </View>
                    <View style={{ flexDirection: 'row',paddingLeft:0,paddingTop:20 }}>
                            <View >
                            <BouncyCheckbox
                                size={16}
                                fillColor={colors.darkOrange}
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: colors.yellowDark,borderRadius:2,marginTop:10,marginLeft:10 }}
                                innerIconStyle={{ borderWidth: 0 }}
                                onPress={() => {
                                    setChecked3(!checked3);
                                }}
                                />
                            
                            </View>
                            <View style={{paddingHorizontal: 3, marginHorizontal: 0}}>
                            <Text
                                    style={{ color: colors.white, marginLeft: 4, fontSize: 16, textAlign: 'left' }}>
                                    I consent to the processing of my personal{"\n"} data in order to provide me with {"\n"}information on the operation of 
                                    the {"\n"}platform, new  functionalities of
                                    the {"\n"}website, amendments to the  regulations {"\n"}and other documents,{"\n"} i.e 
                                    <Text
                                    style={{
                                        color: colors.yellowDark,
                                        textAlign: 'center',
                                        fontSize: 16,
                                    }}>
                                    Privacy Policy
                                    </Text>{' '}
                                    or AML
                                </Text>
                                </View>
                            </View>                
            </View>
        <Button
        disabled={disabled}
        dark={false}
        style={disabled ? PAStyle.AcceptdisabledButton : PAStyle.Acceptbutton}
        onPress={handleAccept}
        mode="contained">
        <Text
          style={
            disabled
              ? {
                  fontSize: 20,
                  textAlign: 'center',
                  textTransform: 'capitalize',
                }
              : {
                  fontSize: 20,
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#473200',
                }
          }>
          Accept
        </Text>
        </Button>

    </View>    
    
  )
}

