import { View, Text, } from 'react-native'
import React, { useState } from 'react'
import DropDown from '../TradeScreen/DropDownPicker'
import TradeCard from '../TradeScreen/TradeCard'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss'
import ButtonPageNavBar from '../TradeScreen/ButtonPageNavBar'
import { colors } from '../../constants/colors'
import { Pressable,Image } from 'react-native'
import { ScrollView } from 'react-native'
import { LineChart } from "react-native-gifted-charts";
import { priceData } from './priceData'
import { volumeData } from './volumeData'
const ChartPage = () => {
    
    const lineData = [{value: 0},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}]
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(1);
    const [items, setItems] = useState([
        { label: "BTC / INR", value: 1 }, { label: "BTC / USDT", value: 2 },
        { label: "BTC / ETH", value: 3 }]);
    return (
        <View style={[PAStyle.outerContainer,PAStyle.width,PAStyle.positionRelative]}>
      <View style={{flexDirection: 'row',marginTop:19,zIndex:2000}}>
        <Pressable
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
                                    <TradeCard 
                                             change_amount={0} 
                                             ltp_in_usd={0}  
                                             high24hr={0}  
                                             low24hr={0}  
                                             total24hrVolume={0}  
                                             Change24hr={0}  
                                    />                                
                </View>
               
                

      </ScrollView>
           <LineChart
                initialSpacing={0}
                data={volumeData}
                color={colors.darkOrange}
                colorNegative="red"
                startFillColor={colors.darkOrange}
                startFillColorNegative="red"
                spacing={15}
                areaChart
                startOpacity={0.8}
                thickness={2}
                // hideRules
                dataPointsColor={'green'}
               
                yAxisColor={colors.darkOrange}
                // showVerticalLines
                // yAxisOffset={1000}
                verticalLinesColor={colors.darkOrange}
                xAxisColor={colors.darkOrange}
            />
      <ButtonPageNavBar index={1}/>
    </View>
    )
}



export default ChartPage