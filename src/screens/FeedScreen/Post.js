import React ,{ useState } from 'react';
import {View,Text,Image,ImagBackground, ImageBackground, Modal,Pressable,StyleSheet,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';







export default class Post extends React.Component{
    
   
    
    state={
        liked:false,
        modalVisible: false
    }
    onLike=()=>{
        this.setState({liked:!this.state.liked})
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    
    render(){
        const { modalVisible } = this.state;
        const {name,profile,photo,onPress} = this.props

        return(
         <View >
        <View style = {styles.centeredView}>
            <Modal  
            visible={modalVisible} 
            animationType='fade'
            transparent={true}
                    
            ><View style={styles.backgroundColor}>
                <View style={styles.modalView}>
                <Icon 
            name='times'
            size={24} 
            style={styles.icon2}
            onPress={() => this.setModalVisible(!modalVisible)}
                    />
                    <Pressable
                    style={styles.buttom }
                    onPress={() => alert('report successful')}
                    >
                      <Text style={styles.textStyle}>Report</Text>
                    </Pressable>

                    <Pressable
                    style={styles.buttom }
                    onPress={() => alert('unfollow successful')}
                    >
                      <Text style={styles.textStyle}>Unfollow</Text>
                    </Pressable>

                    <Pressable
                    style={styles.buttom }
                    onPress={() => alert('mute successful')}
                    >
                      <Text style={styles.textStyle}>Mute</Text>
                    </Pressable>

                    <Pressable
                    style={styles.buttom }
                    onPress={() => alert('block successful')}
                    >
                      <Text style={styles.textStyle}>Block</Text>
                    </Pressable>

                    <Pressable
                    style={styles.buttom }
                    onPress={() => alert('There will be no more similar')}
                    >
                      <Text style={styles.textStyle}>Not Interested In</Text>
                    </Pressable>

                </View>
         </View>
      </Modal>
      </View>


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
                            onPress={() => this.setModalVisible(!modalVisible)}
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
                  onPress={onPress}
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
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      backgroundColor:{
        flex: 1,
        backgroundColor: '#000000AA',
        justifyContent:'flex-end',
      },
      modalView: {
        backgroundColor: "#C1E4D5",
        justifyContent:'flex-end',
        borderRadius: 20,
        padding: 35,
        height:400,
        alignItems: "center",
        shadowColor: "#000",
      },
      buttom: {
        padding:20,
        elevation: 2,
        backgroundColor: "#C1E4D5",
        borderBottomWidth:1,
        borderBottomColor:"black",
    
        width:'100%',
        height:'20%',
      },
      textStyle: {
        fontSize:24,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        
        
      },
      icon2:{
          color:"black",
          marginLeft:310
      },
});
