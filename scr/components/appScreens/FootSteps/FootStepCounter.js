import React, { useState, useEffect } from 'react'
import CircularSlider from 'rn-circular-slider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import RNPickerSelect from 'react-native-picker-select';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


const FootStepCount = () =>{

  useEffect(() => {
    getSteps()
    geTotDate()
    getWeekRecord()
    getStepGoal()
    getStepLength()
  }, []);


    const [value, setValue] = useState(0)
    const [totalStep, setTotalStep] = useState(5000)
    const [stepLength, setStepLength] = useState(76)
    const [week, setWeek] = useState([0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00])
    const [tody, setToday] = useState(new Date().getDay())
    const [days, setDays] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    const [date, setDate] = useState(new Date().getDate())

    const update = () =>{
      var newVal = value+1;
      setValue(newVal)
      storeSteps(newVal)
      var km =(newVal*(stepLength/100000)).toFixed(3)
      week[tody]=km
      setWeekRecord()
      storeToDate()
    }

    const storeToDate = async () => {
      try {
        const jsonValue = JSON.stringify(date)
        await AsyncStorage.setItem('ToDate', jsonValue)
      } catch (e) {
        // saving error
      }
    }

    const geTotDate = async () => {
      try {
        const val = JSON.parse(await AsyncStorage.getItem('ToDate'))
        if(val!= date){
          setValue(0)
          storeSteps(0)
        }
      } catch (e) {
        // error reading value
      }
    }

    const setWeekRecord = async () => {
      try {
        const jsonValue = JSON.stringify(week)
        await AsyncStorage.setItem('weeklyRecord', jsonValue)
      } catch (e) {
        // saving error
      }
      // getWeekRecord()
    }

    const getWeekRecord = async () => {
      try {
        const val = JSON.parse(await AsyncStorage.getItem('weeklyRecord'))
        if(val!==null){
          setWeek(val)
        }
      } catch (e) {
        // error reading value
      }
    }

    const storeSteps = async (v) => {
      try {
        const jsonValue = JSON.stringify(v)
        await AsyncStorage.setItem('walkedSteps', jsonValue)
      } catch (e) {
        // saving error
      }
    }

    const getSteps = async () => {
      try {
        const val = JSON.parse(await AsyncStorage.getItem('walkedSteps'))
        if(val!=null){
          setValue(val)
        }
      } catch (e) {
        // error reading value
      }
    }

    const storeStepGoal = async (v) => {
      try {
        const jsonValue = JSON.stringify(v)
        await AsyncStorage.setItem('stepGoal', jsonValue)
      } catch (e) {
        // saving error
      }
      getStepGoal()
    }

    const getStepGoal = async () => {
      try {
        const val = JSON.parse(await AsyncStorage.getItem('stepGoal'))
        if(val!=null){
          setTotalStep(val)
        }
      } catch (e) {
        // error reading value
      }
    }

    const storeStepLength = async (v) => {
      try {
        const jsonValue = JSON.stringify(v)
        await AsyncStorage.setItem('stepLength', jsonValue)
      } catch (e) {
        // saving error
      }
      getStepLength()
    }

    const getStepLength = async () => {
      try {
        const val = JSON.parse(await AsyncStorage.getItem('stepLength'))
        if(val!==null){
          setStepLength(val)
        }
      } catch (e) {
        // error reading value
      }
    }
    
    const Slider = () => {
        return (
          <CircularSlider
            style={{marginTop:30}}
            // step={200}
            min={0}
            max={totalStep}
            value={value<=totalStep?value:totalStep}
            contentContainerStyle={styles.contentContainerStyle}
            strokeWidth={10}
            buttonStrokeWidth={10}
            openingRadian={Math.PI / 4}
            buttonRadius={0}
            linearGradient={[{ stop: '0%', color: '#3FE3EB' }, { stop: '100%', color: '#7E84ED' }]}
          >
            <Text style={styles.value}>{value}/{totalStep}</Text>
            <Text style={styles.txt}>Daily Target</Text>
          </CircularSlider>
        )
      }


      const Today = () =>{
          return(
            <TouchableOpacity onPress={()=>update()} style={styles.container}>
                <Text style={{...styles.heading, alignSelf:'center', marginVertical:5}}>Tap anywhere in Screen to add a Step</Text>
                <ScrollView>
                <Slider />
           
                <View style={styles.card}>
                    <Text style={styles.heading}>Today's Distance Covered:</Text>
                    <Text style={styles.text}>{(value*(stepLength/100000)).toFixed(3)} <Text style={{color:'gray', fontSize:14}}>Km</Text></Text>
                </View>


                <View style={{...styles.card, flexDirection:'column', alignItems:'flex-start'}}>
                    <Text style={{fontSize:16, marginBottom:10, fontWeight:'bold', color:'gray'}}>Last Week Record</Text>
                    
                     
                        <View style={styles.days}>
                          <Text style={{...styles.heading, marginTop:10}}>{tody!=0? days[tody-1]:days[week.length-1]}</Text>
                          <Text style={styles.innerTxt}>{tody!=0? week[tody-1]:week[week.length-1]} <Text style={{fontSize:12,color:'gray'}}>Km</Text></Text>
                        </View>

                        <View style={styles.days}>
                          <Text style={{...styles.heading, marginTop:10}}>{tody>1? days[tody-2]:days[week.length-2+tody]}</Text>
                          <Text style={styles.innerTxt}>{tody>1? week[tody-2]:week[week.length-2+tody]} <Text style={{fontSize:12,color:'gray'}}>Km</Text></Text>
                        </View>

                        <View style={styles.days}>
                          <Text style={{...styles.heading, marginTop:10}}>{tody>2? days[tody-3]:days[week.length-3+tody]}</Text>
                          <Text style={styles.innerTxt}>{tody>2? week[tody-3]:week[week.length-3+tody]} <Text style={{fontSize:12,color:'gray'}}>Km</Text></Text>
                        </View>

                        <View style={styles.days}>
                          <Text style={{...styles.heading, marginTop:10}}>{tody>3? days[tody-4]:days[week.length-4+tody]}</Text>
                          <Text style={styles.innerTxt}>{tody>3? week[tody-4]:week[week.length-4+tody]} <Text style={{fontSize:12,color:'gray'}}>Km</Text></Text>
                        </View>

                        <View style={styles.days}>
                          <Text style={{...styles.heading, marginTop:10}}>{tody>4? days[tody-5]:days[week.length-5+tody]}</Text>
                          <Text style={styles.innerTxt}>{tody>4? week[tody-5]:week[week.length-5+tody]} <Text style={{fontSize:12,color:'gray'}}>Km</Text></Text>
                        </View>

                        <View style={styles.days}>
                          <Text style={{...styles.heading, marginTop:10}}>{tody>5? days[tody-6]:days[week.length-6+tody]}</Text>
                          <Text style={styles.innerTxt}>{tody>5? week[tody-6]:week[week.length-6+tody]} <Text style={{fontSize:12,color:'gray'}}>Km</Text></Text>
                        </View>

                    </View>
                    </ScrollView>
            </TouchableOpacity>
          )
      }



      const Settings = () =>{
        const item = [
          { label: '1000', value: 1000 },
          { label: '2000', value: 2000 },
          { label: '3000', value: 3000 },
          { label: '4000', value: 4000 },
          { label: '5000', value: 5000 },
          { label: '6000', value: 6000 },
          { label: '7000', value: 7000 },
          { label: '8000', value: 8000 },
          { label: '9000', value: 9000 },
          { label: '10000', value: 10000 },
        ]

        const item2 = [
          { label: '65', value: 65 },
          { label: '66', value: 66 },
          { label: '67', value: 67 },
          { label: '68', value: 68 },
          { label: '69', value: 69 },
          { label: '70', value: 70 },
          { label: '71', value: 71 },
          { label: '72', value: 72 },
          { label: '73', value: 73 },
          { label: '74', value: 74 },
          { label: '75', value: 75 },
          { label: '76', value: 76 },
          { label: '77', value: 77 },
          { label: '78', value: 78 },
          { label: '79', value: 79 },
          { label: '80', value: 80 },
          { label: '81', value: 81 },
          { label: '82', value: 82 },
          { label: '83', value: 83 },
          { label: '84', value: 84 },
          { label: '85', value: 85 },
          { label: '86', value: 86 },
          { label: '87', value: 87 },
          { label: '88', value: 88 },
          { label: '89', value: 89 },
          { label: '90', value: 90 },
        ]
        // picker palaceholder
        const placeholder = {
          label: `${totalStep}`,
          value: null,
          color: '#007fcb',
        }
        const placeholder2 = {
          label: `${stepLength} cm`,
          value: null,
          color: '#007fcb',
        }

        return(
            <View style={styles.container}>  
                <View style={{...styles.card, marginTop:30}}>
                  <Text style={styles.heading}>Step Goal</Text>

                  <RNPickerSelect
                  itemKey={1}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={(value) => storeStepGoal(value)}
                  placeholder={placeholder}
                  items={item}
                  style={pickerSelectStyles}
                  Icon={() => { return (<Icons name="arrow-drop-down" size={30} color='#007fcb' />); }}
                />
                </View>

                <View style={{...styles.card,}}>
                  <Text style={styles.heading}>Step Length</Text>

                  <RNPickerSelect
                  itemKey={1}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={(value) => storeStepLength(value)}
                  placeholder={placeholder2}
                  items={item2}
                  style={pickerSelectStyles}
                  Icon={() => { return (<Icons name="arrow-drop-down" size={30} color='#007fcb' />); }}
                />
                </View>
            </View>
        )
    }

    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:({ focused, color, size })=>{
              let IconName;
              if(route.name=='Today'){
                IconName='home'
              }
              if(route.name=='Settings'){
                IconName='settings'
              }
              return  <Icon name={IconName} size={20} color={color} />
            }
        })}

        tabBarOptions={{
          activeTintColor: '#007fcb',
          inactiveTintColor: 'gray',
          showIcon:true,
          indicatorStyle: {
            backgroundColor: '#007fcb'
          },
          labelStyle: {
            fontWeight: 'bold',
            textTransform: 'capitalize'
          },
          tabStyle :{
              flexDirection:'row'
          }
        }}>
          <Tab.Screen name="Today" component={Today}  options={{ title: "Today",  }} />
          <Tab.Screen name="Settings" component={Settings}  options={{ title: 'Settings' }} />
        </Tab.Navigator>
    )
}

export default FootStepCount

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    contentContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    value: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#007fcb'
    },
    txt: {
      // fontWeight: 'bold',
      fontSize: 15,
      color: 'black'
    },
    card:{
        backgroundColor:'white',
        padding:20,
        margin: 10,
        borderRadius:10,
        elevation: 2,
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'space-between'
    },
    heading:{
        color:'gray', 
        fontSize:14, 
        fontWeight:'bold'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    innerTxt:{
        marginTop:10,
        color: 'black',
        fontWeight:'bold',
        fontSize: 16,
        // paddingBottom:10
    },
    days:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        borderBottomWidth:1,
        borderColor:'gray',
        paddingBottom:10
    }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      height: 30,
      borderBottomWidth: 2,
      borderBottomColor: '#007fcb',
      color: '#007fcb',
      paddingRight: 30, // to ensure the text is never behind the icon
      paddingVertical:4,
      // backgroundColor:'yellow'
    },
    iconContainer: {
      // bottom:3
    },
    placeholder: {
      color: '#007fcb',
      fontWeight:'bold',
    },
  });