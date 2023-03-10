import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View } from 'react-native';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
// import { LoadingEffect } from '../loadingEffect/LoadingStart';


export default  function WelcomeSplash(){
  const navigation=useNavigation();
  setTimeout(() => {
    navigation.navigate('NextSplash')
  }, 1000);
  return (
       <View style={[PAStyle.backGround,PAStyle.flex,PAStyle.positionRelative]}>
           <Image style={PAStyle.logoWidth}
              source={require('../../../assets/logoBig.png')}
            /> 
            {/* <LoadingEffect /> */}
            <Text style={[PAStyle.positionAbsolute,PAStyle.VisibleImg]}>Version 1</Text>
       </View>
  );
}

  