import React from 'react';
import { View, Text,  Pressable, Image } from 'react-native';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';

const TwoFactorAuth = (props) => {
  const navigation = useNavigation();
  const goToQrPage = () => {
    const { email, password } = props?.route?.params?.qrData;
    const qrPageData = {
      ...props?.route?.params?.qrData.data,
      email,
      password,      
    };
    // console.log(props?.route?.params, 'spalsh');
    // console.log(qrPageData, 'qrPageData');
    // navigation.navigate('TwoFactorAuthQRScreen', { qrPageData });
  };
  return (
    <View style={[PAStyle.outerContainer,PAStyle.width]}>
      <View style={PAStyle.innerContainer}>
        <Text style={PAStyle.regularHeading}>
          Setup {'\n'}
          <Text style={PAStyle.regularHeading2} />
          <Text style={PAStyle.boldHeading}>
            2 Factor{'\n'}
            Authentication{'\n'}
          </Text>
          <Text style={PAStyle.regularHeading3}>{'\n'}For a secured login setup...</Text>
        </Text>
      </View>

      <Button
        disabled={false}
        style={PAStyle.EnableFactorButton}
        onPress={goToQrPage}
        compact={false}
        contentStyle={{
          
          justifyContent: 'center',
        }}
        mode="contained">
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            textTransform: 'capitalize',
            color: colors.white,
          }}>
          Enable 2 factor
        </Text>
      </Button>
    </View>
  );
};


export default TwoFactorAuth;