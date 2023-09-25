import { SagaActionTypes } from "../SagaActionTypes";

export const getAppAbout = () => {
  return { type: SagaActionTypes.GET_APP_ABOUT };
};

export const getAppInfo = () => {
  return { type: SagaActionTypes.GET_APP_INFO };
};

export const getAppArchitects = () => {
  return { type: SagaActionTypes.GET_ARCHITECTS };
};

export const getAppDetail = () => {
  return { type: SagaActionTypes.GET_ARCHITECTS_DETAIL };
};

export const getBuilding = () => {
  return { type: SagaActionTypes.GET_BUILDING };
};

export const getBuildings = () => {
  return { type: SagaActionTypes.GET_BUILDINGS };
};

export const getAppRoutes = () => {
  return { type: SagaActionTypes.GET_ROUTES };
};
