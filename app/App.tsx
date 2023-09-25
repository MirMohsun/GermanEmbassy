import React, { FC } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { RootNavigation } from "./modules/navigation/rootNavigation";
import "react-native-gesture-handler";

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Provider {...{ store }}>
          <RootNavigation />
        </Provider>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
