import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const windowWidth = 300
const windowHeight = 300

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.7 ,borderRadius:20},
  slideTitle: { fontSize: 18, fontStyle: "italic" },

  carousel: { flex: 1 },
});

const slideList = Array.from({ length: 9 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1640/2842?random=${i}`,
    title: `Challenge ${i + 1}`,
  };
});

const Slide = React.memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>

      <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
      <Text style={styles.slideTitle}>{data.title}</Text>
      
    </View>
  );
});



export default function Posts() {
  

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        
       
      />
       

    </>
  );
}