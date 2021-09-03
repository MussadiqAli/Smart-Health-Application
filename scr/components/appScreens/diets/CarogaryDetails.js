import React, { useState } from 'react';
import { ScrollView,Dimensions, Text, Image, View, StyleSheet } from 'react-native';
import Header from '../Header';
const CatogaryDetail = (props)=>{
    console.log(props.route.params.props)
    const [data, setData] = useState(props.route.params.props)
    return(
        <View style={{flex: 1}}>
            <Header title={data.title} nav={props.navigation.goBack}/>
            <Image source={data.img} style={{
                width: Dimensions.get('window').width,
                height:'30%',
            }}/>

        <ScrollView>

        {
            data.nutriants.map((v,k)=>{
                return(
                    <Text key={k} 
                    style={{fontSize:k==0? 16:14, fontWeight:'bold',marginLeft:10,marginTop:5}}
                    >{v}:  <Text style={{color:'#404040'}}> {data.values[k]}</Text></Text>
                )
            })
        }

            <Text style={{color:'#303030', margin:10, textAlign:"justify",}}>
                {data.description}
            </Text>
            </ScrollView>





        </View>
    )
}
export default CatogaryDetail;

const styles = StyleSheet.create({

})