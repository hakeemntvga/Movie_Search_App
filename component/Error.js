// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// // import PropTypes from 'prop-types';
// //import PropTypes  from 'deprecated-react-native-prop-types';

// // const propTypes = {
// //   errorText1: PropTypes.string,
// //   errorText2: PropTypes.string,
// // };

// const defualtProps = {
//   errorText1: 'Oops! Something went wrong',
//   errorText2: 'Make sure you are online and restart',
// };

// class Error extends React.PureComponent {
//   render() {
//     const {errorText1, errorText2} = this.props;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>{errorText1}</Text>
//         <Text style={styles.text}>{errorText2}</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//   },
// });

// // Error.propTypes = propTypes;
// Error.defaultProps = defualtProps;
// export default Error;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = ({errorText1, errorText2}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>{errorText1}</Text>
       <Text style={styles.text}>{errorText2}</Text>
     
    </View>
  );
};

export default Error

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
})