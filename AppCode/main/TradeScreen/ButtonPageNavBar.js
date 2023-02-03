import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss'
import { Image,TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'


const ButtonPageNavBar = ({index}) => {
    const navigation =useNavigation();
  return (
    <View style={[PAStyle.backGround,PAStyle.shadow,{flexDirection:'row',justifyContent:'space-around'}]}>
        <TouchableOpacity style={{flexDirection:'column',paddingVertical:10}}
            onPress={()=>navigation.navigate('ChartScreen')}
        >
            <View style={{backgroundColor:index==1? colors.darkOrange: colors.bgColor , borderRadius:index==1 ? 40 : 0 ,paddingHorizontal:index==1? 7: 0,paddingVertical:index== 1 ? 1 : 0}}>
            <Image source={require('../../../assets/bar-graph.png')}
                   style={{width:25,height:25,marginLeft:4}}
            />
            </View>
            <Text style={{marginTop:4,color:colors.white}}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',paddingVertical:10}}>
            <View 
                style={{backgroundColor:index==2? colors.darkOrange: colors.bgColor , borderRadius:index==2 ? 40 : 0 ,paddingHorizontal:index==2? 7: 0,paddingVertical:index== 2 ? 1 : 0}}>
            <Image source={require('../../../assets/menu.png')}
                   style={{width:25,height:25,marginLeft:4}}
            />
            </View>
            <Text style={{marginTop:4,color:colors.white}}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',paddingVertical:10}}
            onPress={()=>{navigation.navigate('TradeMainScreen')}}
        >
            <View 
                style={{backgroundColor:index==3? colors.darkOrange: colors.bgColor , borderRadius:index==3 ? 40 : 0 ,paddingHorizontal:index==3 ? 7: 0,paddingVertical:index== 3 ? 1 : 0}} >
            <Image source={require('../../../assets/profit.png')}
                   style={{width:25,height:25,marginLeft:0,}}
            />
            </View>
            <Text style={{marginTop:4,color:colors.white}}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',paddingVertical:10}}>
            <View 
                 style={{backgroundColor:index==4? colors.darkOrange: colors.bgColor , borderRadius:index==4 ? 40 : 0 ,paddingHorizontal:index==4? 7: 0,paddingVertical:index== 4 ? 1 : 0}}
            >
            <Image source={require('../../../assets/book.png')}
                   style={{width:25,height:25,marginLeft:4}}
            />
            </View>
            <Text style={{marginTop:4,color:colors.white}}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',paddingVertical:10}}>
            <View
                style={{backgroundColor:index==5? colors.darkOrange: colors.bgColor , borderRadius:index==5 ? 40 : 0 ,paddingHorizontal:index==5? 7: 0,paddingVertical:index== 5 ? 1 : 0}}
            >
            <Image source={require('../../../assets/clock.png')}
                   style={{width:25,height:25,marginLeft:4}}
            />
            </View>
            <Text style={{marginTop:4,color:colors.white}}>History</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ButtonPageNavBar

