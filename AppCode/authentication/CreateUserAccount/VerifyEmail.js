import { View, Text,Image,  TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../constants/colors';
import {  Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import axios from 'axios';
import { apiRoutes } from '../../constants/ApiRoutes';

export default function VerifyEmail(props) {
  console.log('verifyPage',props)
  const { email , password } = props.route.params.formData;
  let user ={
    email:email,
    password:password
  }

  let formData=JSON.stringify(user)
  const navigation = useNavigation();
  const[disabled,setDisabled]=useState(true)
  const fetchData = () => {
    console.log('=======>',formData)
    
    axios.post(apiRoutes.user_login,formData)
    .then((res)=>{
      console.log('verify response',res)
    })
    .catch( (error)=> {
      console.log(error)
    }
    )
  }
  setTimeout(() => {
    fetchData();
  }, 10000);
  
  
  return (
    <View style={[PAStyle.outerContainer,PAStyle.width,PAStyle.positionRelative]}>
        <View style={{...PAStyle.backGround,display:'flex',flexDirection: 'row',marginTop:19}}>
          <Pressable 
               onPress={()=> 
               navigation.navigate('DeclerationScreen')}
            >
            <Image style={PAStyle.EmaillogoWidth}
                  source={require('../../../assets/backButton.png')}
                  />
          </Pressable>
          <Text style={{...PAStyle.AccountText,marginLeft:'auto',marginRight:'auto'}}>Verify Email</Text>
        </View>
      <View style={{padding:30}}>
        <Text style={{ fontSize: 20, color: 'white' }}>
          An email has been seen to{'\n'}
          <Text style={{ fontSize: 20, color: colors.yellowDark }}>
            {props?.route?.params?.formData !== undefined
              ? props.route.params.formData.email
              : 'your email'}
          </Text>{' '}
          for{'\n'}
          confirmation.Please follow the
          {'\n'}instrution there to complete your{'\n'}registration. {'\n'}
        </Text>
        <Text style={{ fontSize: 20, color: 'white', marginTop: 3 }}>
          Did not receive email{' '}
          <Text
            //onPress={() => navigation.navigate('ContactUs')}
            style={{ fontSize: 20, color: colors.yellowDark }}>
            contact us
          </Text>
          {'\n'}
        </Text>
        <Text style={{ fontSize: 20, color: 'white', marginTop: 3 }}>
          Once confirmed click on Continue to login
        </Text>
      </View>
      <Button
        // disabled={disabled}
        style={disabled ? PAStyle.VerifyContinuedisabledButton : PAStyle.VerifyContinuebutton}
        onPress={() => navigation.navigate('LoginScreen')}
        mode="contained">
        Continue
      </Button>
    </View>
  );
}

