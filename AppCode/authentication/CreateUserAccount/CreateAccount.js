import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import React ,{useState}from 'react'
import { Image, View, Text,ScrollView, KeyboardAvoidingView, TouchableOpacity, Dimensions,} from 'react-native'
import { colors } from '../../constants/colors';
import { Button,TextInput } from 'react-native-paper';
import { Pressable } from 'react-native';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import StyledText from '../../shared/StyleText';
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const formSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string('Last name is required').required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});
export const CreateAccountScreen=()=> {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const handleCreateAccount = (formData) => {
     navigation.navigate('DeclerationScreen', { formData });
  };
  const width = Dimensions.get('window').width;
  return (
    <View style={[PAStyle.outerContainer,PAStyle.backGround,]}>
        <View style={{...PAStyle.backGround,display:'flex',width:width,flexDirection: 'row',marginTop:19}}>
          <Pressable onPress={()=> navigation.navigate('LoginScreen')}>
            <Image
                  style={PAStyle.EmaillogoWidth}
                  source={require('../../../assets/backButton.png')}
            />
          </Pressable>
          <Text style={{...PAStyle.AccountText,marginLeft:25}}>Create an Account</Text>
        </View>
        <Formik
          initialValues={{
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            confirm_password: '',
            refferal_code: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {

            handleCreateAccount(values);
          }}
        >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue }) => (
          <KeyboardAvoidingView style={{...PAStyle.createinnerContainer}}
          >
            <ScrollView style={{paddingTop:20,flexGrow:0}}>
              <View
                    style={
                      touched.first_name && errors.first_name
                        ? { ...PAStyle.errorWrapper }
                        : { ...PAStyle.inputWrapper }
                    }>
                      <TextInput
                          mode="flat"
                          underlineColor="transparent"
                          activeUnderlineColor="transparent"
                          style={PAStyle.input}
                          textColor="white"
                          value={values.first_name}
                          onChangeText={handleChange('first_name')}
                          onBlur={handleBlur('first_name')}
                          label={<StyledText labelText="First Name" />}
                          placeholder={'  First Name'}
                          theme={{ colors: { text: '#fff' } }}
                      />
              </View>
              <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5 }}>{touched.first_name && errors.first_name}</Text>
              <View
                  style={
                    touched.last_name && errors.last_name
                      ? { ...PAStyle.errorWrapper }
                      : { ...PAStyle.inputWrapper }
                  }>
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    textColor="white"
                    value={values.last_name}
                    label={<StyledText labelText="Last Name" />}
                    placeholder={"  Last Name"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5}}>{touched.last_name && errors.last_name}</Text>
                <View
                  style={
                    touched.email && errors.email
                      ? { ...PAStyle.errorWrapper }
                      : { ...PAStyle.inputWrapper }
                  }>
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    textColor="white"
                    value={values.email}
                    onChangeText={(val) => setFieldValue('email', val.trim())}
                    onBlur={handleBlur('email')}
                    placeholder={"  Email ID"}
                    label={<StyledText labelText="Email ID" />}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5}}>{touched.email && errors.email}</Text>
                <View
                  style={
                    touched.password && errors.password
                      ? { ...PAStyle.errorWrapper }
                      : { ...PAStyle.inputWrapper }
                  }>
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    textColor="white"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={passwordVisible}
                    label={<StyledText labelText="Password" />}
                    icon={
                      <TouchableOpacity onPress={()=>{
                        setPasswordVisible(!passwordVisible)
                      }}>
                        <Text>{passwordVisible ? 'Show' :"Hide"}</Text>
                      </TouchableOpacity>
                    }
                    iconPosition='Right'
                    placeholder={"Password"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5  }}>{touched.password && errors.password}</Text>
                <View
                  style={
                    touched.confirm_password && errors.confirm_password
                      ? { ...PAStyle.errorWrapper,}
                      : { ...PAStyle.inputWrapper,}
                  }>
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    textColor="white"
                    value={values.password}
                    onChangeText={handleChange('confirm_password')}
                    onBlur={handleBlur('confirm_password')}
                    label={<StyledText labelText="Confirm Password" />}
                    secureTextEntry={passwordVisible}
                    icon={
                      <TouchableOpacity onPress={()=>{
                        setPasswordVisible(!passwordVisible)
                      }}>
                        <Text>{passwordVisible ? 'Show' :"Hide"}</Text>
                      </TouchableOpacity>
                    }
                    placeholder={"  Confirm Password"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
                <Text style={{ color: '#DC3030',paddingLeft:20,paddingTop:5 }}>
                  {touched.confirm_password && errors.confirm_password}
                </Text>
                <View style={[PAStyle.inputWrapper, PAStyle.mb2]}>
                  <TextInput
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    style={PAStyle.input}
                    textColor="white"
                    value={values.refferal_code}
                    onChangeText={handleChange('referral_code')}
                    label={<StyledText labelText="Refferal Code" />}
                    onBlur={handleBlur('referral_code')}
                    placeholder={"  Refferal Code"}
                    theme={{ colors: { text: '#fff' } }}
                  />
                </View>
            </ScrollView>
            <KeyboardAvoidingView  keyboardVerticalOffset={-500}>
            
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',paddingLeft:10, }}>
                  <View >
                  <BouncyCheckbox
                          size={16}
                          fillColor={colors.darkOrange}
                          unfillColor="#FFFFFF"
                          iconStyle={{ borderColor: colors.yellowDark,borderRadius:2,marginTop:10,marginLeft:10 }}
                          innerIconStyle={{ borderWidth: 0 }}
                          onPress={() => {
                            setChecked(!checked);
                            setDisabled(!disabled)
                          }}
                          />
                  
                   </View>
                   <View> 
                      <Text
                        style={{
                          color: '#fff',
                          marginLeft: 4,
                          fontSize: 16,
                        }}>
                        I agree to Proassetz’s{' '}
                        <Text
                          style={{
                            color: `${colors.yellowDark}`,
                            fontSize: 16,
                          }}>
                          Terms of Use
                        </Text>
                      </Text>
                  </View>
                </View>
               <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Button
                    disabled={disabled}
                    dark={false}
                    style={disabled ? PAStyle.CreatedisabledButton : PAStyle.Createbutton}
                    onPress={handleSubmit}
                    compact={false}
                    contentStyle={{
                      alignSelf: 'stretch',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: 0,
                      margin: 0,
                    }}
                    mode="contained">
                    <Text
                      style={
                        disabled
                          ? {
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'lightgray',
                            textTransform: 'capitalize',
                          }
                          : {
                            fontSize: 20,
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#473200',
                          }
                      }>
                      Create Account
                    </Text>
                  </Button>
                </View> 
            </KeyboardAvoidingView>
          </KeyboardAvoidingView>
        )}


        </Formik>
    </View>
  )
}



 

