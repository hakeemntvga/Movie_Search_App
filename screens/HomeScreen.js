import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, ScrollView,ActivityIndicator} from 'react-native';
import {
  getMovieData,
  getUpComingMovie,
  getPopularTV,
  getFamilyMovies,
  getTopRatedMovies,
  getDocumentary,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../component/List';
import Error from '../component/Error';

const ImageAppendUrl = 'http://image.tmdb.org/t/p/w500/';

const diemension = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setpopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [documentary, setDocumentary] = useState();
    const [error, setError] = useState(false);
    const[loaded,setLoaded]=useState(false)

  // const getData = () => {
  //     return Promise.all([
  //         getDocumentary(),
  //         getTopRatedMovies(),
  //         getMovieData(),
  //         getPopularTV(),
  //         getUpComingMovie(),
  //         getFamilyMovies()
  //     ])
  // }

  useEffect(() => {
    //  getData()
    //    .then(
    //      ([
    //        getDocumentaryData,
    //        getTopRatedMoviesData,
    //        getMovieDataData,
    //        getPopularTVData,
    //        getUpComingMovieData,
    //        getFamilyMoviesData,
    //      ]) => {
    //        const moviesImagesArray = [];
    //        getMovieData.forEach(movie => {
    //          moviesImagesArray.push(
    //            `${ImageAppendUrl + movie.poster_path}`,
    //          );
    //        });
    //        setMoviesImages(moviesImagesArray);

    //        setDocumentary(getDocumentary);

    //        setTopRatedMovies(getTopRatedMovies);

    //        setFamilyMovies(getFamilyMovies);

    //        setPopularTv(getPopularTV);

    //        setpopularMovies(getUpComingMovie);
    //      },
    //    )
    //    .catch(error => setError(error));
  getMovieData()
    .then(movies => {
      setpopularMovies(movies);
      setLoaded(true);
    })
    .catch(err => {
      setError(err);
    });
    getDocumentary()
      .then(movies => {
          setDocumentary(movies);
          setLoaded(true);
      })
      .catch(error => {
        setError(error);
      });

    getTopRatedMovies()
      .then(movies => {
          setTopRatedMovies(movies);
          setLoaded(true);
      })
      .catch(error => {
        setError(error);
      });

    getFamilyMovies()
      .then(movies => {
          setFamilyMovies(movies);
          setLoaded(true);
      })
      .then(error => {
        setError(error);
      });

    getPopularTV()
      .then(movies => {
          setPopularTv(movies);
          setLoaded(true);
      })
      .then(error => {
        setError(error);
      });

    getUpComingMovie().then(movies => {
      const moviesImagesArray = [];
      movies.forEach(movie => {
        moviesImagesArray.push(`${ImageAppendUrl + movie.poster_path}`);
      });
        setMoviesImages(moviesImagesArray);
        setLoaded(true);
    });

  
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                autoplay={true}
                circleLoop={true}
                images={moviesImages}
                sliderBoxHeight={diemension.height / 1.5}
                dotStyle={styles.dotstyle}
              />
            </View>
          )}

          {popularMovies && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                headerText={'Popular Movies'}
                movieContent={popularMovies}
              />
            </View>
          )}
          {popularTv && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                headerText={'Popular TV Shows'}
                movieContent={popularTv}
              />
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                headerText={'Family Movies'}
                movieContent={familyMovies}
              />
            </View>
          )}

          {topRatedMovies && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                headerText={'Top Rated Movies'}
                movieContent={topRatedMovies}
              />
            </View>
          )}

          {documentary && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                headerText={'Documentaries'}
                movieContent={documentary}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size={'large'} />}
      {error && (
        <Error
          errorText1={"'Oops! Something went wrong'"}
          errorText2={'Make sure you are online and restart'}
        />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotstyle: {
    height: 0,
  },
  carousal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
