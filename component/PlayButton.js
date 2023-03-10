// import React from 'react';
// import {TouchableOpacity, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// class PlayButton extends React.PureComponent {
//   render() {
//    // const {handlePress} = this.props;
//     return (
//         <TouchableOpacity
      
//            // onPress={() => handlePress()}
//             style={styles.button}>
//         <Icon name={'caret-forward-outline'} size={25} color="white" />
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     alignContent: 'center',

//     borderRadius: 50,
//     padding: 10,
//     backgroundColor: '#4481FC',
//   },
// });

// export default PlayButton;
import {StyleSheet,  TouchableOpacity} from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const PlayButton = ({ onPress}) => {
  return (
  <TouchableOpacity
      
            onPress={onPress}
            style={styles.button}>
        <Icon name={'caret-forward-outline'} size={25} color="white" />
      </TouchableOpacity>
  )
}

export default PlayButton

const styles = StyleSheet.create({
    button: {
      alignContent: 'center',
      borderRadius: 50,
      padding: 10,
      backgroundColor: '#4481FC',
    },
});
