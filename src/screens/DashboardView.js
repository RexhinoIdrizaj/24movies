import React, { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getGenreIds, getGenreName, navigate } from "../utils/helpers";
import { useTVEventHandler } from "../hooks/tvHandler";
import {
  getMoviesWithGenre,
  getPopularMovies,
  getPopularTvShows,
} from "../store/actions/movies";

import Section from "../components/Section";
import MyTextInput from "../components/common/MyTextInput";

/**
 * @category
 * MainScreens
 * @description
 * Main screen to show movies and TV shows carousels
 */
const DashboardView = ({ navigation }) => {
  useTVEventHandler();

  const dispatch = useDispatch();

  const {
    popularMovies,
    popularTvShows,
    genres,
    moviesWithGenre,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getPopularTvShows());
    const genreIds = getGenreIds(genres, ["Family", "Documentary"]);
    // get genreIds from TMDB genres and make api request if ids exists;
    genreIds.length > 0 &&
      genreIds.forEach((id) => {
        dispatch(getMoviesWithGenre(id));
      });
  }, []);

  // Generate array of movies genres to display each section of movies with genre dynamically
  const moviesWithGenreArray = Object.values(moviesWithGenre);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 10 }}>
        <MyTextInput
          placeholder="Discover"
          iconName="search"
          onPress={() => navigate(navigation, "SearchView")}
        />
        {popularMovies && (
          <Section movies={popularMovies} sectionTitle="Popular Movies" />
        )}
        {popularTvShows && (
          <Section movies={popularTvShows} sectionTitle="Popular TV Shows" />
        )}
        {moviesWithGenreArray.map((el) => (
          <Section
            key={el.id.toString()}
            movies={el.results}
            sectionTitle={getGenreName(genres, el.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardView;
