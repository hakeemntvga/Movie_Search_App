import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMovieDetails} from '../services/services';

import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../component/PlayButton';
import Video from '../component/Video';

const DetailsScreen = ({route, navigation}) => {
  const ImageAppendUrl = 'http://image.tmdb.org/t/p/w500/';
  const placeholdeImage = require('../assets/images/movie.png');

  const movieId = route.params.movieId;

  const [movieDetails, setMovieDetails] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovieDetails(movieId).then(moviesData => {
      setMovieDetails(moviesData);
      setLoaded(true);
    });
  }, [movieId]);

  const ShowVideo = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <React.Fragment>
      {loaded && (
        <View>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={
                movieDetails.poster_path
                  ? {uri: `${ImageAppendUrl + movieDetails.poster_path}`}
                  : placeholdeImage
              }
            />
            <View style={styles.container}>
              <View style={styles.playBtn}>
                <PlayButton
                  onPress={() => ShowVideo()}
                  // handlePress={ShowVideo}
                />
              </View>
              <Text style={styles.movieTitle}>{movieDetails.title}</Text>
              {movieDetails.genres && (
                <View style={styles.genresContainer}>
                  {movieDetails.genres.map(genre => {
                    return (
                      <Text key={genre.id} style={styles.genresText}>
                        {genre.name}
                      </Text>
                    );
                  })}
                </View>
              )}
              <StarRating
                maxStars={5}
                rating={movieDetails.vote_average / 2}
                starSize={25}
                fullStarColor={'gold'}
              />
              <Text style={styles.overView}>{movieDetails.overview}</Text>
              <Text style={styles.releaseDate}>
                {'Release Date : ' +
                  dateFormat(movieDetails.release_date, 'mmmm ds,yyyy')}
              </Text>
            </View>
          </ScrollView>
          <View style={{flex: 1}}>
            <Modal
              animationType="slide"
              visible={modalVisible}
              supportedOrientations={['portrait', 'lanfscape']}>
              <Video onClose={ShowVideo} />
            </Modal>
          </View>
        </View>
      )}
      {!loaded && <ActivityIndicator size={'large'} />}
    </React.Fragment>
  );
};

export default DetailsScreen;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 2,
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  genresText: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overView: {
    padding: 10,
  },
  releaseDate: {
    fontWeight: 'bold',
  },
  playBtn: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
});
