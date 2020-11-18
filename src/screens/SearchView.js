import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../utils/helpers";
import { useTVEventHandler } from "../hooks/tvHandler";
import {
  search,
  saveSearchResult,
  getTrendSearch,
} from "../store/actions/movies";

import MyText from "../components/common/MyText";
import MovieCard from "../components/MovieCard";
import MyHeader from "../components/common/MyHeader";

/**
 * @category
 * MainScreens
 * @description
 * Screen that shows trending search and is used to search for movies and TV shows
 */

const SearchView = ({ navigation }) => {
  const myEventHandler = (evt) => {
    if (evt && evt.eventType === "left") {
      navigate(navigation, "DashboardView");
    } else if (evt && evt.eventType === "right") {
      inputRef.current.focus();
    }
  };

  useTVEventHandler(myEventHandler);

  const [input, setInput] = useState("");

  //create timeout ref for debounce function
  // used for give focus on TV platform
  const inputRef = useRef();
  let timeout = useRef(null);

  const dispatch = useDispatch();
  const { loading, searchResult, trendSearch } = useSelector(
    (state) => state.movies,
  );

  useEffect(() => {
    //get trending search of the day to show before search
    if (trendSearch.length === 0) {
      dispatch(getTrendSearch());
    }
  }, [trendSearch]);

  useEffect(() => {
    //clear timeout when components unmount
    return () => {
      clearTimeout(timeout.current);
      dispatch(saveSearchResult([]));
    };
  }, []);

  const clearInput = () => {
    if (!!input) {
      setInput("");
      dispatch(saveSearchResult([]));
    }
  };

  const waitAndSearch = (text) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const query = text.trim();
      query && dispatch(search(query)); //execute search only if query exists
    }, 500);
  };

  const onUserInput = (text) => {
    setInput(text);
    waitAndSearch(text); // wait user to finish typing
  };

  const renderItem = ({ item }) => {
    //handle inconsistency on data retrieved
    const title = item.title || item.name;
    const releaseDate = item.release_date || item.first_air_date;

    return (
      <MovieCard
        withShadow
        onPress={() =>
          navigate(navigation, "DetailView", { item, backTo: "SearchView" })
        }
        style={styles.cardWrapper}
        imgStyle={styles.imgStyle}
        imageSrc={item.poster_path}
        title={title}
      >
        <View style={{ paddingVertical: 5, flex: 1 }}>
          {releaseDate && <MyText>{releaseDate.substring(0, 4)}</MyText>}
          <MyText type="small" fontWeight="bold">
            {item.vote_average}/10
          </MyText>
          <View style={styles.mediaType}>
            <MyText>{item.media_type}</MyText>
          </View>
        </View>
      </MovieCard>
    );
  };

  const renderHeader = () =>
    searchResult.length === 0 && (
      <View style={{ marginHorizontal: 10, paddingLeft: 5 }}>
        <MyText type="title" fontWeight="bold">
          Trending
        </MyText>
      </View>
    );

  const data = searchResult.length > 0 ? searchResult : trendSearch;

  return (
    <View style={{ paddingHorizontal: 10, flex: 1 }}>
      <MyHeader
        ref={inputRef}
        title="Search"
        withSearch
        onUserInput={onUserInput}
        clearInput={clearInput}
        input={input}
        loading={loading}
        toGoBack="DashboardView"
      />
      <FlatList
        style={{ flex: 1 }}
        data={data}
        extraData={data}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, i) => item.id.toString()}
      />
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  imgStyle: {
    width: "30%",
    marginRight: 10,
  },
  mediaType: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
