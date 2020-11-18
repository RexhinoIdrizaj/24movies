import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { useTVEventHandler } from "../hooks/tvHandler";
import { getGenreName, navigate } from "../utils/helpers";

import MyHeader from "../components/common/MyHeader";
import MyImage from "../components/common/MyImage";
import MyText from "../components/common/MyText";
import PlayButton from "../components/PlayButton";

/**
 * @category
 * MainScreens
 * @description
 * Screen used to show details of choosen movie or TV Show
 */
const DetailView = ({ route, navigation }) => {
  const myEventHandler = (evt) => {
    if (evt && evt.eventType === "left") {
      navigate(navigation, route.params.backTo);
    } else if (evt && evt.eventType === "playPause") {
      navigation.navigate("PlayerView");
    }
  };

  useTVEventHandler(myEventHandler);

  const { item } = route.params;

  const { genres } = useSelector((state) => state.movies);

  // Generate a list of genres name to show on details depeneding on ids.
  const genresArray = item.genre_ids.map((el) => {
    const genreName = getGenreName(genres, el);
    return genreName;
  });

  // Handle inconsistent result for movie name and date
  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;

  return (
    <ScrollView>
      <MyHeader title="Details" toGoBack="DashboardView" />
      <View style={{ height: 300 }}>
        <MyImage
          src={item.poster_path}
          style={{ height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <PlayButton
          style={styles.playBtn}
          onPress={() => navigation.navigate("PlayerView")}
        />
        <MyText type="big">
          {title} ({releaseDate.substring(0, 4)})
        </MyText>
        <ScrollView horizontal contentContainerStyle={{ marginVertical: 10 }}>
          {genresArray.map((name, i) => (
            <MyText key={i.toString()} type="small" style={{ marginRight: 10 }}>
              {name}
            </MyText>
          ))}
        </ScrollView>
        <MyText textColor="textGrey">{item.overview}</MyText>
      </View>
    </ScrollView>
  );
};

export default DetailView;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  playBtn: {
    right: "20%",
    top: -25,
    position: "absolute",
  },
});
