import { ScrollView, Text, View, KeyboardAvoidingView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors } from '../../constants/colors';
import { Formik } from 'formik';
import * as yup from 'yup'
import { TextInput ,Button,} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { values } from 'lodash';
import { PAStyle } from '../../shared/ProAssetzCSS/ProAssetzcss';
import StyledText from '../../shared/StyleText';
import { SafeAreaView } from 'react-native-safe-area-context';

const FillBankDetail = () => {

  const formSchema =yup.object({
    bank_name: yup.string().matches(/^[a-zA-Z]{2,40}/, 'Enter name in words')
    .required('Bank name is required'),
    ifsc_code:yup.string().required('IFSC code is reqiored').matches(/^(?=.*[A-Z])(?=.*[0-9])/,' IFSC code contain capital latter and Number'),
    bank_account_number:yup.string().required('Account number is required').matches(/^(?=.*[0-9])/,'Must be in Number'),
    confirm_bank:yup.string().required('Confirm your Account').oneOf([yup.ref('bank_account_number'), null], 'Account no must match').matches(/^(?=.*[0-9])/,'Must be in Number'),
    mobile_number:yup.string().matches(/(99)(\d){8}\b/, 'Number Required From 99').required('Mobile number required'),
    upi_address:yup.string().required('UPI address required'),
    account_type:yup.string().required('Enter account type'),
  })  
  const navigation=useNavigation();
  return (
    <KeyboardAvoidingView style={[PAStyle.container,PAStyle.width,PAStyle.backGround]}>
        <ScrollView>
            <Text style={PAStyle.heading}>Complete your Bank Details</Text>
            <Formik
                initialValues={{
                
                    ifsc_code: '',
                    bank_name: '',
                    bank_account_number: '',
                    confirm_bank: '',
                    mobile_number: '',
                    branch_name: '',
                    upi_address: '',
                    account_type: '',

                }}
                enableReinitialize={true}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    
                console.log('bank form', values);
                 navigation.navigate('BankDetailsConfirmScreen', { values });
                }}>
                {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
                setValues,
                setFieldValue,
                isValid
                }) => (
                        <View style={[PAStyle.container,PAStyle.backGround]}>
                                <BankDetailsForm
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                />
                                <Button
                                    disabled={!isValid}
                                    style={{
                                        backgroundColor:colors.yellowLg,
                                        width:'50%',
                                        color:colors.white,
                                        borderRadius:10,
                                        // paddingHorizontal:10,
                                        // marginTop:60,
                                        marginLeft:'auto',
                                        marginRight:'auto',
                                        textColor:colors.white
                                    }}
                                    contentStyle={{ paddingVertical: 4,textColor:colors.white}}
                                    textColor={colors.white}
                                    onPress={handleSubmit}
                                    mode="contained"
                                    title='Next'
                                >Next</Button>
                            
                            
                            
                        </View>
                )}
            </Formik>
        </ScrollView>
        
    </KeyboardAvoidingView>
  )
}

