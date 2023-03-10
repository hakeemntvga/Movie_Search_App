import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovie} from '../services/services';
import Card from './Card';
import Error from './Error';
const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [serchResult, setSearchResult] = useState();
  const [error, setError] = useState(false);

  const onSubmit = query => {
    Promise.all([searchMovie(query, 'movie'), searchMovie(query, 'tv')])
      .then(([movie, tv]) => {
        const data = [...movie, ...tv];
        setSearchResult(data);
        
        console.log(data);
        console.log(serchResult);
      })
      .catch(() => {
        setError(true);
      });
    console.log(query);
  };
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Search movie name"
              value={text}
              onChangeText={onChangeText}
            />
          </View>
          <TouchableOpacity onPress={() => {onSubmit(text)}}>
            <Icon
              name="search-outline"
              size={30}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.serchItem}>
          {/* serch item result */}
          {serchResult && serchResult.length > 0 && (
            <FlatList
              numColumns={3}
              data={serchResult}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
            />
          )}

          {/* when search but no result */}
          {serchResult && serchResult == 0 && (
            <View style={[styles.empty, {paddingTop: 20}]}>
              <Text>No result matching your criteria.</Text>
              <Text>Try diffrent KeyWord</Text>
            </View>
          )}
        </View>
        {/* when Nothing is searched */}
        {!serchResult && (
          <View style={styles.empty}>
            <Text>Type something to start searching</Text>
          </View>
        )}
        {/* Error */}
        {error && (
          <Error
            errorText1={"'Oops! Something went wrong'"}
            errorText2={'Make sure you are online and restart'}
          />
        )}
      </SafeAreaView>
    </React.Fragment>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },
  serchItem: {
    padding: 5,
  },
});
