import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({navigation,main}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.mainNavContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/gold_logo.jpg')}
          />
          <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
            <Icon name="search-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Navbar

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  mainNavContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding:10
}
})