const BankDetailsForm=({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              touched,
              errors, 
            })=>{
                return (
                            <View 
                                style={{...PAStyle.width,marginTop: 10 }}
                                contentContainerStyle={{justifyContent:'space-evenly'}}>
                                        <View style={PAStyle.inputWrapper}>
                                                    <View style={PAStyle.rowCon}>
                                                    <View
                                                        style={{
                                                        width: '45%',
                                                        marginLeft:10,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        }}>
                                                        <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                            mode="flat"
                                                            underlineColor="#424040"
                                                            activeUnderlineColor="#424040"
                                                            style={{...PAStyle.input,paddingLeft:10}}
                                                            color="#fff !important"
                                                            onChangeText={handleChange('ifsc_code')}
                                                            value={values.ifsc_code}
                                                            onBlur={handleBlur('ifsc_code')}
                                                            label={<StyledText labelText="IFSC Code" />}
                                                            // placeholder={"IFSC Code"}
                                                            // placeholderTextColor={colors.darkgreytxt}
                                                            // theme={{ colors: { text: '#fff' } }}
                                                        />
                                                        <Text style={{ color: 'crimson' }}>{touched.ifsc_code && errors.ifsc_code}</Text>
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={{
                                                        width: '45%',
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-start',
                                                        marginRight:10
                                                        }}>
                                                        <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                            mode="flat"
                                                            underlineColor="#424040"
                                                            activeUnderlineColor="#424040"
                                                            style={{...PAStyle.input,paddingLeft:10,color:'white'}}
                                                            color="#fff !important"
                                                            onChangeText={handleChange('bank_name')}
                                                            onBlur={handleBlur('bank_name')}
                                                            label={<StyledText labelText="Bank Name" />}
                                                            value={values.bank_name}
                                                            // placeholder={"Bank Name"}
                                                            // placeholderTextColor={colors.darkgreytxt}
                                                            // theme={{ colors: { text: '#fff' } }}
                                                        />
                                                        <Text style={{ color: 'crimson' }}>{touched.bank_name && errors.bank_name}</Text>
                                                        </View>
                                                    </View>
                                                    </View>
                                                    <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                            mode="flat"
                                                            underlineColor="#424040"
                                                            activeUnderlineColor="#424040"
                                                            style={{...PAStyle.input,paddingLeft:10}}
                                                            color="#fff !important"
                                                            // placeholderTextColor={colors.darkgreytxt}
                                                            onChangeText={handleChange('bank_account_number')}
                                                            label={<StyledText labelText="Bank Account No" />}
                                                            value={values.bank_account_number}
                                                            onBlur={handleBlur('bank_account_number')}
                                                            // placeholder={"Bank Account No"}
                                                            // theme={{ colors: { text: '#fff' } }}
                                                        />
                                                    </View>
                                                    <Text style={{ color: 'crimson' }}>
                                                        {touched.bank_account_number && errors.bank_account_number}
                                                    </Text>
                                                    <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                        mode="flat"
                                                        underlineColor="#424040"
                                                        activeUnderlineColor="#424040"
                                                        style={{...PAStyle.input,paddingLeft:10}}
                                                        color="#fff !important"
                                                        // placeholderTextColor={colors.darkgreytxt}
                                                        value={values.confirm_bank}
                                                        onChangeText={handleChange('confirm_bank')}
                                                        label={<StyledText labelText="Confirm Bank Account No" />}
                                                        onBlur={handleBlur('confirm_bank')}
                                                        // placeholder={"Confirm Bank Account No"}
                                                        // theme={{ colors: { text: '#fff' } }}
                                                        />
                                                    </View>
                                                    <Text style={{ color: 'crimson' }}>{touched.confirm_bank && errors.confirm_bank}</Text>
                                                    <View style={PAStyle.rowCon}>
                                                        <View
                                                        style={{
                                                            width: '45%',
                                                            flexDirection: 'row',
                                                            marginLeft:10,
                                                            justifyContent: 'flex-start',
                                                        }}>
                                                        <View style={PAStyle.inputWrapper}>
                                                            <TextInput
                                                            mode="flat"
                                                            underlineColor="#424040"
                                                            activeUnderlineColor="#424040"
                                                            style={{...PAStyle.input,paddingLeft:10}}
                                                            color="#fff !important"
                                                            // placeholderTextColor={colors.darkgreytxt}
                                                            onChangeText={handleChange('branch_name')}
                                                            value={values.branch_name}
                                                            label={<StyledText labelText="Branch Name" />}
                                                            onBlur={handleBlur('branch_name')}
                                                            // placeholder={"Branch Name"}
                                                            // theme={{ colors: { text: '#fff' } }}
                                                            />
                                                            <Text style={{ color: 'crimson' }}>{touched.branch_name && errors.branch_name}</Text>
                                                        </View>
                                                        </View>
                                                        <View
                                                        style={{
                                                            width: '45%',
                                                            flexDirection: 'column',
                                                            marginRight:10,
                                                            justifyContent: 'flex-end',
                                                        }}>
                                                        <View style={PAStyle.inputWrapper}>
                                                            <TextInput
                                                            mode="flat"
                                                            underlineColor="#424040"
                                                            activeUnderlineColor="#424040"
                                                            style={{...PAStyle.input,paddingLeft:10}}
                                                            color="#fff !important"
                                                            // placeholderTextColor={colors.darkgreytxt}
                                                            onChangeText={handleChange('account_type')}
                                                            onBlur={handleBlur('account_type')}
                                                            // placeholder={"Account Type"}
                                                            label={<StyledText labelText="Account Type" />}
                                                            value={values.account_type}
                                                            // theme={{colors:{text: '#fff'}}}
                                                            />
                                                            <Text style={{ color: 'crimson' }}>{touched.account_type && errors.account_type}</Text>
                                                        </View>
                                                        </View>
                                                    </View>
                                                    <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                        mode="flat"
                                                        underlineColor="#424040"
                                                        activeUnderlineColor="#424040"
                                                        style={{...PAStyle.input,paddingLeft:10}}
                                                        color="#fff !important"
                                                        // placeholderTextColor={colors.darkgreytxt}
                                                        onChangeText={handleChange('mobile_number')}
                                                        onBlur={handleBlur('mobile_number')}
                                                        label={<StyledText labelText="Mobile Number" />}
                                                        value={values.mobile_number}
                                                        // placeholder={"Mobile No"}
                                                        // theme={{ colors: { text: '#fff' } }}
                                                        />
                                                    </View>
                                                    <Text style={{ color: 'crimson' }}>{touched.mobile_number && errors.mobile_number}</Text>
                                                    <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                        mode="flat"
                                                        underlineColor="#424040"
                                                        activeUnderlineColor="#424040"
                                                        style={{...PAStyle.input,paddingLeft:10}}
                                                        color="#fff !important"
                                                        // placeholderTextColor={colors.darkgreytxt}
                                                        onChangeText={handleChange('bank_name')}
                                                        onBlur={handleBlur('bank_name')}
                                                        label={<StyledText labelText="Name as on Bank Account" />}
                                                        value={values.bank_name}
                                                        // placeholder={"Name as on Bank Account"}
                                                        // theme={{ colors: { text: '#fff' } }}
                                                        />
                                                    </View>
                                                    <Text style={{ color: 'crimson' }}>{touched.bank_name && errors.bank_name}</Text>
                                                    <View style={PAStyle.inputWrapper}>
                                                        <TextInput
                                                        mode="flat"
                                                        underlineColor="#424040"
                                                        activeUnderlineColor="#424040"
                                                        style={{...PAStyle.input,paddingLeft:10}}
                                                        color="#fff !important"
                                                        // placeholderTextColor={colors.darkgreytxt}
                                                        onChangeText={handleChange('upi_address')}
                                                        value={values.upi_address}
                                                        label={<StyledText labelText="UPI Address with Bank" />}
                                                        onBlur={handleBlur('upi_address')}
                                                        // placeholder={"UPI Address with Bank"}
                                                        // theme={{colors: { text: '#fff' }}}
                                                        />
                                                    </View>
                                                    <Text style={{ color: 'crimson' }}>{touched.upi_address && errors.upi_address}</Text>
                                        </View>   
                            </View>
                    
                )
            }

export default FillBankDetail

