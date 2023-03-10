// import React from 'react'
// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import Card from './Card'
// //import PropTypes from 'prop-types';

// //import PropTypes from 'deprecated-react-native-prop-types';

// // const propTypes = {
// //   headerText: React.PropTypes.string,
// //   movieContent: PropTypes.array,
// // };

// class List extends React.PureComponent{
//     render() {
// const {navigation,headerText,movieContent}=this.props
//         return (
//           <View style={styles.listContainer}>
//             <View>
//               <Text style={styles.headerTextstyle}>{headerText}</Text>
//             </View>
//             <View>
//               <FlatList
//                 disableVirtualization={false}
//                 horizontal
//                 data={movieContent}
//                         renderItem={({ item }) => <Card navigation={navigation} item={item} />}
//               />
//             </View>
//           </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//   listContainer: {
//     marginTop: 25,
//   },
//   headerTextstyle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingBottom: 20,
//   },
// });

// //List.propTypes = propTypes;

// export default List;

import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';
const List = ({navigation, headerText, movieContent}) => {
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.headerTextstyle}>{headerText}</Text>
      </View>
      <View>
        <FlatList
          disableVirtualization={false}
          horizontal
          data={movieContent}
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 25,
  },
  headerTextstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
