import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable,} from 'react-native';
import { Text, View, StyleSheet  } from 'react-native';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import { colors } from '../../constants/colors';

export function KYCWelcome() {
  const navigation =useNavigation();
  return (
    <View
     style={[PAStyle.outerContainer,PAStyle.width]}>
      <View style={PAStyle.innerContainer}>
        
        <View style={{paddingLeft:25}}>
          <Text style={{...PAStyle.KYCText2,color:colors.white}}>
            Complete Your{'\n'}
           
            <Text style={PAStyle.KYCHeading}>KYC</Text>
          </Text>
          <View style={{ position:'relative',top:30 }}>
            <Text style={{...PAStyle.kYXText,color:colors.white}}>You are few steps away{'\n'}from trading...</Text>
          </View>
        </View>
        <Pressable style={PAStyle.KYCButton} 
            onPress={() => navigation.navigate('KYCWizardScreen')}
          >
          <Text
            style={[PAStyle.MyButton,PAStyle.textAlign]}>
            Complete KYC
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
