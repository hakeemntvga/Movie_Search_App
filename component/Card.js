// import React from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// //import PropTypes from "prop-types"

// //import PropTypes from 'deprecated-react-native-prop-types';

// const ImageAppendUrl = 'http://image.tmdb.org/t/p/w500/';
// const placeholdeImage = require('../assets/images/movie.png');

// // const propTypes = {
// //     item:PropTypes.object,
// // }

// class Card extends React.PureComponent {
//   render() {
//     const {navigation,item} = this.props;
//     return (
//       <TouchableOpacity
//         style={styles.container}
//       onPress={()=>navigation.navigate('Detail',{movieId:item.id})}
//       >
//         <Image
//           resizeMode="cover"
//           style={styles.image}
//           source={
//             item.poster_path
//               ? {uri: `${ImageAppendUrl + item.poster_path}`}
//               : placeholdeImage
//           }
//         />
//         {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 5,
//     position: 'relative',
//     alignItems: 'center',
//     height: 200,
//   },
//   image: {
//     height: 200,
//     width: 120,
//     borderRadius: 15,
//   },
//   movieName: {
//     position: 'absolute',
//     width: 100,
//     textAlign: 'center',
//       top: 10,
//       color: "black",
//     fontWeight:"700"
//   },
// });


// //Card.propTypes = propTypes;

// export default Card;
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import React from 'react'

const Card = ({ navigation, item }) => {
  const ImageAppendUrl = 'http://image.tmdb.org/t/p/w500/';
  const placeholdeImage = require('../assets/images/movie.png');
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {uri: `${ImageAppendUrl + item.poster_path}`}
            : placeholdeImage
        }
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

export default Card

const styles = StyleSheet.create({
    container: {
      padding: 5,
      position: 'relative',
      alignItems: 'center',
    height: 200,
    marginBottom:5
    },
    image: {
      height: 200,
      width: 120,
      borderRadius: 15,
    },
    movieName: {
      position: 'absolute',
      width: 100,
      textAlign: 'center',
        top: 10,
        color: "black",
      fontWeight:"700"
    },
});