import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../utils/helpers";

import MovieCard from "./MovieCard";
import SectionHeader from "./SectionHeader";
import FlatlistEmpty from "./FlatlistEmpty";

/**
 * @category
 * Components
 * @description
 * Component to show a section with movies or TV Show carousel
 * @property {object[]} movies
 * @property {string} sectionTitle
 */
const Section = ({ movies, sectionTitle }) => {
  //useNavigation hook as this component is not part of navigation stack
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <MovieCard
      style={styles.cardWrapper}
      onPress={() =>
        navigate(navigation, "DetailView", { item, backTo: "DashboardView" })
      }
      imageSrc={item.poster_path}
      title={item.title || item.name}
    />
  );

  const renderEmpty = () => <FlatlistEmpty />;

  return (
    <View style={{ paddingBottom: 5 }}>
      <SectionHeader title={sectionTitle} />
      <FlatList
        contentContainerStyle={styles.flatlistWrapper}
        data={movies}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(item, i) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  cardWrapper: {
    marginRight: 10,
    width: 120,
  },
  flatlistWrapper: {
    flexGrow: 1,
  },
});
