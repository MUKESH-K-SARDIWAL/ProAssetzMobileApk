import { Text, View,Pressable,Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import {  } from 'react-native';
import { colors } from '../../constants/colors';
import TradeCard from './TradeCard';
import { apiRoutes } from '../../constants/ApiRoutes';
import { ScrollView } from 'react-native';
import DropDown from './DropDownPicker';


const Trademain = () => {
    const [pairSelected, setpairSelected] = useState('INR');
    const [apiResponse, setapiResponse] = useState([])
    const [userWalletAmount, setuserWalletAmount] = useState('')
    const [value, setValue] = useState(1);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "BTC / INR",  value: 1 }, 
        { label: "BTC / USDT", value: 2 },
        { label: "BTC / ETH",  value: 3 }, 
        { label: "BTC / PROFY",value: 4}
    ]);
    const ValueCoinPair = value == 1 ? 'INR' : value == 2 ? 'USDT' : value == 3 ? 'ETH' : value == 4 ? 'PROFY' : 'INR';
    useEffect(()=>{
        getUserData()
    },[])
    const getUserData = async () => {
        setpairSelected(ValueCoinPair)
        try {
            let result = await fetch(apiRoutes.availablePair + pairSelected, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${apiRoutes.token}`,
                },
            });
            result = await result.json()
            setapiResponse(result.data.coins_list)
            console.log('result.data.coins_list', result.data.coins_list)
        } catch (error) {
            console.log('error', error)
        }
    }
  return (
    <View style={[PAStyle.outerContainer,PAStyle.width]}>
      <View style={{flexDirection: 'row',marginTop:19}}>
        <Pressable
        // onPress={()=> navigation.navigate('LoginScreen')}
        >
              <Image
                    style={PAStyle.EmaillogoWidth}
                    source={require('../../../assets/backButton.png')}
              />
        </Pressable>
        <View style={{flexDirection:'column'}}>
            {/* <View style={{flexDirection:'row'}}>
                <Text style={{color:colors.white,fontSize:23}}>BTC/INR</Text>
                <Image style={{width:15,height:15,marginTop:6,marginLeft:5}} source={require('../../../assets/caret-down.png')}/>
            </View> */}
            <View onPress={()=>{setOpen(!open)}}>
            <DropDown
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={() => { getUserData() }}
            />
            </View>
            
            <View>
                <Text style={{color:colors.purple,fontSize:18}}>+50.47%</Text>
            </View>
        </View>
      </View>
      <ScrollView  contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ marginTop: 15 }}>
            {
            apiResponse.map((item,index) => (<>
                    {item.trade_coin == "USDT" && 
                        (
                            <TradeCard 
                                    change_amount={item.trade_data.ltp}
                                    ltp_in_usd={userWalletAmount.ltp_in_usd} 
                                    high24hr={item.trade_data.high24hr} 
                                    low24hr={item.trade_data.low24hr} 
                                    total24hrVolume={item.trade_data.total24hrVolume} 
                                    Change24hr={item.trade_data.percentChange24hours} 
                                    
                            />
                        )
                    }
                </>))
            }
            
        </View>
      </ScrollView>

    </View>
  )
}

export default Trademain

