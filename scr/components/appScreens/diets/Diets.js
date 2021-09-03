import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';

import data from './Data';
import catogaryData from './NutrationData'

import img1 from '../../../images/Diets/tangy_bbq_chicken.jpg'
import img2 from '../../../images/Diets/spicy_chicken_vegetable_soup.jpg'
import img3 from '../../../images/Diets/Pumpkin_Pie_Smoothie.jpg'

const DietsList = ({ navigation }) => {

    const [diets, setDiets] = useState(data)
    const [slides, setSlide] = useState([])
    const [catogarydata, setCatogaryData] = useState(catogaryData)


    return (
        <View style={styles.main}>
            <Header nav={navigation.goBack} title="Diets"/>


            {/* ********** Slider *********** */}
            <View style={styles.container}>
                <SwiperFlatList
                    autoplay
                    autoplayLoopKeepAnimation={true}
                    autoplayDelay={4}
                    autoplayLoop
                    index={0}
                    showPagination={false}>
                    {
                        diets.map((val, key) => {
                                return (
                                    <TouchableOpacity key={key}>
                                        <ImageBackground
                                            style={styles.child}
                                            imageStyle={{
                                                backgroundColor: 'black',
                                                opacity: 0.6
                                            }}
                                            source={val.img}>
                                            <View style={{
                                                position: 'absolute',
                                                bottom: 20,
                                                left: 10,
                                                width:'95%'
                                            }}>
                                                <View style={{
                                                    backgroundColor: '#469433',
                                                    width: val.category.length*10,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    paddingVertical: 5
                                                }}>
                                                    <Text style={{
                                                        color: "white",
                                                        fontSize: 16
                                                    }}>{val.category}</Text>
                                                </View>
                                                <Text  numberOfLines={1} ellipsizeMode='tail'
                                                    style={{
                                                    fontWeight: 'bold',
                                                    fontSize: 16,
                                                    color: 'white'
                                                }}>{val.title}</Text>
                                                <Text style={{ color: 'white' }}>
                                                    Servings: {val.servings} | Cook Time: {val.cookTime} Min
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                )
                        })
                    }
                </SwiperFlatList>
            </View>





            {/* *************** Categories ************** */}
            <ScrollView>
                <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 18 }}>
                    Categories
                </Text>

                <View style={{flexDirection:'row', justifyContent:'space-around',marginRight:10}}>
               
                    <TouchableOpacity onPress={()=>{navigation.navigate('Category',{'data':catogarydata, type:'fatloss' })}}>
                    <ImageBackground 
                        style={styles.categoryImg} 
                        source={img1}
                        imageStyle={{opacity:0.6}}
                        >
                        <Text
                         style={{color:'white', fontWeight: 'bold', position:'absolute', bottom: 5, left: 5}}
                        >Fat Loss</Text>
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{navigation.navigate('Category',{'data':catogarydata, type:'MuscleGain'})}}>
                    <ImageBackground 
                        style={styles.categoryImg} 
                        source={img2}
                        imageStyle={{opacity:0.6}}
                        >
                        <Text
                         style={{color:'white', fontWeight: 'bold', position:'absolute', bottom: 5, left: 5}}
                        >Muscle Gain</Text>
                    </ImageBackground>
                    </TouchableOpacity>

                </View>


                <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 18 }}>
                    Featured Recipes
                </Text>


            {
                diets.map((val, key)=>{
                    if(val.featured){
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('DietsDetail', {props: val})}} style={styles.card} key={key}>
                            <Image source={val.img} style={styles.cardImg}/>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>{val.title}</Text>
                            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
                        </TouchableOpacity>
                    )
                    }
                })
            }
                


            </ScrollView>

        </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { backgroundColor: 'black', height: '30%' },
    child: { width, justifyContent: 'center', height: "100%" },
    text: { fontSize: width * 0.5, textAlign: 'center' },
    main: {
        height: '100%'
    },
    categoryImg: {
        width: 160,
        height: 90,
        resizeMode: 'contain',
        marginLeft: 10,
        backgroundColor: 'black'
    },
    card:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
        width:'100%',
        height:60,
        elevation: 3,
        marginBottom: 12
    },
    cardImg:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    cardIcon:{
        position: 'absolute',
        right:10,
        color:'#469433'
    },
    cardTxt:{
        fontWeight:'bold',
        fontSize:14,
        marginLeft: 10, 
        color:'rgb(80,80,80)',
        width:'74%',
        
    }
});


import DietsDetail from './DietsDetail';
import Category from './Category';
import { createStackNavigator } from '@react-navigation/stack';
import CatogaryDetail from './CarogaryDetails';
const Stack = createStackNavigator();

const Diets = () => {
    return (
        <Stack.Navigator initialRouteName="Works" >
            <Stack.Screen name="DietsList" component={DietsList} options={{headerShown:false}}/>
            <Stack.Screen name="DietsDetail" component={DietsDetail} options={{headerShown:false}}/>
            <Stack.Screen name="Category" component={Category} options={{headerShown:false}}/>
            <Stack.Screen name="CatogaryDetail" component={CatogaryDetail} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default Diets;