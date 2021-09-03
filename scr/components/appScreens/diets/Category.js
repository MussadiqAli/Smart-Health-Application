import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header';
import img from '../../../images/Diets/spicy_chicken_vegetable_soup.jpg'


const Category = ({navigation, route}) => {
    // console.log(route.params.data)
    
    return(
        <View style={styles.container}>
            <Header title="Category" nav={navigation.goBack}/>

             <View style={styles.Content}>
            {
                route.params.data.map((val, key)=>{
                    if(route.params.type==val.type){
                        return(
                            <TouchableOpacity
                            onPress={()=>{navigation.navigate('CatogaryDetail', {props: val})}}
                                key={key}
                                style={styles.btn}>
                            <ImageBackground  imageStyle={styles.imgBg}
                            style={styles.BGimg}  
                            source={val.img}>
                                <View style={styles.imgTxt}>
                                {/* <Text style={{color:"white", fontSize:12}}>{val.calories} cal</Text> */}
                                <Text 
                                style={{color:'white', fontWeight:'bold'}}
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                >{val.title}</Text>
                                </View>
                                
                            </ImageBackground>
                            </TouchableOpacity>
                        )
                    }
                })
            }
                 
                
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    Content:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    btn:{
        width:'46%',
        marginTop: 10,
        marginLeft:10,
    },
    BGimg:{
        width: '100%',
        height:120,
        backgroundColor:'black'
    },
    imgBg:{
        width:'100%', 
        height:'100%', 
        opacity:0.7,
        backgroundColor:'black' 
    },
    imgTxt:{
        position:'absolute',
        bottom:3,
        left:4,
    }
})

export default Category;
