import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors';
import { Card } from 'react-native-paper';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';

const TradeCard = ({ high24hr,
                     total24hrVolume,
                     ltp_in_usd,
                     low24hr,
                     Change24hr,
                     change_amount }) => 
                {

                return (
                    <View style={{...styles.Card,zIndex:-1}}>
                    <View>
                        <Text style={[styles.Headingtxt]}>
                        Current Price
                        </Text>
                        <Text style={styles.Bigtxt}>{change_amount}</Text>
                        <Text style={[styles.Headingtxt]}>
                        {/* =${ltp_in_usd} */}
                        </Text>
                    </View>
                    <View style={styles.MidLine} />
                    <View>
                        <View style={{ flexDirection: "row", marginVertical: 2, }} >
                        <View style={{ marginHorizontal: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                            <Text style={styles.Headingtxt}>24h High</Text>
                            <Text style={styles.whitetxt}>{high24hr}</Text>
                            </View>
                            <View style={{ marginLeft: 14 }}>
                            <Text style={styles.Headingtxt}>24h Vol(KLV)</Text>
                            <Text style={styles.whitetxt}>{total24hrVolume}</Text>
                            </View>
                        </View>
                        </View>
                        <View style={{ flexDirection: "row", marginVertical: 2 }}>
                        <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                            <Text style={styles.Headingtxt}>24h Low</Text>
                            <Text style={styles.whitetxt}>{low24hr}</Text>
                            </View>
                            <View style={{ marginLeft: 14 }}>
                            <Text style={styles.Headingtxt}>24h Change</Text>
                            <Text style={styles.whitetxt}>{Change24hr}</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                    </View>
                );
}

export default TradeCard

const styles = StyleSheet.create({
    Card: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: '#2C2B2B',
      borderWidth: .2,
      borderColor: '#2C2B2B',
      borderRadius: 10,
      width: "90%",
      alignSelf: "center",
      paddingVertical: 22,
      shadowColor: "#FFF6E0",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
  
      elevation: 2,
    },
    Headingtxt: {
      color: colors.darkgreytxt,
      fontSize: 12,
    },
    whitetxt: {
      color: colors.white,
      fontSize: 11,
    },
    Bigtxt: {
      color: colors.white,
      fontSize: 20,
    },
    MidLine: { borderWidth: 0.5, borderColor: "#3B3B3B", height: "86%" },
  });