import React, { useEffect } from "react";
import { View } from "react-native";
import { useTVEventHandler } from "../hooks/tvHandler";

import VideoPlayer from "react-native-video-controls";
import Orientation from "react-native-orientation-locker";

const VIDEO_URL =
  "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4";

/**
 * @category
 * MainScreens
 * @description
 * Screen used to open movie video.
 */
const PlayerView = ({ navigation }) => {
  const myEventHandler = (evt) => {
    if (evt && evt.eventType === "left") {
      navigation.goBack();
    } else if (evt && evt.eventType === "select") {
    }
  };

  useTVEventHandler(myEventHandler);

  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return () => Orientation.unlockAllOrientations();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer
        source={{
          uri: VIDEO_URL,
        }}
        resizeMode="cover"
        onBack={() => navigation.goBack()}
        focusable
        disableFullscreen
      />
    </View>
  );
};

export default PlayerView;
