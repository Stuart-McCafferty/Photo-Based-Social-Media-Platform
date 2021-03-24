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
                   paddingTop:10,
                   alignItems:"center"
                }}>
                    <View style={{width:"20%"}}>
                        <TouchableOpacity
                        onPress={onPress}
                        style={{
                            borderRadius:5,
                            padding:5,
                            backgroundColor:"#fafafa"
                        }}>
                            <Image
                                source={profile}
                                style={{
                                    width:45,
                                    height:45,
                                    borderRadius:13
                                }}
                                />
                          </TouchableOpacity>
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
                   paddingTop:5
               }}>
                    <ImageBackground
                    source={photo}
                    style={{
                        width:"100%",
                        height:220,
                    }}
                    imageStyle={{
                        borderRadius:20
                    }}
                    >
                    </ImageBackground>
                </View>


              <View style={{
                  paddingTop:5,
                  flexDirection:"row",
                  alignItems:'flex-start',
                  justifyContent:"flex-start"
              }}>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                      marginBottom:20,
                      borderRadius:5,
                      padding:5,
                      backgroundColor:'#fafafa'
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
                        backgroundColor:'#fafafa',
                    }}
                >
                    <Icon name= {this.state.liked === true ? "heart":"heart"}
                    color= {this.state.liked===true? "red":"black"}
                    size={20}/>
                </TouchableOpacity>
                  <View style={{
                      width:"80%",
                      paddingTop:5,
                      alignItems:'flex-end',
                  }}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                        color:"black"
                    }}>
                        Edinburgh, Scotland
                    </Text>
                  </View>
                </View>
            </View>
        )
    }
}
