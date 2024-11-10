import { Text, View } from "react-native";
import React from "react";
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View
      style={{
        flex: 1, paddingTop: useSafeAreaInsets().top
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
