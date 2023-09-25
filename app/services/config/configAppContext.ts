import {createContext, useContext} from "react";

export interface IAppContext {}

export class AppContext implements IAppContext {
    private static exist: boolean;

    private static instance: IAppContext;

    constructor() {
        if (AppContext.exist) {
            return AppContext.instance;
        }
        AppContext.exist = true;
    }
}

export const Store: IAppContext = new AppContext();

export interface IContext extends IAppContext {
    LocalizationContext: {
        translation: (key: string, params?: object) => string;
        locale: "en" | "ru" | "az";
        setLocale: (key: "en" | "ru" | "az") => void;
    };
}

const AppStore = createContext<IContext>({} as IContext);

export const AppProvider = AppStore.Provider;

export const useAppContext = (): IContext => useContext(AppStore);
