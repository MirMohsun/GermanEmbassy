import {CommonActions, ParamListBase} from "@react-navigation/native";
import {NavigationType} from "./type";

const config = {} as {navigator: NavigationType};

const setNavigator = (nav: NavigationType): void => {
    if (nav) {
        config.navigator = nav;
    }
};

const navigate = (routeName: string, params?: ParamListBase): void => {
    if (config.navigator && routeName) {
        const action = CommonActions.navigate({name: routeName, params});

        config.navigator.dispatch(action);
    }
};

const reset = (
    index: number,
    routeName: string,
    params?: ParamListBase
): void => {
    if (config.navigator && routeName) {
        const action = CommonActions.reset({
            index,
            routes: [{name: routeName, params}]
        });

        config.navigator.dispatch(action);
    }
};

const goBack = (): void => {
    if (config.navigator) {
        const action = CommonActions.goBack();

        config.navigator.dispatch(action);
    }
};

const NavigationActions = {
    setNavigator,
    navigate,
    reset,
    goBack
};

export default NavigationActions;
