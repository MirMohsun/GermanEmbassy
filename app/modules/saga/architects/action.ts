import { SagaActionTypes } from "../SagaActionTypes";

export const getArchitects = () => {
  return { type: SagaActionTypes.GET_ARCHITECTS };
};

export const getArchitectsDetails = () => {
  return { type: SagaActionTypes.GET_ARCHITECTS_DETAIL };
};
