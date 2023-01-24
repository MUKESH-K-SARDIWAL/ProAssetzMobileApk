import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
const width = Dimensions.get('window').width;
export const PAStyle= StyleSheet.create({
  width:{
    width:width
  },
    backGround:{
        backgroundColor:colors.bgColor,
      },
      logoWidth:{
        width: 200,
        height: 200,
        marginTop:'-10%'
      },
      flex:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
      },
      VisibleImg:{
        bottom:'2%',
        textTransform: 'capitalize',
        color: colors.darkgreytxt
      },
      textAlign:{
        textAlign:'center'
      },
      positionAbsolute:{
        position:'absolute'
      },
      positionRelative:{
        position:'relative'
      },
        dots:{
          width:15,
          height:15,
          borderRadius:50,
          marginBottom:20,
          marginLeft:0,
          // display:'flex'
        },
        login:{
          color:colors.darkOrange,
          fontSize: 16,
        },
        AlAct:{
          color: colors.white,
          fontSize: 20,
        },
        getStarted:{
          fontSize: 20,
          color:colors.white
        },
        innerContainer: {
          paddingVertical: 0,
          paddingHorizontal:20,
          flex: 1,
          justifyContent: 'space-evenly',
        },
        heading:{
          marginTop:10,
          textAlign:'center',    
          fontWeight:'bold',
          fontSize: 20,
          lineHeight:24,
          color: '#FFF6E0',
        },
        boldHeading: {
          fontSize: 43,
          color: colors.darkOrange,
        },
        logo: {
          marginLeft: -40,
          marginVertical: 30,
          width: 240,
          height: 38,
        },
        
        regularHeading: {
          fontSize: 32,
          color:colors.white,
        },
        regularHeading2: {
          fontSize: 32,
          color:colors.white,
        },
        regularHeading3: {
          fontSize: 20,
          color:colors.white,
        },
        Submitbutton:{
          backgroundColor:colors.yellowLg,
          width:'70%',
          borderRadius:10,
          paddingHorizontal:0,
          paddingVertical:10,
          marginLeft:0

        },
        alreadyAcct:{
          fontSize:25,
          color:colors.white
        },
        button:{
          backgroundColor:colors.yellowLg,
          width:'60%',
          borderRadius:10,
          paddingHorizontal:10,
          marginTop:60,
          marginLeft:'auto',
          marginRight:'auto',

        },
        EnableFactorButton:{
          backgroundColor:colors.yellowLg,
          width:'60%',
          marginBottom:40,
          borderRadius:10,
          paddingHorizontal:10,
          marginLeft:'auto',
          marginRight:'auto',

        },
        Continuebutton:{
          backgroundColor:colors.yellowLg,
          width:'60%',
          color:colors.white,
          borderRadius:10,
          marginLeft: 'auto',
          marginRight:'auto',
          bottom:'5%',
          left:'20%'

        },
      outerContainer:{
          flex:1,
          flexDirection:'column',
          backgroundColor:colors.bgColor,
      },
      loginBtnStyle:{
          color: colors.white,
          fontSize: 20,
      },
      textStyle:{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
      },
      buttomStyle:{
          borderRadius: 5,
          backgroundColor:colors.grayMed,
          marginLeft:10,
          width: 30,
          height:30,
          marginTop: 3,
          justifyContent: 'center',
          alignItems: 'center',
      },
      lableStyle:{
          fontSize: 35,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
      },
      regularH: {
          textAlign: 'left',
          width: '100%',
          marginLeft: 33,
        },
      innerView1:{
         height:'35%',
         width:'100%',
         marginHorizontal:'auto'
      },
      innerView2:{
          marginBottom:40,
          height:'35%',
          width:'100%'
      },
      innerView3:{
        marginTop:10,
          height:'29%',
          width:'100%'
      },
      loginLogoWidth:{
          width: '65%',
          marginLeft:50,
          marginTop:20,
        },
        rowcon: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingLeft: 20,
          paddingRight:14
        },
        input: {
          backgroundColor: '#424040',
          color: '#fff',
          borderRadius: 5,
          height: 50,
          marginHorizontal: 10,
        },
        input2: {
          backgroundColor: '#424040',
          color: '#fff',
          borderRadius: 5,
          height: 50,
          width: '100%',
        },
        inputWrapper: {
          backgroundColor: 'transparent',
          marginTop: 6,
          padding: 3,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '90%',
        },
        inputWrapper2: {
          backgroundColor: 'transparent',
          padding: 3,
          paddingLeft: 0,
          width: '75%',
          position: 'relative',
          left: 2,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
  resendDisabledButton: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor:colors.bgColor,
    color:colors.darkgrey
  },
  resendButton: {
    width: '50%',
    backgroundColor:colors.bgColor,
    color:colors.yellowLg,
    alignSelf: 'stretch',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 10,
  },
  EmaillogoWidth:{
    width:23,
    height:23,
    marginTop:6,
    marginHorizontal:10
  },
  VerifyButton: {
    width: 150,
    backgroundColor: `${colors.yellowLg}`,
    paddingVertical: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 25,
    borderRadius: 10,
  },
  otpStyle:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  emailStyle:{
    fontSize: 18,
    textAlign:'center',
    lineHeight: 20,
    color: '#FFF6E0',
  },
  codeFieldRoot: { marginVertical: 20,marginHorizontal:20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 35,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    borderWidth: 0,
    color: 'white',
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#3B3B3B',
    textAlign: 'center',
    margin: 5,
  },
  focusCell: {
    borderColor: '#000',
  },
  AccountText:{
    fontSize: 25,
    paddingLeft:10,
    color: colors.white,
    marginLeft:0,
  },
  emailText:{
    width:'100%'
  },
  
  otptypetext:{
    width:'100%'
  },
  presseblebtn:{
    width:'100%'
  },
  CreatedisabledButton: {
    width: '70%',
    backgroundColor: 'white',
    padding: 0,
    height: 46,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 10,
    // alignSelf: 'stretch',
  },
  Createbutton: {
    width: '70%',
    // alignSelf: 'stretch',
    backgroundColor: `${colors.yellowDark}`,
    // height: 46,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 10,
  },
  VerifyContinuedisabledButton: {
    width: '60%',
    position:'absolute',
    backgroundColor: 'white',
    padding: 0,
    top:'80%',
    left:'20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 10,
    // alignSelf: 'stretch',
  },
  VerifyContinuebutton: {
    width: '60%',
    top:'80%',
    left:'20%',
    position:'absolute',
    // alignSelf: 'stretch',
    backgroundColor: `${colors.yellowDark}`,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 10,
  },
  AcceptdisabledButton: {
    width: '50%',
    backgroundColor: 'white',
    padding: 0,
    // height: 46,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom:'auto',
    borderRadius: 10,
    // alignSelf: 'stretch',
  },
  Acceptbutton: {
    width: '50%',
    // alignSelf: 'stretch',
    backgroundColor: `${colors.yellowDark}`,
    // height: 46,
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: 30,
    marginTop: 'auto',
    marginBottom:'auto',
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#424040',
    color: '#ffffff',
    borderRadius: 5,
    height: 50,
  },
  inputWrapper: {
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    marginTop: 10,
  },
  mb2: {
    marginBottom: 10,
  },
  errorWrapper: {
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    borderColor: '#DC3030',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,

  },

  createinnerContainer: {
    height: '90%',
    width: '100%',
    
  },

  MyButton:{
    fontSize: 20,
    color:colors.white

  },
  KYCHeading: {
    fontSize: 50,
    color: colors.yellowDark,
  },
  KYCText2: {
    fontSize: 32,
  },
  kYXText: {
    fontSize: 18,
  },
  KYCButton: {
    width: '70%',
    backgroundColor: `${colors.yellowLg}`,
    paddingVertical: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
   // marginVertical: 20,
    borderRadius: 10,
    marginTop: 150,
  },

  rowCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerContainer: {
    padding: 20,
  },
  sub: {
    color: colors.white,
    fontSize: 16,
    marginLeft:23
  },
  caption: {
    color: '#6E6E6E',
    fontSize: 13,
    marginLeft:23
  },
  stepCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepLine: {
    height: 4,
    width: '110%',
    backgroundColor: '#424141',
    position: 'absolute',
    top: '17%',
    left: '60%',
  },
  stepLineActive: {
    height: 4,
    width: '110%',
    backgroundColor: '#E29224',
    position: 'absolute',
    top: '17%',
    left: '60%',
  },
  stepLine2: {
    height: 4,
    width: '150%',
    backgroundColor: '#424141',
    position: 'absolute',
    top: '17%',
    left: '60%',
  },
  stepLine2Active: {
    height: 4,
    width: '150%',
    backgroundColor: '#E29224',
    position: 'absolute',
    top: '17%',
    left: '60%',
  },
  stepWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  roundShape: {
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: '#424141',
    marginBottom: 8,
  },
  roundShapeActive: {
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: '#E29224',
    marginBottom: 8,
  },
  stepText: {
    textAlign: 'center',
    color: '#424141',
  },
  stepTextActive: {
    textAlign: 'center',
    color: '#E29224',
  },
    FormdisabledButton: {
      width: '50%',
      backgroundColor:colors.white,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom:6,
      marginTop: 10,
      borderRadius: 10,
      alignSelf: 'stretch',
    },
    Formbutton: {
      width: '50%',
      alignSelf: 'stretch',
      backgroundColor: `${colors.yellowDark}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 97,
      marginBottom:27,
      borderRadius: 10,   
    },
    mb2: {
      marginBottom: 10,
    },
    swiperList:{ 
      marginTop: 30, height: 140, alignItems: 'center', justifyContent: 'center' 
  },
  child: {
     width, justifyContent: 'center' 
  },
  text: { 
      fontSize: width * 0.2, textAlign: 'center' 
  },
  container:{
      backgroundColor: '#212121', flex: 1, padding: 8
  },
  outerDiv:{
      flexDirection: 'row', alignItems: 'center' 
  },
  ProfileNameWord:{
   backgroundColor: colors.grayMed, height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center',marginBottom:2
  },
  NameText:{ 
     fontSize: 16, color: '#FFFFFF', 
  },
  welcomeword:{
      fontSize: 16,  color: '#FFF6E0', marginLeft: 10 
  },
  cardOuterDiv:{
      marginHorizontal: '4%', marginTop: 30, borderRadius: 6, borderColor: '#545454', borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10
  },
  outerCardDiv:{
       marginHorizontal: 8, marginTop: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
      ,
  cardDiv:{ 
      flexDirection: 'row', marginHorizontal: 8, alignItems: 'center', justifyContent: 'space-between', marginTop: 16, height: 1, backgroundColor: '#FFA629' }    ,
  fontStyle:{ 
      fontSize: 12,  color: '#878787' }
 ,boxStyle:{
   flexDirection: 'row', marginHorizontal: 8, alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }

})