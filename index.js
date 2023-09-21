/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./app/App";
import { Text, TextInput } from "react-native";
import { name as appName } from "./app.json";

if (!Text.defaultProps) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

if (!TextInput.defaultProps) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
