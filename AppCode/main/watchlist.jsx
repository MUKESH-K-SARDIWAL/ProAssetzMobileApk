import React,{useState,useEffect} from 'react'
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { colors } from '../constants/colors';
import { PAStyle } from '../shared/ProAssetzCSS/ProAssetzcss';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SmallCard from '../shared/SmallCard';

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
            <Text style={{...PAStyle.textAlign,marginLeft:80,color:colors.headingColor,fontSize:20}}>Our Portfolio</Text>
        </View>
        <View style={{marginTop:20}}>
          <Text style={[PAStyle.textAlign,{fontSize:16,color:colors.lightWhitre}]}>Invested Value</Text>
          <Text style={[PAStyle.textAlign,{fontSize: 24,color: '#FFF6E0',paddingTop:10}]}>₹ 31,77,9051</Text>
        </View>
        <View  style={PAStyle.portFolioalign}>
          <View style={PAStyle.portFolioBox}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#878787', fontSize: 14,}}>Current Value</Text>
                            <Feather name='help-circle' size={18} color={'#E29125'} style={{ marginLeft: 6 }} />
                        </View>
                        <Text style={{ color: '#FFE6AD', fontSize: 16, textAlign: 'center', marginTop: 4 }}>₹ 31,77,9051</Text>
              </View>
              <View style={PAStyle.portFolioBox}>
                    <Text style={{ color: '#878787', fontSize: 14, textAlign: 'center' }}>Profit & Loss</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name='caretup' size={16} color={'#38C976'} style={{ marginTop: 6, marginRight: 6 }} />
                        <Text style={{ color: '#FFE6AD', fontSize: 16, textAlign: 'center', marginTop: 4 }}>100%</Text>
                    </View>
                </View> 

        </View>
        <View style={{ width: '96%', alignSelf: 'center', marginTop: 20 }}>
                <SmallCard source={require("../../assets/IndRup.png")} Name={'INR'} Invested={'Invested'} Price={'₹ 0.00000'} AvilableBalance={true} Balance={'$ 32,543'} Qty={'0.000160'} TextColor={'#FFFFFF'} Interest={'₹ 32,543'} Show={false} CardHeight={110} />
        </View>
        <View>
                <Text style={{ fontSize: 20, color: '#FFF6E0', textAlign: 'center' }}>Crypto Assets</Text>
        </View>
        </ScrollView>
    )
}