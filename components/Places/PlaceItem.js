import { View, Image, Text, Pressable, StyleSheet } from "react-native";

function PlaceItem({ place, onSelect }) {
  const { ImageUri, title, address } = place;

  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: ImageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

styles = StyleSheet.create({});
