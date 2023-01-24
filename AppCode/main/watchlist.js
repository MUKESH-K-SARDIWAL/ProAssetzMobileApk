import React,{useState,useEffect} from 'react'
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { colors } from '../constants/colors';
import { PAStyle } from '../shared/ProAssetzCSS/ProAssetzcss';

export const MyWatchList= ()=>{
    return(
        <ScrollView style={[PAStyle.width,PAStyle.outerContainer]} >
            <View style={{...PAStyle.backGround,display:'flex',flexDirection: 'row',marginTop:19}}>
          <Pressable onPress={()=> navigation.navigate('LoginScreen')}>
            <Image
                  style={PAStyle.EmaillogoWidth}
                  source={require('../../assets/backButton.png')}
            />
          </Pressable>
          <Text style={{...PAStyle.textAlign,marginLeft:80,color:colors.white,fontSize:25}}>WatchList</Text>
        </View>
        </ScrollView>
    )
}