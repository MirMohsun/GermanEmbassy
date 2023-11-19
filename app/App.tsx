import React, { FC, useMemo, useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";
import { RootNavigation } from "./modules/navigation/rootNavigation";
import "react-native-gesture-handler";
import { AppProvider } from "./services/config/configAppContext";
import i18n from "./services/localization/services";
import { ILocalizationType } from "./services/localization/translations";

const App: FC = () => {
  const [locale, setLocale] = useState("en" as ILocalizationType);

  const LocalizationContext = useMemo(
    () => ({
      translation: (key: string) => i18n.t(key, { locale }),
      locale,
      setLocale,
    }),
    [locale]
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider value={{ LocalizationContext }}>
        <View style={{ flex: 1 }}>
          <Provider {...{ store }}>
            <RootNavigation />
          </Provider>
        </View>
      </AppProvider>
    </GestureHandlerRootView>
  );
};

export default App;
