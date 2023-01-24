/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ImageBackground,
  
  Dimensions,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../constants/colors'; 
import { useNavigation } from '@react-navigation/native';
import { Button, Snackbar } from 'react-native-paper';
import { Linking, Platform } from 'react-native';
 import QRCode from 'qrcode';
import { SvgXml, SvgUri } from 'react-native-svg';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
//import QRCode from 'react-native-qrcode-svg';
// import Clipboard from '@react-native-community/react-native-clipboard';


    export const TwoFactorAuthQR = (props) => {

      const navigation = useNavigation();

      const generateQRCode = async (secret) => {
        return await QRCode.toDataURL(secret, 'image/png');
      };
      // React.useEffect(() => {
      //   generateQRCode(googleAuthUrlTest)
      //     .then((res) => {
      //         setQrImageUri(res);
      //     })
      //     .catch((error) => {
      //       alert(error);
      //     });
      //   QRCode.toDataURL(googleAuthUrlTest, { type: 'data' }, (err, url) => {
      //     setQrImageUri(url);
      //       let a = url.toString()
      //     alert(err)
      //   });
      //   QRCode.toString('test', function (err, url) {
      //     setQrImageUri(url);
      //       let a = url.toString()
      //       alert(url);
      //   });
      // }, []);
      // const { raw_secret_key,secret_key, email, password } = props.route.params.qrPageData;
      let  raw_secret_key = 'asddasds',
          secret_key = 'JX7YQQNKU4F77YY7',
          email = '9kumarmukesh9@gmail.com',
          password = '9hsekum9@M';
      const formData = { email, password, raw_secret_key };
      // const androidUrl =
      //   'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2';
        //const googleAuthUrl = `otpauth://totp/PROASSETZ:${email}?secret=${secret}&issuer=PROASSETZ`;

        const googleAuthUrl = secret_key;
        // const googleAuthUrlTest =
        //  'otpauth://totp/PROASSETZ-ranomander712%40gmail.com?secret=JX7YQQNKU4F77YY7';
          //  function openGoogleAuth() {
          //    Linking.openURL(googleAuthUrl).catch(async () => {
          //      if (Platform.OS === 'android') {
          //        const supported = await Linking.canOpenURL(iosUrl);
          //        supported && (await Linking.openURL(iosUrl));
          //      } else if (Platform.OS === 'android') {
          //        const supported = await Linking.canOpenURL(androidUrl);
          //        supported && (await Linking.openURL(androidUrl));
          //      }
          //    });
          //  }
      const [qrImageUri, setQrImageUri] = React.useState('');
      
      const [snackMssg, setSnackMssg] = React.useState('');

      const [visibleS, setVisibleS] = React.useState(false);

      return (
        <View style={styles.container}>
          <View>
            <Text
              style={{
                color: colors.yellowDark,
                textAlign: 'center',
                fontSize: 20,
                lineHeight: 30,
              }}>
              <Text style={{ color: '#fff' }}>Enable</Text>
              {'\n'}2 Factor Authentication
              {/* {'\n'}2 Factor Authentication OTP */}
            </Text>
          </View>
          <Snackbar
            wrapperStyle={{ elevation: 3, zIndex: 3 }}
            style={{ elevation: 3, zIndex: 3 }}
            visible={visibleS}
            // onDismiss={onDismissSnackBar}
            action={{
              label: 'Close',
              onPress: () => {
                // Do something
              },
            }}>
            {/* {snackMssg} */}
          </Snackbar>
          <Text style={{ color: '#6E6E6E', textAlign: 'center', marginTop: 50, marginBottom: 30 }}>
            Download & Install an authenticator app{' '}
          </Text>
          <Image source={require('../../../assets/gplay.png')} style={{width:'40%',height:50}} />

          <View style={styles.innerContainer}>
            <Text style={{ color: '#6E6E6E', textAlign: 'center', marginTop: 50, marginBottom: 30 }}>
              Tap QR Code
            </Text>
            <ImageBackground
              style={{ padding: 15 }}
              source={require('../../../assets/qrShadow.png')}
              resizeMode="contain">
              {googleAuthUrl !== '' ? (
                <TouchableOpacity 
                // onPress={openGoogleAuth} 
                style={{ alignItems: 'center', margin: 6 }}>
                  {/* <QRCode size={150} value={googleAuthUrl} /> */}
                </TouchableOpacity>
              ) : (
                <Text style={{ color: '#fff' }}>cant make a d qr</Text>
              ) }
            </ImageBackground>

            <ImageBackground
              style={{ height: 50, justifyContent: 'center', alignItems: 'center', marginVertical: 8 }}
              source={require('../../../assets/copyshadow.png')}
              resizeMode="stretch">
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60,
                  width: '95%',
                  padding: 10,
                  position: 'relative',
                }}>
                <View>
                  <Text selectable={true} style={{ color: '#fff', textAlign: 'center' }}>
                    {raw_secret_key}
                  </Text>
                </View>
                
              </View>
            </ImageBackground>
          </View>


          <Button
            disabled={false}
            dark={false}
            style={styles.button}
            onPress={async() => {await AsyncStorage.setItem('raw_secret_key', raw_secret_key);
            navigation.navigate('TwoFactorOTPScreen', { formData });
            }}
            compact={false}
            contentStyle={{
              alignSelf: 'stretch',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              
            }}
            mode="contained" >
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Continue
            </Text>
        </Button>
        </View>
      );
     
    };

    const styles = StyleSheet.create({
      container: {
        backgroundColor: colors.bgColor,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
      },
      innerContainer: {
        // padding: 40,
        flex: 2,
        justifyContent: 'flex-start',
        backgroundColor: colors.bgColor,
      },
      indicatorContainer: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      logo: {
        marginHorizontal: 40,
        marginVertical: 50,
        width: 200,
      },
      rupee: {},
      boldHeading: {
        fontSize: 55,
        color: colors.yellowDark,
      },
      regularHeading: {
        fontSize: 32,
        color: 'white',
      },
      regularHeading2: {
        fontSize: 32,
        color: 'white',
      },
      regularHeading3: {
        fontSize: 16,
        color: 'white',
      },
      button: {
        width: '70%',
        alignSelf: 'stretch',
        backgroundColor: `${colors.yellowLg}`,
        padding: 0,
        height: 36,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 40,
        borderRadius: 10,
      },
    });


