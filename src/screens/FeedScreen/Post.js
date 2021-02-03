import React from 'react';
import {View,Text,Image,ImagBackground, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default class Post extends React.Component{
    state={
        liked:false
    }
    onLike=()=>{
        this.setState({liked:!this.state.liked})
    }
    render(){

        const {name,profile,photo,onPress} = this.props

        return(
            <View>
               <View style={{
                   flexDirection:"row",
                   paddingTop:25,
                   alignItems:"center"
                }}>
                    <View style={{width:"20%"}}>
                            <Image
                                source={profile}
                                style={{
                                    width:45,
                                    height:45,
                                    borderRadius:13
                                }}
                                />
                    </View>
                    <View style={{
                        width:"60%"
                    }}>
                        <Text style={{
                            fontSize:18,
                            fontWeight: 'bold',
                            color:"black"
                        }}>{name}</Text>

                        <Text style={{
                            fontSize:12,
                            color:"#9ca1a2"
                        }}>
                            2 mins ago
                        </Text>
                    </View>
                    <View style={{
                        width:"20%",
                        alignItems:"flex-end"
                    }}>
                        <Icon
                            name="sliders-h"
                            color="black"
                            size={20}
                        />
                    </View>
               </View>

               <View style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20
               }}>
                    <ImageBackground
                    source={photo}
                    style={{
                        width:"100%",
                        height:220,
                    }}
                    imageStyle={{
                        borderRadius:30
                    }}
                    >
                        <View style={{
                            height:"100%",
                            flexDirection:"row",
                            alignItems:'flex-end',
                            justifyContent:"flex-end"
                        }}>


                            <TouchableOpacity
                                onPress={onPress}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    backgroundColor:"#e8e8e8"
                                }}
                            >
                                <Icon name="comment-alt"
                                color="black"
                                size={20}/>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    backgroundColor:"#e8e8e8",
                                    marginLeft:10,
                                    marginRight:20
                                }}
                            >
                                <Icon name= {this.state.liked === true ? "heart":"heart"}
                                color= {this.state.liked===true? "red":"black"}
                                size={20}/>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>
               </View>
            </View>
        )
    }
}
