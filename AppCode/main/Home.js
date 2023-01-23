import { ScrollView, StyleSheet, Text, View,Button,Image, TouchableOpacity, Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors } from '../constants/colors';
import axios from 'axios';
import { ReuseButton} from '../shared/ReusedButton'
import { useNavigation } from '@react-navigation/native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import CardMain from '../shared/cardMain';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CollapseList from '../shared/collapseList';
import { WatchList } from '../shared/WatchList';
import BtcInput from '../shared/BtcInput';
import TopGainerCard from '../shared/topGainerCard';
import RecentInsights from '../shared/recentInsight';
import { PAStyle } from '../shared/ProAssetzCSS/ProAssetzcss';
export const Home=(props)=>{
    const navigation=useNavigation();
    const [showCrypto, setshowCrypto] = useState(true)
    const [modalVisible, setmodalVisible] = useState(false);
    const [visible, setvisible] = useState(true)
    const { width, height } = Dimensions.get("window");
    const DataList = [
        { id: 1, img: require('../../assets/RectangleBlog.png'),},
        { id: 2, img: require('../../assets/RectangleBlog.png'), },
        { id: 3, img: require('../../assets/adhaar.png'), },
    ];
    const DataTransfer = [
        { id: 1, img: require('../../assets/Ether.png'), name: 'BTC', subName: 'Bitcoin', coinAmount: '31,977,55,00', coinPercent: '10' },
        { id: 2, img: require('../../assets/dogecoin.png'), name: 'BTC', subName: 'Bitcoin', coinAmount: '31,977,55,00', coinPercent: '10' },
        { id: 3, img: require('../../assets/Ether.png'), name: 'BTC', subName: 'Bitcoin', coinAmount: '31,977,55,00', coinPercent: '10' },
        { id: 4, img: require('../../assets/dogecoin.png'), name: 'BTC', subName: 'Bitcoin', coinAmount: '31,977,55,00', coinPercent: '10' }
    ]
    const ButtonPercentage = [
        { id: 1, text: '25%' }, { id: 2, text: '50%' }, { id: 3, text: '75%' }, { id: 4, text: '100%' }
    ]
    const [percentSelected, setpercentSelected] = useState(0)

    return(
        <View style={PAStyle.container}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <View style={PAStyle.outerDiv}>
                        <View style={PAStyle.ProfileNameWord}>
                            <Text style={{...PAStyle.NameText,marginBottom:1}}>M</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={PAStyle.welcomeword}>Hello,</Text>
                            <TouchableOpacity 
                                activeOpacity={0.6} 
                                onPress={() => setprofileBox(true)} 
                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                
                                <Text style={{...PAStyle.welcomeword,marginLeft:8}}>Mukesh</Text>
                                <AntDesign name='caretdown' size={15} color={'#FFB916'} style={{ marginLeft: 8 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={PAStyle.cardOuterDiv}>
                        <Text style={{ fontSize: 20,color: '#FFF6E0'}}>
                            you are ready to add your funds</Text>
                        <Text style={{ fontSize: 14,color: '#878787', marginTop: 2 }}>Do your </Text>
                        <View style={{ marginTop: 24 }}>
                            <TouchableOpacity 
                                activeOpacity={0.6} 
                                //onPress={() => { navigation.navigate('FundPage') }}
                                >
                                <ReuseButton 
                                    text={'Add Funds'}  
                                    color={'#473200'} 
                                    backgroundColor={'#FFB916'} 
                                    width={'66%'} 
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={PAStyle.swiperList}>
                        <SwiperFlatList
                                autoplay
                                autoplayDelay={2}
                                autoplayLoop
                                index={2}
                                showPagination
                                data={DataList}
                                renderItem={({ item }) => (
                                    <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={item.img} resizeMode={"contain"} style={{ width: '100%', height: "100%", alignSelf: 'center' }} />
                                    </View>
                                )}
                        />
                    </View>

                    <CardMain Show={() => { setvisible(false), setshowCrypto(false) }} visible={visible} />
                    {showCrypto == false ? <CollapseList Show={() => { setvisible(true), setshowCrypto(true) }} /> : null}


                    <View style={{ marginTop: 30 }}>
                    <WatchList />
                    </View>

                    <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20,  color: '#FFF6E0', }}>Swap Crypto</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={PAStyle.fontStyle}>I have BTC</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <BtcInput txt={'BTC'} />
                    </View>
                    <View style={PAStyle.outerCardDiv}>
                        <Text style={PAStyle.fontStyle}>Fees :<Text style={{ fontSize: 12,  color: '#FFA629' }}> 0.00</Text></Text>

                        <Text style={PAStyle.fontStyle}>Total Amount :<Text style={{ fontSize: 12,  color: '#FFA629' }}> 0.00</Text></Text>
                    </View>

                    <View>
                        <View style={{ marginVertical: 10 }}>
                            <View style={PAStyle.cardDiv}>
                                {ButtonPercentage.map((item, index) => (
                                    <TouchableOpacity style={[{ width: 16, height: 16, backgroundColor: '#FFA629', borderRadius: 8, }, percentSelected == index && { width: 16, height: 16, borderRadius: 8, backgroundColor: '#FFF6E0', alignItems: 'center', justifyContent: 'center' }]} key={item+index} activeOpacity={0.6}
                                     onPress={() => { setpercentSelected(index) }}
                                     >
                                        <View style={{ backgroundColor: '#FFA629', borderRadius: 6, width: 12, height: 12 }} key={index} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={PAStyle.boxStyle}>
                                <View>
                                    <Text style={PAStyle.fontStyle}>25%</Text>
                                </View>
                                <View>
                                    <Text style={PAStyle.fontStyle}>50%</Text>
                                </View>
                                <View>
                                    <Text style={PAStyle.fontStyle}>75%</Text>
                                </View>
                                <View>
                                    <Text style={PAStyle.fontStyle}>100%</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 16 }}>
                            <Text style={{ fontSize: 14,  color: '#FFF6E0' }}>1 BTC : <Text style={{ fontSize: 14,  color: '#FFA629' }}>37,4567.00</Text></Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <BtcInput txt={'ETH'} />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <TouchableOpacity>
                                <ReuseButton text={'Swap'} color={'#473200'} backgroundColor={'#FFB916'} width={'97%'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>


                    <View style={{ marginVertical: 30 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#FFF6E0' }}>Top Gainer</Text>
                     </View>
                    <TopGainerCard DataTransfer={DataTransfer} img={DataTransfer.img} />

                    <View style={{ marginVertical: 30 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#FFF6E0' }}>Top Loser</Text>
                    </View>
                    <TopGainerCard DataTransfer={DataTransfer} img={DataTransfer.img} />

                    <View style={{
                    marginHorizontal: '4%', marginTop: 30, borderRadius: 6, borderColor: '#545454', borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, marginBottom: 10
                }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: '#FFF6E0', }}>Invite Friends & <Text style={{ fontSize: 16, color: '#FFB916', }}>Start Earning</Text></Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 14, color: '#878787', fontFamily: 'Nunito-Regular', marginTop: 2 }}>invite a frind to Proassetz and enjoy a lifetime of{'\n'}earnings from their activity. Copy <Text style={{ fontSize: 14, fontWeight: '800', color: '#FFFFFF', fontFamily: 'Nunito-Bold', marginTop: 2 }}>reff code</Text> from{'\n'}below or share directly.<View></View> </Text>
                        <View style={{ marginTop: 24 }}>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#424141', height: 40, width: '80%', marginBottom: 10, paddingHorizontal: 14, borderRadius: 2, justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '60%', height: 40, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Nunito-Bold', color: '#FFF6E0' }}>7HFJHIO</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', width: 36, }}>
                            <TouchableOpacity activeOpacity={0.6} style={{ alignSelf: 'center' }} onPress={() => { copyToClipboard() }}>
                                <AntDesign name='copy1' size={20} color={'#878787'} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={{ alignSelf: 'center', marginLeft: 8 }} onPress={() => { onShare() }}>
                                <AntDesign name='sharealt' size={20} color={'#878787'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 30 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#FFF6E0' }}>Recent Insights</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <RecentInsights />
                </View>

                </ScrollView> 
       
        </View>
    )
}

