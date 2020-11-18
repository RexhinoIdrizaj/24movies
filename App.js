import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import navigationTheme from "./src/constants/NavigationTheme";

//set default url for axios
import { initializeAxios } from "./src/constants/config";
//get Genres to use their ids later for getting movies
import { getGenres } from "./src/store/actions/movies";

//Import screens
import Splashscreen from "./src/screens/Splashscreen";
import DashboardView from "./src/screens/DashboardView";
import DetailView from "./src/screens/DetailView";
import PlayerView from "./src/screens/PlayerView";
import SearchView from "./src/screens/SearchView";

initializeAxios();

const Stack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isReady) {
      const callback = () => setIsReady(true);
      dispatch(getGenres(callback));
    }
  }, []);

  if (!isReady) {
    return <Splashscreen />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="DashboardView" component={DashboardView} />
        <Stack.Screen name="DetailView" component={DetailView} />
        <Stack.Screen name="PlayerView" component={PlayerView} />
        <Stack.Screen name="SearchView" component={SearchView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
