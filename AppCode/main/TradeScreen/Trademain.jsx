import { Text, View,Pressable,Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import {  } from 'react-native';
import { colors } from '../../constants/colors';
import TradeCard from './TradeCard';
import { apiRoutes } from '../../constants/ApiRoutes';
import { ScrollView } from 'react-native';
import DropDown from './DropDownPicker';
import { TouchableOpacity } from 'react-native';
import Input from './Input';
import { KeyboardAvoidingView } from 'react-native';
import { ReuseButton } from '../../shared/ReusedButton';
import ButtonPageNavBar from './ButtonPageNavBar';


const Trademain = () => {
    const [pairSelected, setpairSelected] = useState('INR');
    const [apiResponse, setapiResponse] = useState([])
    const [userWalletAmount, setuserWalletAmount] = useState('')
    const [value, setValue] = useState(1);
    const [open, setOpen] = useState(null);
    const [coinVolume, setcoinVolume] = useState("20");
    const [userAmount, setUserAmount] = useState("");
    const [feesData,setFeesData]=useState([]);
    const [checkBuySellClickedBtn,setCheckBuySellClickedBtn] =useState(0)
    const percentageButton=[{ btn: "20%" }, { btn: "50%" }, { btn: "75%" }, { btn: "100%" }]
    const [items, setItems] = useState([
        { label: "BTC / INR",  value: 1 }, 
        { label: "BTC / USDT", value: 2 },
        { label: "BTC / ETH",  value: 3 }, 
        { label: "BTC / PROFY",value: 4 }
    ]);
    const [percentage,setPercentage]=useState(null)
    const [buttonHeading, setButtonHeading]=useState([
        { btn: "Buy", clr: '#38B781' },
        { btn: "Sell", clr: '#FF545E' }
    ])
    const priceFunction=(value)=>{
        setUserAmount(value)
    }
    const [selectedBtn,setSelectedBtn] =useState(0);
    const ValueCoinPair = value == 1 ? 'INR' : value == 2 ? 'USDT' : value == 3 ? 'ETH' : value == 4 ? 'PROFY' : 'INR';
    const BuySell = [{ btn: "Limit" }, { btn: "Market" }, { btn: "Stop Loss" }, { btn: "IOC" }]
    useEffect(()=>{
        getUserData(),
        getWalletFees()
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
            // console.log('result.data.coins_list', result.data.coins_list)
        } catch (error) {
            console.log('error', error)
        }
    }
    const getWalletFees = async () => {
        try {
            let walletFees = await fetch(apiRoutes.wallet_fees, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${apiRoutes.token}`,
                },
            });
            walletFees = await walletFees.json()
            setFeesData(walletFees.results)
            console.log('walletFees.results',walletFees.results[0].buy_fees)
        } catch (error) {
            console.log('error', error)
        }
    }
  const PercentageBar = () => (
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
            {percentageButton.map((item, index) => (
                <TouchableOpacity key={index} style={{ backgroundColor: "rgba(44, 43, 43, 1)", width: 60, paddingVertical: 4, borderRadius: 4, alignSelf: 'center', borderColor: percentage == index ? '#E29224' : null, borderWidth: percentage == index ? .6 : 0 }} onPress={() => setPercentage(index)}>
                    <Text style={{ fontSize: 14, color: 'rgba(153, 166, 175, 0.5)', textAlign: 'center' }}>{item.btn}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
   const ItemValueBox=()=>{
    // console.log('qwertyui',feesData[0].buy_fees)
    return (
        <View style={{flexDirection:'column'}}>
           <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 14,color: 'rgba(153, 166, 175, 0.5)' }}>Available</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: 'rgba(247, 247, 247, 1)', marginRight: 10 }}> USDT</Text>
                    <Image 
                       source={require('../../../assets/add.png')}
                       style={{width:20,height:20}}
                    />
                </View>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 14,color: 'rgba(153, 166, 175, 0.5)' }}>Fess</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: 'rgba(247, 247, 247, 1)', marginRight: 10 }}>
                        {/* {feesData[0].buy_fees} */}
                    </Text>
                    <Image 
                       source={require('../../../assets/info.png')}
                       style={{width:20,height:20}}
                    />
                </View>
            </View>
        </View>
    )
   }  
  const SelectCategoryInputData =(params)=>{
    switch (params) {
                    case 0:
                            return(
                                <>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{ fontSize: 16, marginLeft: 10, color: 'rgba(153, 166, 175, 0.5)' }}>Volume</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input value={coinVolume} onChangeText={(e) => setcoinVolume(e)} Btn={"KLV"} />
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{  fontSize: 16, marginLeft: 10,  color: 'rgba(153, 166, 175, 0.5)' }}>Price</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input value={"0"} Btn={"USDT"} />
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{  fontSize: 16, marginLeft: 10,  color: 'rgba(153, 166, 175, 0.5)' }}>Currency</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input 
                                            value={percentage == null ? "0.00" : percentage == 0 ? "20.00" : percentage == 1 ? "50.00" : percentage == 2 ? "75.00" : percentage == 3 ? "100.00" : userAmount} 
                                            Btn={"%"} 
                                            onChangeText={(val) => priceFunction(value)} 
                                            />
                                        </View>
                                    </View>
                                    <PercentageBar />
                                    <ItemValueBox />
                                </>
                            );
                    case 1:
                            return(
                                <>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{ fontSize: 16, marginLeft: 10, color: 'rgba(153, 166, 175, 0.5)' }}>Price</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input value={coinVolume} onChangeText={(e) => setcoinVolume(e)} Btn={"KLV"} />
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{  fontSize: 16, marginLeft: 10,  color: 'rgba(153, 166, 175, 0.5)' }}>Amount</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input 
                                            value={percentage == null ? "0.00" : percentage == 0 ? "20.00" : percentage == 1 ? "50.00" : percentage == 2 ? "75.00" : percentage == 3 ? "100.00" : userAmount} 
                                            Btn={"USDT"} 
                                            onChangeText={(val) => priceFunction(value)} 
                                            />
                                        </View>
                                    </View>
                                    <PercentageBar />
                                    <ItemValueBox />
                                </>
                            ) 
                    case 2:
                        return(
                            <>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{ fontSize: 16, marginLeft: 10, color: 'rgba(153, 166, 175, 0.5)' }}>Volume</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input value={coinVolume} onChangeText={(e) => setcoinVolume(e)} Btn={"KLV"} />
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{  fontSize: 16, marginLeft: 10,  color: 'rgba(153, 166, 175, 0.5)' }}>Price</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input value={"0"} Btn={"KLV"} />
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{  fontSize: 16, marginLeft: 10,  color: 'rgba(153, 166, 175, 0.5)' }}>Currency</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input 
                                            value={percentage == null ? "0.00" : percentage == 0 ? "20.00" : percentage == 1 ? "50.00" : percentage == 2 ? "75.00" : percentage == 3 ? "100.00" : userAmount} 
                                            Btn={"USDT"} 
                                            onChangeText={(val) => priceFunction(value)} 
                                            />
                                        </View>
                                    </View>
                                    <PercentageBar />
                                    <ItemValueBox />
                                </>
                        )
                    case 3:
                        return(
                            <>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{ fontSize: 16, marginLeft: 10, color: 'rgba(153, 166, 175, 0.5)' }}>Volume</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input value={coinVolume} onChangeText={(e) => setcoinVolume(e)} Btn={"KLV"} />
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', alignSelf: "center", marginTop: 10 }}>
                                        <Text style={{  fontSize: 16, marginLeft: 10,  color: 'rgba(153, 166, 175, 0.5)' }}>Price</Text>
                                        <View style={{ marginTop: 6 }}>
                                            <Input 
                                            value={percentage == null ? "0.00" : percentage == 0 ? "20.00" : percentage == 1 ? "50.00" : percentage == 2 ? "75.00" : percentage == 3 ? "100.00" : userAmount} 
                                            Btn={"USDT"} 
                                            onChangeText={(val) => priceFunction(value)} 
                                            />
                                        </View>
                                    </View>
                                    <PercentageBar />
                                    <ItemValueBox />
                                </>
                        )    
                                
                   }
  }  
  const sendUserData=()=>{
    // console.log(sendData)
  }
  return (
    <View style={[PAStyle.outerContainer,PAStyle.width,PAStyle.positionRelative]}>
      <View style={{flexDirection: 'row',marginTop:19,zIndex:2000}}>
        <Pressable
        // onPress={()=> navigation.navigate('LoginScreen')}
        >
              <Image
                    style={PAStyle.EmaillogoWidth}
                    source={require('../../../assets/backButton.png')}
              />
        </Pressable>
        <View style={{flexDirection:'column',}}>
            <View 
            style={{zIndex:100}}
            >
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
            
            <View style={{zIndex:50}}> 
                <Text style={{color:colors.purple,fontSize:18}}>+50.47%</Text>
            </View>
        </View>
      </View>
      <ScrollView>
            <View style={{ marginTop: 15 ,zIndex:1000}}>
                    {
                    apiResponse.map((item,index) => (<View key={item.id} style={{elevation: 3}}>
                            {item.trade_coin == 'BAT' && 
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
                        </View>))
                    }
                    
                </View>
                <View style={[PAStyle.btnOuterContainer]}>
                    {buttonHeading.map((item,index)=>(
                        <TouchableOpacity key={index} activeOpacity={0} style={{width:'50%'}}
                            onPress={()=>{setSelectedBtn(index)}}
                        >
                            <View 
                                style={[PAStyle.btnbox,{backgroundColor:
                                        selectedBtn==index ? item.clr: '#2C2B2B'
                                }]}
                            >
                                <Text style={PAStyle.btntxt}>{item.btn}</Text>
                            </View>
                        </TouchableOpacity> 
                    ))}
                </View>
                <View style={PAStyle.innerHeader}>
                    {BuySell.map((item,index)=>(
                        <TouchableOpacity key={index} activeOpacity={0.6}  
                                        onPress={()=>{setCheckBuySellClickedBtn(index)}}
                        >
                            <Text
                            style={[{ color: colors.white, fontSize: 14, paddingHorizontal: 5, paddingBottom: 4 },checkBuySellClickedBtn ==index &&{borderBottomColor: '#E29224', borderBottomWidth: 1.5, borderRadius: 1,}]} 
                            >{item.btn}</Text>
                            
                        </TouchableOpacity>
                    ))}
                </View>
                <KeyboardAvoidingView>
                    {SelectCategoryInputData(checkBuySellClickedBtn)}
                </KeyboardAvoidingView>
                <TouchableOpacity style={{ marginTop: 26 }} activeOpacity={0.6} 
                    onPress={() => sendUserData()}
                >
                            <ReuseButton text={selectedBtn == 0 ? 'BUY' : 'Sell'} width={'90%'} color={'rgba(255, 255, 255, 1)'} backgroundColor={selectedBtn == 0 ? 'rgba(56, 183, 129, 1)' : 'rgba(255, 84, 94, 1)'} />
                </TouchableOpacity>

      </ScrollView>
        <ButtonPageNavBar index={3} />
    </View>
  )
}

export default Trademain

