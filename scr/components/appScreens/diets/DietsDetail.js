import React, { useState } from 'react';
import Header from '../Header';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import img from '../../../images/Diets/spicy_chicken_vegetable_soup.jpg'
import { ScrollView } from 'react-native-gesture-handler';


const DietsDetail = ({ navigation, route }) => {

    const [data, setData] = useState(route.params.props)
    return (
        <View style={{ flex: 1, }}>
            <Header title={data.title} nav={navigation.goBack} />

            <ImageBackground source={data.img} style={styles.imgBG}>
                <View style={styles.BGview}></View>
                <View style={styles.BGtxt}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Servings: {data.servings}</Text>
                    <Text style={{ color: 'white', fontSize: 16 }}>Cook Time: {data.cookTime} Min</Text>
                </View>
            </ImageBackground>



            <Tab.Navigator tabBarOptions={{
                activeTintColor:'#469433',
                inactiveTintColor:'gray',
                indicatorStyle:{
                    backgroundColor:'#469433'
                },
                labelStyle:{
                    fontWeight:'bold'
                }
            }}>
                <Tab.Screen name="Summary" component={Summary} initialParams={data} />
                <Tab.Screen name="Ingredients" component={Ingredients} initialParams={data} />
                <Tab.Screen name="Directions" component={Directions} initialParams={data} />
            </Tab.Navigator>

        </View>
    )
}

export default DietsDetail;

const styles = StyleSheet.create({
    imgBG: {
        width: '100%',
        height: 180,
        resizeMode: 'contain',
        backgroundColor: "black"
    },
    BGview: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 35,
        opacity: 0.6
    },
    BGtxt: {
        position: 'absolute',
        bottom: 8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
})


/*************** Inner Tab Screens ***************/
const Summary = (props) => {
    const [data, setData] = useState(props.route.params)
    return (
        <View>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    width: "100%",
                    justifyContent: 'space-around',
                    marginTop: 10
                }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>{data.calories}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#469433' }}>Calories</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>{data.protein}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#469433' }}>Protein</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>{data.fat}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#469433' }}>Fat</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>{data.carbs}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#469433' }}>Carbs</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 15, marginRight: 10 }}>
                    {data.title}
                </Text>
                <Text style={{ fontSize: 14, marginTop: 20, marginLeft: 15, marginRight: 10 }}>
                    {data.description}
                </Text>
            </ScrollView>
        </View>
    )
}



const Ingredients = (props) => {
    const [data, setData] = useState(props.route.params)
    return (
        <View style={{ width: '100%', marginTop: 10 }}>
            <ScrollView>
                {
                    data.ingredients.map((val, key) => {
                        return (
                            <View key={key} style={{ flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 20, }}>
                                <Text style={{ fontSize: 25 }}>{"\u2022 "}</Text>
                                <Text style={{ marginTop: 5, marginRight: 10 }}>{val}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}



const Directions = (props) => {
    const [data, setData] = useState(props.route.params)
    return (
        <View>
            <ScrollView>
                {
                    data.directions.map((val, key) => {
                        return (
                            <View key={key} style={{ flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 20, marginTop: 10, }}>
                                <Text style={{ fontSize: 14 }}>1) </Text>
                                <Text style={{ marginRight: 10, textAlign: 'justify' }}>{val}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}